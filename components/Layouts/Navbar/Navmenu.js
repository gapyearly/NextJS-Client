import styles from "./Navbar.module.css";
const sitemap = require("./sitemap.json").header;

export default function NavMenu() {
  const navItems = sitemap.map((navItemInfo) => {
    return <NavItem key={navItemInfo.label} data={navItemInfo} />;
  });
  return <div className={styles.navItems}>{navItems} <button className={styles.signup}>Log in</button></div>;
  //TODO: add a link to this button
}

const NavItem = ({ data }) => {
  return <a className={styles.navLink}>{data.label}</a>;
};
