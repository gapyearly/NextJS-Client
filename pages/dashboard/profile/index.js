import DashboardLayout from "@components/Layouts/DashboardLayout";
import InterestDropdown from "@components/Forms/InterestsDropdown";
import Interests from "@components/Dashboard/ProfileComponents/interests";

import styles from "@styles/Dashboard/UserDashboard.module.css";

import { useAuth } from "@contexts/auth";
import EasyEdit, { Types } from "react-easy-edit";
import strapi from "@api/strapi";
import React, { useRef } from "react";

import { useAlert } from "react-alert";
import NProgress from "nprogress";

import Modal from "@components/Modal";

export default function Profile() {
  const { user, updateUser, isAuthenticated } = useAuth();
  const alert = useAlert();

  const saveProfile = async (value, field) => {
    NProgress.start();
    try {
      await strapi.put(`users/${user.id}`, { [field]: value });
      await updateUser();
      alert.success("Profile Updated");
    } catch {
      alert.error("Error: Could not update profile.");
    }
    NProgress.done();
  };
  if (!isAuthenticated) return <DashboardLayout />;
  return (
    <DashboardLayout>
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
            <div className={styles.profileSection}>
              <EasyEdit
                type={Types.TEXT}
                onSave={(value) => {
                  saveProfile(value, "firstName");
                }}
                value={user.firstName}
                placeholder="Click to edit First Name"
                instructions="First Name"
              />
              <EasyEdit
                type={Types.TEXT}
                onSave={(value) => {
                  saveProfile(value, "lastName");
                }}
                value={user.lastName}
                placeholder="Click to edit Last Name"
                instructions="Last Name"
              />
            </div>
            <hr />
            <h2>Role:</h2>
            <p>{user.role.name}</p>
            <hr />
            <h2>Gap Year:</h2>
            <EasyEdit
              type={Types.NUMBER}
              onSave={(value) => {
                saveProfile(value, "gapYearStart");
              }}
              value={user.gapYearStart}
              placeholder="Enter start of Gapyear"
              instructions="Gap Year Start"
            />
            <EasyEdit
              type={Types.NUMBER}
              onSave={(value) => {
                saveProfile(value, "gapYearEnd");
              }}
              value={user.gapYearEnd}
              placeholder="Enter end of Gapyear"
              instructions="Gap Year End"
            />
            <hr />
            <h2>University:</h2>
            <EasyEdit
              type={Types.TEXT}
              onSave={(value) => {
                saveProfile(value, "universityName");
              }}
              value={user.universityName}
              placeholder="Enter university name"
              instructions="University"
            />
            <EasyEdit
              type={Types.NUMBER}
              onSave={(value) => {
                saveProfile(value, "universityYear");
              }}
              value={user.universityYear}
              placeholder="Enter graduation year"
              instructions="Graduation Year"
            />
            <hr />
            <h2>Location:</h2>
            <EasyEdit
              type={Types.TEXT}
              onSave={(value) => {
                saveProfile(value, "location");
              }}
              value={user.location}
              placeholder="Enter your location"
            />
            <hr />
            <h2>Instagram:</h2>
            <div className={styles.profileSection}>
              @
              <EasyEdit
                type={Types.TEXT}
                onSave={(value) => {
                  saveProfile(value, "instagram");
                }}
                value={user.instagram}
                placeholder="Your Instagram Handle"
              />
            </div>
            <hr />
            <h2>Interests:</h2>
            <EasyEdit
              type={Types.TEXT}
              value={user.interests}
              displayComponent={<Interests />}
              editComponent={
                <InterestDropdown
                  select={user.interests.map((id) => {
                    return { value: id };
                  })}
                />
              }
              onSave={(value) => {
                saveProfile(value, "interests");
              }}
              placeholder="No Interests"
            />
            <hr />
            <h2>Language Interests:</h2>
            <EasyEdit
              type={Types.TEXT}
              onSave={(value) => {
                saveProfile(value, "language");
              }}
              value={user.language}
              placeholder="Click to edit what languages your interested in."
            />
            <hr />
            <h2>Bio:</h2>
            <EasyEdit
              type={Types.TEXTAREA}
              onSave={(value) => {
                saveProfile(value, "bio");
              }}
              value={user.bio}
              placeholder="Click to create a bio."
            />
          </div>
        </div>
      </>
    </DashboardLayout>
  );
}
