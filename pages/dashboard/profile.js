import DashboardLayout from "@components/Layouts/DashboardLayout";
import styles from "@styles/Dashboard/UserDashboard.module.css";
import React, { useState } from "react";

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
  const [editProfile, setEditProfile] = useState(false);
  // Loadings user information only once.

  return (
    <DashboardLayout>
      <StaticProfile />
    </DashboardLayout>
  );
}

const StaticProfile = () => {
  return (
    <div>
      <h1 className={styles.title}>Profile Overview</h1>
      <div className={styles.container}>
        <div className={styles.profile}>
          <h2>Name:</h2>
        </div>
      </div>
    </div>
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
