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

const Redirect = redirect("/login");
const SignupRedirect = redirect("/signup/additional-info");

export default function DashboardLayout({ children }) {
  const { isAuthenticated, loading, user, logout } = useAuth();
  const [loggingOut, setLoggingOut] = useState(false);
  const router = useRouter();
  if (loading) return <div></div>;
  if (!isAuthenticated) {
    window.sessionStorage.setItem("redirect", router.pathname);
    return (
      <Redirect>
        <div style={{ display: "grid", placeItems: "center" }}>
          <h1>Please sign in . . .</h1>
        </div>
      </Redirect>
    );
  }
  if (!user.signupCompletion && !loggingOut) {
    return <SignupRedirect />;
  }
  return (
    <>
      <Navbar logout={logout} setLoggingOut={setLoggingOut} />
      <main className={styles.main}>
        {children}
        <Button className={styles.exitDashBtn} color="greenBg" href="/">
          <FaArrowLeft style={{ marginRight: 5 }} />
          Back to Gapyearly
        </Button>
      </main>
    </>
  );
}

const Navbar = ({ logout, setLoggingOut }) => {
  const alert = useAlert();
  return (
    <div className={styles.navbar}>
      <Link href="/">
        <img
          src="/images/lightlogo.png"
          layout="fill"
          alt="Gapyearly Logo"
          className={styles.logo}
        />
      </Link>
      <NavItem href="/dashboard/messaging">
        <HiMail className={styles.navIcon} />
        Messaging
      </NavItem>

      <NavItem href="/dashboard/community">
        <FaGlobe className={styles.navIcon} />
        Community Hub
      </NavItem>
      <NavItem href="/dashboard/submission">
        <BsFillChatSquareFill className={styles.navIcon} />
        Share Your Story
      </NavItem>
      <NavItem href="/dashboard/profile">
        <BsPersonFill className={styles.navIcon} />
        Profile Overview
      </NavItem>

      <NavItem href="/dashboard/settings">
        <RiSettings3Fill className={styles.navIcon} />
        Account Settings
      </NavItem>
      <NavItem
        href="/"
        onClick={() => {
          setLoggingOut(true);
          logout();
          alert.success("Logged out");
        }}
      >
        <IoMdExit className={styles.navIcon} />
        Logout
      </NavItem>
    </div>
  );
};

const NavItem = ({ href, children, onClick }) => {
  const router = useRouter();
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
        <a>{children}</a>
      </div>
    </Link>
  );
};
