import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
// How far the user has to scroll in px for nav to reappear
const SCROLL_LENGTH = 70;

export default function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  // Changes the visiblitiy state based off if the user scrolled up.
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > SCROLL_LENGTH) ||
        currentScrollPos < 10
    );
    setPrevScrollPos(currentScrollPos);
  };

  console.log(prevScrollPos);

  // When component is loaded, create an event listener to detect scrolls
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav>
      <style jsx>{`
        top: ${visible ? "0" : "-80px"};
      `}</style>
      <div id="navbar" className={styles.navbar}>
        <Link href="/">
          <img
            src="/images/logo.png"
            layout="fill"
            alt="Gapyearly Logo"
            className={styles.logo}
          />
        </Link>
        <NavMenu></NavMenu>
      </div>
    </nav>
  );
}

const NavMenu = () => {
  return <div></div>;
};
const DropDownItem = () => {};
