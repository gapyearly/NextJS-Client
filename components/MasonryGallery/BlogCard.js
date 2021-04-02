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
export default function LinkCard({ data }) {
  const { title, description, slug, image, author } = data;
  const fullName = `${author.personalInfo.firstName} ${author.personalInfo.lastName}`;
  // TODO: Fix up structure and styling
  return (
    <div className={styles.linkCard}>
      <img src={image.url} alt={image.alt} />
      <h2>{title}</h2>
      <p>By: {fullName}</p>
      <p>{description}</p>
      <Link href={`/blog/${slug}`}>
        <a className="blueUnderline">
          <FaExternalLinkAlt size="15"></FaExternalLinkAlt> Read more...
        </a>
      </Link>
    </div>
  );
}
