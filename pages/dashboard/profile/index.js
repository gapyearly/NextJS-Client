import DashboardLayout from "@components/Layouts/DashboardLayout";
import styles from "@styles/Dashboard/UserDashboard.module.css";
import React, { useState, cloneElement } from "react";
import { useAuth } from "@contexts/auth";
import fullName from "@util/fullName";
import { useForm } from "react-hooks-helper";
import EasyEdit, { Types } from "react-easy-edit";
import strapi from "@api/strapi";

export default function Profile() {
  const [editProfile, setEditProfile] = useState(false);
  const { user } = useAuth();
  // Loadings user information only once.

  return (
    <DashboardLayout>
      <StaticProfile user={user} />
    </DashboardLayout>
  );
}

const StaticProfile = ({ user }) => {
  const saveProfile = (field, value) => {};
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
          <div>
            <EasyEdit
              type={Types.TEXT}
              onSave={saveProfile}
              value={user.firstName}
              instructions="Edit First Name"
            />
            <EasyEdit
              type={Types.TEXT}
              onSave={saveProfile}
              value={user.lastName}
              instructions="Edit Last Name"
            />
          </div>
          <hr />
          <h2>Role:</h2>
          <p>{user.role.name}</p>
          <hr />
          <h2>Gap Year:</h2>
          <p className={styles.alignRight}>
            {user.gapYearStart}
            {user.gapYearStart && user.gapYearEnd && "-"}
            {user.gapYearEnd}
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
          <h2>Language Interests:</h2>
          <p>{user.language}</p>
          <hr />
          <h2>Bio:</h2>
          <p>{user.bio}</p>
        </div>
      </div>
    </>
  );
};
const EditableProfile = ({ user }) => {
  const [formData, setForm] = useForm(user);
  console.log(formData);
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
          <label htmlFor="firstName">
            First Name
            <input
              id={styles.experienceTitle}
              name="firstName"
              onChange={setForm}
            />
          </label>
          <label htmlFor="lastName">
            Last Name
            <input
              id={styles.experienceTitle}
              name="lastName"
              onChange={setForm}
            />
          </label>
          <hr />
          <h2>Gap Year:</h2>
          <label htmlFor="gapYearStart">
            Gapyear Start
            <input
              id={styles.experienceTitle}
              name="gapYearStart"
              onChange={setForm}
            />
          </label>
          <br />
          <label htmlFor="gapYearEnd">
            Gapyear End
            <input
              id={styles.experienceTitle}
              name="gapYearEnd"
              onChange={setForm}
            />
          </label>
          <hr />
          <h2>University:</h2>
          <label htmlFor="universityName">
            University
            <input
              id={styles.experienceTitle}
              name="universityName"
              onChange={setForm}
            />
          </label>
          <br />
          <label htmlFor="universityYear">
            Graduation Year
            <input
              id={styles.experienceTitle}
              name="universityYear"
              onChange={setForm}
            />
          </label>
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
          <h2>Language Interests:</h2>
          <p>{user.language}</p>
          <hr />
          <h2>Bio:</h2>
          <p>{user.bio}</p>
        </div>
      </div>
    </>
  );
};
