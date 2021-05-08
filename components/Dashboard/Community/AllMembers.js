import styles from "./Allmember.module.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import React, { useState, useEffect } from "react";
import strapi from "@api/strapi";
import fullName from "@util/fullName";
import RolePill from "../ProfileComponents/role";
import { Avatar } from "react-chat-elements";
import { FaMapMarkerAlt, FaInstagram } from "react-icons/fa";
import MessageModal from "@components/Dashboard/Messaging/MessageModal";

import Link from "next/link";
import Interests from "../ProfileComponents/interests";
export default function Allmembers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await strapi.get("users");
      setUsers(data);
    };
    fetchUsers();
  }, []);
  console.log(users);
  const AccordionItems = users.map((user) => {
    return (
      <AccordionItem key={user.username} className={styles.accordion__item}>
        <AccordionItemHeading className={styles.accordion__heading}>
          <AccordionItemButton className={styles.accordion__button}>
            <div>
              <div className={styles.avatar}>
                <Avatar
                  src={user.profilePicture && user.profilePicture.url}
                  alt={"profile"}
                  size="small"
                  type="circle"
                />
              </div>
              <h3>{fullName(user)}</h3>
              <RolePill role={user.role.name} />
              <div>
                <FaMapMarkerAlt styles={{ color: "var(--clay)" }} />{" "}
                {user.location}
              </div>
            </div>
            <p className={styles.alignRight}>
              {user.gapYearStart}
              {user.gapYearStart && user.gapYearEnd && "-"}
              {user.gapYearEnd}
            </p>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className={styles.userDescription}>
          {/* <MessageModal recipient={{firstName:{user.firstName}
        }} /> */}
          <p>
            {user.universityName} {user.universityYear}
          </p>
          <div className={styles.instagram}>
            <FaInstagram />
            <a
              href={`https://instagram.com/${user.instagram}`}
              target="_blank"
              rel="noreferrer"
            >
              {user.instagram}
            </a>
            <h4>Interests:</h4>
            <p>
              <Interests
                interests={user.interests.map((intrest) => intrest.id)}
              />
            </p>
            <p>{user.language}</p>
            {user.bio}
          </div>
        </AccordionItemPanel>
      </AccordionItem>
    );
  });

  return (
    <Accordion className={styles.accordion} allowZeroExpanded>
      {AccordionItems}
    </Accordion>
  );
}
