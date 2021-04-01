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
export default function ExperienceCard({
  data: { title, locations, funRating, slug, image, category, cost },
}) {
  // TODO Fix up structure and styling
  return (
    <div className={styles.linkCard}>
      <img src={image.url} alt={image.alt} />
      <h2>{title}</h2>

      <Link href={`/blog/${slug}`}>
        <a className="blueUnderline">
          <FaExternalLinkAlt size="15"></FaExternalLinkAlt> Read more...
        </a>
      </Link>
    </div>
  );
}
