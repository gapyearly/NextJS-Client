import styles from "./Navbar.module.css";
import Link from "next/link";

const sitemap = require("./sitemap.json").header;
/**
 * Sitemap Header Structure Ex.
 * Array of navFolders:
 *    Label:"About"  // Title of nav folder
 *    dropDownItems: Array of dropdownItems // Each dropdown item consists of:
 *       "linkLabel" to be displayed and,
 *       "href" to be used as a link
 */
export default function NavMenu() {
  //
  const navFolders = sitemap.map((navFolderInfo) => {
    return <NavFolder key={navFolderInfo.label} data={navFolderInfo} />;
  });
  return <div className={styles.navItems}>{navFolders}</div>;
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
