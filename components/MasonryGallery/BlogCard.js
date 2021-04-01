/**
 * Used in /blog gallery page.
 */
import styles from "./Card.module.css";

import { FaExternalLinkAlt } from "react-icons/fa";

import Link from "next/link";
/**
 * Paremters for a blogcard
 * @param  {string} source
 * @param  {string} title
 * @param  {string} desc
 * @param  {string} href
 */
export default function LinkCard(props) {
  const { image, title, desc, author } = props;
  return (
    <div className={styles.linkCard}>
      <p className={styles.source}>{source.toUpperCase()}</p>
      <h2>{title}</h2>
      <p>{desc}</p>
      <Link href={href}>
        <a className="blueUnderline">
          <FaExternalLinkAlt size="15"></FaExternalLinkAlt> Read more...
        </a>
      </Link>
    </div>
  );
}
