import { Avatar } from "react-chat-elements";
import { FaAngleDown } from "react-icons/fa";
import styles from "./Navbar.module.css";
import React, { useState } from "react";

export default function AvatarDropdown({ avatar }) {
  const [showDropdown, setShowDropdown] = useState(false);
  console.log(showDropdown);
  return (
    <div
      className={styles.avatarContainer}
      onClick={() => {
        setShowDropdown(!showDropdown);
      }}
    >
      <div></div>
      <Avatar
        src={avatar}
        alt={"logo"}
        size="small"
        type="circle"
        className={styles.avatar}
      />
      <FaAngleDown size={"1rem"} />
      <div className={styles.dropdownContent}>
        <p>hey</p>
      </div>
    </div>
  );
}
