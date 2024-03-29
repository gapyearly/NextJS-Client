import styles from "./Card.module.css";
import Link from "next/link";
import Button from "@components/Buttons/Button";
import { HiMail } from "react-icons/hi";
import ReactHtmlParser from "react-html-parser";
import Pill from "@components/Buttons/Pill";
import React, { useState } from "react";
import MessageModal from "@components/Dashboard/Messaging/MessageModal";

export default function MentorCard({ user, bgColor }) {
  const [modal, setModal] = useState({ show: false });

  const {
    firstName,
    lastName,
    universityName,
    universityYear,
    mentorInfo,
    profilePicture,
  } = user;
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
            {SelfFundedComponent(mentorInfo.selfFunded)}
          </span>
        </div>
        <h3>
          {universityName} {universityYear}
        </h3>

        <h4>WHAT I DID:</h4>
        {ReactHtmlParser(mentorInfo.summary)}
        <h4>WHAT I STRUGGLED WITH:</h4>
        {ReactHtmlParser(mentorInfo.struggles)}
      </div>
      <div className={styles.messageBtn}>
        <Button
          onClick={() => {
            setModal({ show: true, recipient: user });
          }}
          color="darkBg"
        >
          <HiMail></HiMail> Message
        </Button>
      </div>
      <MessageModal
        {...modal}
        onClose={() => {
          setModal({ show: false });
        }}
      />
    </div>
  );
}
export const SelfFundedComponent = (selfFunded) => {
  if (selfFunded === true) {
    return <Pill color="greenBg">Self-funded</Pill>;
  }
};
