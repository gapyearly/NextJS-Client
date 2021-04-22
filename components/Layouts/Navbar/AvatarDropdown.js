import { Avatar } from "react-chat-elements";
import { FaAngleDown } from "react-icons/fa";
import styles from "./Navbar.module.css";

export default function AvatarDropdown({ avatar }) {
  return (
    <>
      <Avatar
        src={avatar}
        alt={"logo"}
        size="small"
        type="circle"
        className={styles.avatar}
        style={{ cursor: "pointer" }}
      />
      <FaAngleDown size={"1rem"} style={{ cursor: "pointer" }} />
    </>
  );
}
