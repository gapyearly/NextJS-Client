import styles from "./Navbar.module.css";
const sitemap = require("./sitemap.json").header;

export default function NavMenu() {
  const navItems = sitemap.map((navItemInfo) => {
    return <NavFolder key={navItemInfo.label} data={navItemInfo} />;
  });
  return <div>{navItems}</div>;
}

const NavFolder = ({ data }) => {
  return (
    <span>
      <a className={styles.navLink}>{data.label}</a>
    </span>
  );
};
