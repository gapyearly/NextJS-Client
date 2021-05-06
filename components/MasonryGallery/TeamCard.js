/**
 * Used in /blog gallery page.
 */
import styles from "./TeamCard.module.css";

import Link from "next/link";
/**
 * Paremters for a blogcard
 * @param  {string} source
 * @param  {string} title
 * @param  {string} desc
 * @param  {string} href
 */
export default function TeamCard({ image, fullName, bio, location }) {
  //    const name = {};
  //    if (author) {
  //      name.name = `${author.firstName} ${author.lastName}`;
  //      name.user = true;
  //    } else {
  //      name.name = submittedBy;
  //      name.user = false;
  //    }

  return (
    <div className={styles.teamCardContainer}>
      <div>
        <img src={image.url} alt={image.alt}></img>
      </div>
      <h2>{fullName}</h2>
      <h3>{location}</h3>
      <p>{bio}</p>
    </div>
  );
}
