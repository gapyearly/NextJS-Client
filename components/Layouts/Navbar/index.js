import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import LoginButton from "@components/Buttons/LoginButton";
import debounce from "@util/debounce";
import Navfolder from "./Navfolder";
import NavLink from "./NavLink";
import Link from "next/link";
import { useAuth } from "@contexts/auth";

import AvatarDropdown from "./AvatarDropdown";

// How far the user has to scroll in px for nav to reappear
const SCROLL_LENGTH = 50;
// How often it checks for scroll
const DEBOUNCE_DELAY = 50;

// TODO: Cleanup Scroll and make it look nicer and play better.

export default function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [navbarHeight, setNavbarHeight] = useState(0);

  const { isAuthenticated, user } = useAuth();

  /**
   * Changes the visiblitiy state based off if the user scrolled up.
   * @see{https://www.prwhite.io/blog/sticky-navbar-hides-scroll}
   *  */
  const checkScroll = () => {
    const currentScrollPos = window.pageYOffset;
    // Checks if the previous scroll pos is greater than the current pos, which signifys a scroll up.
    // The second line checks if they scrolled a significant ammount
    // Third line makes sure visibility is constant at the top of page.
    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > SCROLL_LENGTH) ||
        currentScrollPos < 10
    );
    setPrevScrollPos(currentScrollPos);
  };

  const handleScroll = debounce(checkScroll, DEBOUNCE_DELAY);

  // When component is loaded, create an event listener to detect scrolls
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, handleScroll]);

  // Gets CSS Variable for Navbar height
  useEffect(() => {
    const height = getComputedStyle(document.documentElement).getPropertyValue(
      "--navbarHeight"
    );
    setNavbarHeight(height.trim());
  }, []);
  let NavUser;
  if (isAuthenticated) {
    // TODO Default Profile Picture
    if (user.profilePicture) {
      NavUser = <AvatarDropdown avatar={user.profilePicture.url} />;
    } else {
      NavUser = <AvatarDropdown />;
    }
  } else {
    NavUser = (
      <LoginButton color="greenBg" href="/login">
        Log in
      </LoginButton>
    );
  }

  return (
    <nav className={styles.navbar} id="navbar">
      <style jsx>{`
        top: ${visible ? "0" : `-${navbarHeight}`};
      `}</style>
      <Link href="/">
        <img
          src="/images/logo.png"
          layout="fill"
          alt="Gapyearly Logo"
          className={styles.logo}
        />
      </Link>
      <div className={styles.navItems}>
        <NavLink href="/">Home</NavLink>
        <Navfolder title="About" href="">
          <NavLink href="/about">About Gapyearly</NavLink>
          <NavLink href="/about/our-team">Our Team</NavLink>
          <NavLink href="/about/join-the-team">Join the Team</NavLink>
          {/* <NavLink href="/about/our-sponsors">Our Sponsors</NavLink> */}
          <NavLink href="/contact">Contact</NavLink>
        </Navfolder>
        <Navfolder title="Opportunities" href="">
          <NavLink href="/opportunities/covid-experiences">
            COVID-19 Experiences
          </NavLink>
          <NavLink href="/opportunities/past-experiences">
            Past Experiences
          </NavLink>
        </Navfolder>
        <Navfolder title="Community" href="">
          <NavLink href="/community/mentorship">Mentorship</NavLink>
          <NavLink href="/community/connect">Gapyearly Connect</NavLink>
        </Navfolder>
        <Navfolder title="Prospective" href="">
          <NavLink href="/prospective/facts-and-figures">
            Facts & Figures
          </NavLink>
          <NavLink href="/prospective/parent-reflections">
            Parent Reflections
          </NavLink>
          <NavLink href="/prospective/girls-who-gap">Girls Who Gap</NavLink>
          <NavLink href="/prospective/faq">FAQ</NavLink>
        </Navfolder>
        <NavLink href="/blog">Blog</NavLink>
        {NavUser}
      </div>
    </nav>
  );
}
