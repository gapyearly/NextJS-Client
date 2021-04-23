import { Avatar } from "react-chat-elements";
import { FaAngleDown } from "react-icons/fa";
import styles from "./Navbar.module.css";
import React, { useState } from "react";
import Navlink from "./NavLink";
import { useAlert } from "react-alert";
import { useAuth } from "@contexts/auth";

export default function AvatarDropdown({ avatar }) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div>
      <div
        className={styles.avatarContainer}
        onClick={() => {
          setShowDropdown(!showDropdown);
        }}
      >
        <Avatar
          src={avatar}
          alt={"logo"}
          size="small"
          type="circle"
          className={styles.avatar}
        />
        <FaAngleDown size={"1rem"} />
      </div>
      {showDropdown && <Dropdown />}
    </div>
  );
}

const Dropdown = () => {
  const alert = useAlert();
  const { logout } = useAuth();
  // TODO Logout Page?
  return (
    <div className={styles.avatarDropdownContent}>
      <Navlink href="/dashboard">My Dashboard</Navlink>
      <Navlink href="/dashboard/profile">My Profile</Navlink>
      <Navlink href="/dashboard/messaging">Messaging</Navlink>
      <Navlink href="/dashboard/settings">Settings</Navlink>
      <a
        onClick={() => {
          alert.success("Logged out");
          logout();
        }}
        href="#"
      >
        Logout
      </a>
    </div>
  );
};
