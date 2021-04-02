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
export default function ExperienceCard({ data, onClick }) {
  // TODO Fix up structure and styling
  const { title, locations, funRating, slug, cover, category, cost } = data;
  const handleClick = () => {
    onClick(data);
  };

  return (
    <div
      className={styles.linkCard}
      onClick={handleClick}
      role="button"
      tabIndex={0}
    >
      <img src={cover.url} alt={cover.alt} />
      <h2>{title}</h2>

      <Link href={`/blog/${slug}`}>
        <a className="blueUnderline">
          <FaExternalLinkAlt size="15"></FaExternalLinkAlt> Read more...
        </a>
      </Link>
    </div>
  );
}
