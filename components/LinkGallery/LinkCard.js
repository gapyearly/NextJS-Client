import styles from "./Card.module.css";

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
    <div>
      <p className={styles.source}>{source.toUpperCase()}</p>
      <h2>{title}</h2>
      <p>{desc}</p>
      <Link href={href}>
        <a className="noUnderline">Read more...</a>
      </Link>
    </div>
  );
}
