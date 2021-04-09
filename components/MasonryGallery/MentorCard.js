import styles from "./Card.module.css";
import Link from "next/link";

export default function MentorCard({ fullName, school, summary, struggles }) {
  return (
    <div className={styles.mentorCard}>
      <h2>{fullName}</h2>
      <h3>{school}</h3>
      <h4>WHAT I DID:</h4>
      <p>{summary}</p>
      <h4>WHAT I STRUGGLED WITH:</h4>
      <p>{struggles}</p>
    </div>
  );
}
//list elements?
