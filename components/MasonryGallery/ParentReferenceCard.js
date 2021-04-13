/**
 * Used in /blog gallery page.
 */
import styles from "./PastExperienceCard.module.css";
import pillstyles from "components/Buttons/Button.module.css";
import Pill from "components/Buttons/Pill.js";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";

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
  const { title, location, funRating, slug, image, category, cost } = data;
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
      <img src={image.url} alt={image.alt} />
      <h2>{title}</h2>

      <p className={styles.location}>
        <FaMapMarkerAlt className={styles.pin}></FaMapMarkerAlt> {location}
      </p>

      <div className={styles.cardSummary}>
        <div className={styles.starRating}>{StarsComponent(funRating)}</div>
        <div className={styles.costIcon}>{CostComponent(cost)}</div>
        <div className={styles.category}>{CategoryComponent(category)}</div>
        {}
      </div>
    </div>
  );
}

export const StarsComponent = (rating) => {
  const StarsComponent = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      StarsComponent.push(<FaStar className={styles.blueStar} key={i} />);
    } else {
      StarsComponent.push(<FaStar className={styles.grayStar} key={i} />);
    }
  }
  return StarsComponent;
};
