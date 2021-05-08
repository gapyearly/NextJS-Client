import styles from "./Card.module.css";
import Link from "next/link";
import Button from "@components/Buttons/Button";
import { HiMail } from "react-icons/hi";
import ReactHtmlParser from "react-html-parser";
import Pill from "@components/Buttons/Pill";

export default function MentorCard({
  firstName,
  lastName,
  universityName,
  universityYear,
  summary,
  struggles,
  bgColor,
  profilePicture,
  selfFunded,
}) {
  console.log(selfFunded);
  return (
    <div className={styles.mentorCardOverlay}>
      <div className={`${styles.mentorCard} ${styles[`${bgColor}Bg`]}`}>
        <div className={styles.header}>
          <div className={styles.headerProfile}>
            <img
              src={profilePicture.url}
              alt=""
              className={styles.profilePicture}
            ></img>
            <h2>{firstName} </h2>
            <p>&nbsp;</p>
            {/* space btwn first and last name */}
            <h2>{lastName}</h2>{" "}
          </div>
          <span className={styles.selfFundedContainer}>
            {SelfFundedComponent(selfFunded)}
          </span>
        </div>
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
export const SelfFundedComponent = (selfFunded) => {
  if (selfFunded === true) {
    return <Pill color="greenBg">Self-funded</Pill>;
  }
};
