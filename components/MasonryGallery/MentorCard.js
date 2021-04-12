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
  bgColor,
}) {
  const MentorCardContent = () => {
    return (
      <>
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
      </>
    );
  };
  const bgColorComponent = (bgColor) => {
    return {
      red: <MentorCardContent className={styles.redBg} />,
      yellow: <MentorCardContent className={styles.yellowBg} />,
      green: <MentorCardContent className={styles.greenBg} />,
      blue: <MentorCardContent className={styles.blueBg} />,
    }[bgColor];
  };

  return (
    <div className={styles.mentorCardOverlay}>{bgColorComponent(bgColor)}</div>
  );
}
