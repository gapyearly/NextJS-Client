import Link from "next/link";
import styles from "./Footer.module.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

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
      <div className={styles.sitemap}>{footercolumns}</div>
      <div className={styles.socialMediaIconWrapper}>
        <a
          href="https://www.instagram.com/gapyearly"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram size="1.5rem" className="socialMediaIcon"></FaInstagram>
        </a>
        <a
          href="https://www.facebook.com/gapyearly"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookF
            className="socialMediaIcon"
            size="1.5rem"
            style={{ marginLeft: 6 }}
          ></FaFacebookF>
        </a>
      </div>
      <div className={styles.centerFooter}>
        <div className={styles.legal}>
          <Link href="/privacy-policy">
            <a className="blueUnderline">Privacy Policy</a>
          </Link>{" "}
          |{" "}
          <Link href="/terms">
            <a className="blueUnderline">Terms of Use</a>
          </Link>
        </div>
        <p>
          © Gapyearly 2021 | Built by{" "}
          <a
            href="https://github.com/NukeWolf"
            target="_blank"
            className="blueUnderline"
          >
            Alex
          </a>{" "}
          and{" "}
          <a
            className="blueUnderline"
            href="https://github.com/wangarlene"
            target="_blank"
          >
            Arlene
          </a>
        </p>
      </div>
    </footer>
  );
}

const FooterColumn = ({ title, values, href }) => {
  // Subcontent under the label

  if (href) {
    title = (
      <Link href={href}>
        <a className="noUnderline">{title}</a>
      </Link>
    );
  }
  const content = values.map((value) => {
    return (
      <li key={value.linkLabel} className={styles.footer_column_link}>
        <Link href={value.href}>
          <a className="noUnderline">{value.linkLabel}</a>
        </Link>
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
