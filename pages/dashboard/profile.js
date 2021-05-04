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
import { cloneElement } from "react";
import Bio from "@components/Forms/SignupForm/formsteps/Bio";

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
  console.log(user);
  return (
    <>
      <h1 className={styles.title}>Profile Overview</h1>
      <div className={styles.profile}>
        <img
          src={user.profilePicture.url}
          alt="Profile Avatar"
          className={styles.avatar}
        />
        <div className={styles.profileContainer}>
          <h2>Name:</h2>
          <p>{fullName(user)}</p>
          <hr />
          <h2>Role:</h2>
          <p>{user.role.name}</p>
          <hr />
          <h2>Gap Year:</h2>
          <p>
            {user.gapYearStart}-{user.gapYearEnd}
          </p>
          <hr />
          <h2>University:</h2>
          <p>
            {user.universityName} {user.universityYear}
          </p>
          <hr />
          <h2>Location:</h2>
          <p>{user.location}</p>
          <hr />
          <h2>Instagram:</h2>
          <p>@{user.instagram}</p>
          <hr />
          <h2>Interests:</h2>
          <p>{user.interests}</p>
          <hr />
          <h2>Languages:</h2>
          <p>{user.language}</p>
          <hr />
          <h2>Bio:</h2>
          <p>{user.bio}</p>
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
