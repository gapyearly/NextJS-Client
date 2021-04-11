import styles from "./Card.module.css";
import Link from "next/link";
import Button from "@components/Buttons/Button";
import { HiMail } from "react-icons/hi";
import ReactHtmlParser from "react-html-parser";
export default function MentorCard({
  firstName,
  lastName,
  universityName,
  universityYear,
  summary,
  struggles,
}) {
  return (
    <div className={styles.mentorCardOverlay}>
      <div className={styles.mentorCard}>
        <h2>{firstName} </h2>
        <h2>{lastName}</h2>
        <h3>
          {universityName} {universityYear}
        </h3>
        <h4>WHAT I DID:</h4>
        {ReactHtmlParser(summary)}
        <h4>WHAT I STRUGGLED WITH:</h4>
        {ReactHtmlParser(struggles)}
      </div>
      <div className={styles.messageBtn}>
        <Button href="/" color="darkBg">
          <HiMail></HiMail> Message
        </Button>
      </div>
    </div>
  );
}
// REPLACE LINKGKDGKFGKDFLGD
