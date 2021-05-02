import DashboardLayout from "@components/Layouts/DashboardLayout";
import styles from "@styles/Dashboard/UserDashboard.module.css";
import React, { useState } from "react";
import { useAuth } from "@contexts/auth";
import fullName from "@util/fullName";

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
  const [editProfile, setEditProfile] = useState(false);
  // Loadings user information only once.

  return (
    <DashboardLayout>
      <StaticProfile />
    </DashboardLayout>
  );
}

const StaticProfile = () => {
  const { user } = useAuth();
  return (
    <>
      <h1 className={styles.title}>Profile Overview</h1>
      <div className={styles.profileContainer}>
        <img
          src={user.profilePicture.url}
          alt="Profile Avatar"
          className={styles.avatar}
        />
        <div className={styles.container}>
          <h3>Name:</h3>
          <p>{fullName(user)}</p>
          <hr />
          <h3>Role:</h3>
          <p>{fullName(user)}</p>
          <hr />
          <h3>Gap Year:</h3>
          <p>Yo</p>
          <hr />
          <h3>Location:</h3>
          <p>Location</p>
          <hr />
          <h3>Bio:</h3>
          <p>Location</p>
        </div>
      </div>
    </>
  );
};

/* export async function getStaticProps(ctx) {
  const { data } = await strapi.get("users-permissions_user");
  return {
    props: {
      data,
    },
  };
} */
