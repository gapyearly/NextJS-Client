/**
 * Used in /blog gallery page.
 */
import styles from "./ParentReflectionCard.module.css";

import Link from "next/link";

/**
 * Paremters for a blogcard
 * @param  {string} source
 * @param  {string} title
 * @param  {string} desc
 * @param  {string} href
 */
export default function ParentReflectionCard({ data, onClick }) {
  // TODO Fix up structure and styling
  const {
    title,
    parentFullName,
    childFullName,
    slug,
    image,
    author,
    content,
    description,
  } = data;
  const handleClick = () => {
    onClick(data);
  };

  return (
    <div
      className={styles.card}
      onClick={handleClick}
      role="button"
      tabIndex={0}
    >
      <h2>{title}</h2>
      <h3>
        – {parentFullName}, parent of {childFullName}
      </h3>
      <p>{description}</p>
      <img src={image.url} alt={image.alt} />
    </div>
  );
}
