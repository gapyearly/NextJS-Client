import DashboardLayout from "@components/Layouts/DashboardLayout";
import styles from "@styles/Dashboard/UserDashboard.module.css";
import React, { useState } from "react";
import Link from "next/link";

import { useAuth } from "@contexts/auth";
import Button from "@components/Buttons/Button";
import strapi from "@api/strapi";
import {
  RIEToggle,
  RIEInput,
  RIETextArea,
  RIENumber,
  RIETags,
  RIESelect,
} from "riek";
import _ from "lodash";

export default function Profile() {
  const { user, loading } = useAuth();
  const [personalInfo, setPersonalInfo] = useState(null);
  if (!loading && user) {
    setPersonalInfo(user.personalInfo);
    const {
      email,
      role,
      firstName,
      lastName,
      gapYearStart,
      gapYearEnd,
      universityName,
      universityYearlocation,
      profilePicture,
      bio,
      selfFunded,
      summary,
      struggles,
    } = user;
  }
  console.log(personalInfo);
  return (
    <DashboardLayout>
      <h1 className={styles.title}>Profile Overview</h1>
      <div className={styles.container}>
        <div className={styles.profile}>
          <h2>Name:</h2>
          <RIEInput />
        </div>
      </div>
    </DashboardLayout>
  );
}

/* export async function getStaticProps(ctx) {
  const { data } = await strapi.get("users-permissions_user");
  return {
    props: {
      data,
    },
  };
} */
