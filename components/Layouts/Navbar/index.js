import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import LoginButton from "@components/Buttons/LoginButton";
import debounce from "@util/debounce";
import Navfolder from "./Navfolder";
import NavLink from "./NavLink";
import Link from "next/link";
import { useAuth } from "@contexts/auth";

import AvatarDropdown from "./AvatarDropdown";

import { FaBars, FaAngleDown } from "react-icons/fa";

import { useMediaQuery } from "react-responsive";
// How far the user has to scroll in px for nav to reappear
const SCROLL_LENGTH = 50;
// How often it checks for scroll
const DEBOUNCE_DELAY = 50;

// TODO: Cleanup Scroll and make it look nicer and play better.

export default function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [navbarHeight, setNavbarHeight] = useState(0);

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

  const isMobile = useMediaQuery({ query: `(max-width:767px)` });
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
        {isMobile ? (
          <MobileNav visible={visible} />
        ) : (
          <DesktopNav visible={visible} />
        )}
      </div>
    </nav>
  );
}
const MobileNav = ({ visible }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className={
          !open ? styles.menuIconWrapper : styles.menuIconWrapperActive
        }
      >
        <FaBars
          size={30}
          className={styles.menuIcon}
          onClick={() => setOpen(!open)}
        />
      </div>
      <NavUser />
      {open && visible && <DropdownMenu />}
    </>
  );
};

const DropdownMenu = () => {
  function HeaderItem({ href, label, children }) {
    const [open, setOpen] = useState();
    return (
      <>
        <div className={styles.headerItem}>
          {href ? (
            <NavLink href={href}>{label}</NavLink>
          ) : (
            <>
              <a
                href="#"
                style={{ cursor: "text" }}
                onClick={() => {
                  setOpen(!open);
                }}
              >
                {label}
              </a>
              <FaAngleDown
                onClick={() => {
                  setOpen(!open);
                }}
              />
            </>
          )}
        </div>
        {open && children}
      </>
    );
  }
  function ChildItem({ href, label }) {
    return (
      <div className={styles.childItem}>
        <NavLink href={href}>{label}</NavLink>
      </div>
    );
  }

  return (
    <div className={styles.mobileSidebar}>
      <HeaderItem href="/" label="Home" />
      <HeaderItem label="About">
        <ChildItem href="/about" label="About Gapyearly" />
        <ChildItem href="/about/our-team" label="Our Team" />
        <ChildItem href="/about/join-the-team" label="Join the Team" />
        <ChildItem href="/contact" label="Contact" />
      </HeaderItem>
      <HeaderItem label="Opportunities">
        <ChildItem
          href="/opportunities/past-experiences"
          label="Past Experiences"
        />
      </HeaderItem>
      <HeaderItem label="Community">
        <ChildItem href="/community/mentorship" label="Mentorship" />
        <ChildItem href="/community/connect" label="Gapyearly Connect" />
      </HeaderItem>

      <HeaderItem label="Prospective">
        <ChildItem
          href="/prospective/facts-and-figures"
          label="Facts & Figures"
        />
        <ChildItem
          href="/prospective/parent-reflections"
          label="Parent Reflections"
        />
        <ChildItem href="/prospective/girls-who-gap" label="Girls Who Gap" />
        <ChildItem href="/prospective/faq" label="FAQ" />
      </HeaderItem>
      <HeaderItem href="/blog" label="Blog" />
    </div>
  );
};

const DesktopNav = () => {
  return (
    <>
      <NavLink href="/">Home</NavLink>
      <Navfolder title="About" href="">
        <NavLink href="/about">About Gapyearly</NavLink>
        <NavLink href="/about/our-team">Our Team</NavLink>
        <NavLink href="/about/join-the-team">Join the Team</NavLink>
        {/* <NavLink href="/about/our-sponsors">Our Sponsors</NavLink> */}
        <NavLink href="/contact">Contact</NavLink>
      </Navfolder>
      <Navfolder title="Opportunities" href="">
        <NavLink href="/opportunities/past-experiences">
          Past Experiences
        </NavLink>
      </Navfolder>
      <Navfolder title="Community" href="">
        <NavLink href="/community/mentorship">Mentorship</NavLink>
        <NavLink href="/community/connect">Gapyearly Connect</NavLink>
      </Navfolder>
      <Navfolder title="Prospective" href="">
        <NavLink href="/prospective/facts-and-figures">Facts & Figures</NavLink>
        <NavLink href="/prospective/parent-reflections">
          Parent Reflections
        </NavLink>
        <NavLink href="/prospective/girls-who-gap">Girls Who Gap</NavLink>
        <NavLink href="/prospective/faq">FAQ</NavLink>
      </Navfolder>
      <NavLink href="/blog">Blog</NavLink>
      {<NavUser />}
    </>
  );
};

const NavUser = () => {
  const { isAuthenticated, user } = useAuth();
  if (!(isAuthenticated && user && user.signupCompletion)) {
    return (
      <LoginButton color="greenBg" href="/login">
        Log in
      </LoginButton>
    );
  }

  if (user.profilePicture)
    return <AvatarDropdown avatar={user.profilePicture.url} />;

  return <AvatarDropdown />;
};
