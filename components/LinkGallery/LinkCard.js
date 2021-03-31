import styles from "./Card.module.css";

import {FaExternalLinkAlt} from "react-icons/fa";

import Link from "next/link";
/**
 * Paremters for a linkcard
 * @param  {string} source
 * @param  {string} title
 * @param  {string} desc
 * @param  {string} href
 */
export default function LinkCard({ source, title, desc, href }) {
  return (
    <div className={styles.linkCard}>
      <p className={styles.source}>{source.toUpperCase()}</p>
      <h2>{title}</h2>
      <p>{desc}</p>
      <Link href={href}>
        <a className="blueUnderline"><FaExternalLinkAlt></FaExternalLinkAlt> Read more...</a>
      </Link>
    </div>
  );
}
