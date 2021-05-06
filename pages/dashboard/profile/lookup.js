import DashboardLayout from "@components/Layouts/DashboardLayout";
import styles from "@styles/Dashboard/UserDashboard.module.css";
import React, { useState, useEffect } from "react";
import fullName from "@util/fullName";
import Button from "@components/Buttons/Button";
import { useRouter } from "next/router";
import strapi from "@api/strapi";
// Uses user as a query parameter

export default function Profile() {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState(null);
  const router = useRouter();

  // Loadings user information only once.
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { user } = router.query;
        console.log(user);
        if (!user) throw Error;
        const { data: profile } = await strapi.get(`users`, {
          params: {
            username: user,
          },
        });
        setProfile(profile[0]);
      } catch {}
      setLoading(false);
    };
    if (router.isReady) fetchUser();
  }, [router]);
  console.log(loading, profile);
  return (
    <DashboardLayout>
      <h1 className={styles.title}>Profile Overview</h1>
      {loading && (
        <div className={styles.profile}>
          <h2>Loading Profile . . .</h2>
        </div>
      )}
      {!loading && !profile && (
        <div className={styles.profile}>
          <h2>Profile not found</h2>
        </div>
      )}
      {!loading && profile && <StaticProfile user={profile} />}
    </DashboardLayout>
  );
}

const StaticProfile = ({ user }) => {
  return (
    <>
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

          {(user.gapYearStart || user.gapYearStart) && (
            <>
              <hr />
              <h2>Gap Year:</h2>
              <p className={styles.alignRight}>
                {user.gapYearStart}
                {user.gapYearStart && user.gapYearEnd && "-"}
                {user.gapYearEnd}
              </p>
            </>
          )}
          {user.universityName && (
            <>
              <hr />
              <h2>University:</h2>
              <p>
                {user.universityName} {user.universityYear}
              </p>
            </>
          )}
          {user.location && (
            <>
              <hr />
              <h2>Location:</h2>
              <p>{user.location}</p>
            </>
          )}
          {user.instagram && (
            <>
              <hr />
              <h2>Instagram:</h2>
              <p>@{user.instagram}</p>
            </>
          )}
          {user.interests.length !== 0 && (
            <>
              <hr />
              <h2>Interests:</h2>
              <p>{user.interests}</p>
            </>
          )}
          {user.language && (
            <>
              <hr />
              <h2>Language Interests:</h2>
              <p>{user.language}</p>
            </>
          )}
          {user.bio && (
            <>
              <hr />
              <h2>Bio:</h2>
              <p>{user.bio}</p>
            </>
          )}
        </div>
      </div>
    </>
  );
};
