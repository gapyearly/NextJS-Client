import styles from "./Navbar.module.css";
/**
 * @param  {string} title
 * @param  {string} href
 * @param  {} children
 */
export default function Navfolder({ title, href, children }) {
  return (
    <span className={styles.dropdown}>
      <a className={styles.navLink}>{title}</a>
      <div className={styles.dropdownContent}>{children}</div>
    </span>
  );
}
