import Link from "next/link";
import styles from "./Dashboard.module.css";
import { useAuth } from "@contexts/auth";
import redirect from "nextjs-redirect";
import { useRouter } from "next/router";
import { RiSettings3Fill } from "react-icons/ri";
import { IoMdExit } from "react-icons/io";
import { HiMail } from "react-icons/hi";
import { FaGlobe, FaArrowLeft } from "react-icons/fa";
import { BsFillChatSquareFill, BsPersonFill } from "react-icons/bs";
import Button from "@components/Buttons/Button";
import { useAlert } from "react-alert";
import React, { useState } from "react";
import { NextSeo } from "next-seo";
import { useMediaQuery } from "react-responsive";

const Redirect = redirect("/login");
const SignupRedirect = redirect("/signup/additional-info");
const MAX_WIDTH_QUERY = "800px";

export default function DashboardLayout({ children }) {
  const { isAuthenticated, loading, user, logout } = useAuth();
  const [loggingOut, setLoggingOut] = useState(false);
  const router = useRouter();
  if (loading)
    return (
      <>
        <NextSeo noindex={true} />
      </>
    );
  if (!isAuthenticated && !loggingOut) {
    window.sessionStorage.setItem("redirect", router.pathname);
    return (
      <Redirect>
        <NextSeo noindex={true} />
        <div style={{ display: "grid", placeItems: "center" }}>
          <h1>Please sign in . . .</h1>
        </div>
      </Redirect>
    );
  }
  if (!loggingOut && !user.signupCompletion) {
    window.sessionStorage.setItem("redirect", router.pathname);
    return (
      <>
        <NextSeo noindex={true} />
        <SignupRedirect />
      </>
    );
  }
  return (
    <>
      <NextSeo noindex={true} />
      <DesktopNavbar logout={logout} setLoggingOut={setLoggingOut} />
      <main className={styles.main}>
        <div className={styles.mainCenter}>{children}</div>
        <Button className={styles.exitDashBtn} color="greenBg" href="/">
          {/* <FaArrowLeft style={{ marginRight: 5 }} /> */}
          Back to Gapyearly
        </Button>
      </main>
    </>
  );
}

const DesktopNavbar = ({ logout, setLoggingOut }) => {
  const alert = useAlert();
  const isMobile = useMediaQuery({ query: `(max-width:${MAX_WIDTH_QUERY})` });
  return (
    <div className={styles.navbar}>
      <Link href="/">
        <img
          src={
            isMobile
              ? "/images/Gapyearly_Light_LogoSymbol.svg"
              : "/images/lightlogo.png"
          }
          layout="fill"
          alt="Gapyearly Logo"
          className={styles.logo}
        />
      </Link>
      <NavItem href="/dashboard/messaging" label="Messaging">
        <HiMail className={styles.navIcon} />
      </NavItem>

      <NavItem href="/dashboard/community" label="Community Hub">
        <FaGlobe className={styles.navIcon} />
      </NavItem>
      <NavItem href="/dashboard/submission" label="Share Your Story">
        <BsFillChatSquareFill className={styles.navIcon} />
      </NavItem>
      <NavItem href="/dashboard/profile" label="Profile Overview">
        <BsPersonFill className={styles.navIcon} />
      </NavItem>

      {/* <NavItem href="/dashboard/settings">
        <RiSettings3Fill className={styles.navIcon} />
        Account Settings
      </NavItem> */}
      <NavItem
        href="/"
        onClick={() => {
          setLoggingOut(true);
          logout();
          alert.success("Logged out");
        }}
        label="Logout"
      >
        <IoMdExit className={styles.navIcon} />
      </NavItem>
    </div>
  );
};

const NavItem = ({ href, children, onClick, label }) => {
  const router = useRouter();
  const isMobile = useMediaQuery({ query: `(max-width:${MAX_WIDTH_QUERY})` });
  // Apply Hover effect on routername
  let styling;
  if (router.pathname.includes(href) && href !== "/") {
    styling = `${styles.navItem} ${styles.onHover}`;
  } else {
    styling = styles.navItem;
  }

  return (
    <Link href={href} onClick>
      <div className={styling} onClick={onClick}>
        <a>
          {children}
          {!isMobile && label}
        </a>
      </div>
    </Link>
  );
};
