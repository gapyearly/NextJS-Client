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
              {fullName(user)}
              <RolePill role={user.role.name} />
            </div>
            <p className={styles.alignRight}>
              {user.gapYearStart}
              {user.gapYearStart && user.gapYearEnd && "-"}
              {user.gapYearEnd}
            </p>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>test Data</AccordionItemPanel>
      </AccordionItem>
    );
  });

  return (
    <Accordion className={styles.accordion} allowZeroExpanded>
      {AccordionItems}
    </Accordion>
  );
}
