import Link from "next/link";
import styles from "./Footer.module.css";
import {FaInstagram} from "react-icons/fa";
import {FaFacebookF} from "react-icons/fa";



// Footer sitemap and neccesary links
const sitemap = require("./Navbar/sitemap.json").footer;

export default function Footer() {
  // Each footer column menu
  const footercolumns = sitemap.map((subject) => {
    return (
      <FooterColumn
        title={subject.label}
        href={subject.href}
        values={subject.items}
        key={subject.label}
      />
    );
  });
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.sitemap}>
        {footercolumns}
      </div>
      <div className={styles.socialMediaIconWrapper}>
        <FaInstagram className="socialMediaIcon"></FaInstagram>
        <FaFacebookF className="socialMediaIcon"></FaFacebookF>
      </div>
    </footer>
  );
}

const FooterColumn = ({ title, values, href }) => {
  // Subcontent under the label
  
  if (href) {
    title = <Link href={href}><a className="noUnderline">{title}</a></Link>
  } 
  const content = values.map((value) => {
    return (
      <li key={value.linkLabel} className={styles.footer_column_link}>
        <Link href={value.href}><a className="noUnderline">{value.linkLabel}</a></Link>
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
