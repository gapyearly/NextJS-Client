import styles from "./Navbar.module.css";
import Link from "next/link";

const sitemap = require("./sitemap.json").header;

export default function NavMenu() {

  const navFolders = sitemap.map((navFolderInfo) => {
    return <NavFolder key={navFolderInfo.label} data={navFolderInfo} />;
  });
  return (
    <div className={styles.navItems}>
      {navFolders} <button className={styles.signup}>Log in</button>
    </div>
  );
  // TODO: add a link to this button
}

const NavFolder = ({ data }) => {
  const links = data.dropdownItems.map((item) => {
    return (
      <Link href={item.href} key={item.linkLabel}>
        <a className={styles.dropdownItem}>{item.linkLabel}</a>
      </Link>
    );
  });
  return (
    <span className={styles.dropdown}>
      <a className={styles.navLink}>{data.label}</a>
      <div className={styles.dropdownContent}>{links}</div>
    </span>
  );
};
