import Link from "next/link";
import styles from "./Footer.module.css";
// Footer sitemap and neccesary links
const sitemap = require("./Navbar/sitemap.json").footer;

export default function Footer() {
  // Each footer column menu
  const footercolumns = sitemap.map((subject) => {
    return (
      <FooterColumn
        title={subject.label}
        values={subject.items}
        key={subject.label}
      />
    );
  });
  return (
    <footer id="footer" className={styles.footer}>
      {footercolumns}
    </footer>
  );
}

const FooterColumn = ({ title, values }) => {
  // Subcontent under the label
  const content = values.map((value) => {
    return (
      <li key={value.linkLabel}>
        <p className={styles.footer_column_link}>{value.linkLabel}</p>
      </li>
    );
  });
  return (
    <ul className={styles.footer_column}>
      <li className={styles.footer_column_title}>{title}</li>
      {content}
    </ul>
  );
};

// className={styles.footer}
