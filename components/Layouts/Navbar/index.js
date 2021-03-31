import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import debounce from "@util/debounce";
import Navfolder from "./Navfolder";
import Navlink from "./Navlink";

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
    console.log(prevScrollPos);
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
        <Navfolder title="About" href="">
          <Navlink href="/">About Gapyearly</Navlink>
          <Navlink href="/">Our Team</Navlink>
          <Navlink href="/">Join the Team</Navlink>
          <Navlink href="/">Our Sponsors</Navlink>
          <Navlink href="/">Contact</Navlink>
        </Navfolder>
        <Navfolder title="Opportunities" href="">
          e
        </Navfolder>
        <Navfolder title="Community" href="">
          e
        </Navfolder>
        <Navfolder title="Prospective" href="">
          e
        </Navfolder>
      </div>
    </nav>
  );
}
