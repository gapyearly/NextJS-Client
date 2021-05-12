import DashboardLayout from "@components/Layouts/DashboardLayout";
import InterestDropdown from "@components/Forms/InterestsDropdown";
import Interests from "@components/Dashboard/ProfileComponents/interests";
import styles from "@styles/Dashboard/UserDashboard.module.css";

import { useAuth } from "@contexts/auth";
import EasyEdit, { Types } from "react-easy-edit";
import strapi from "@api/strapi";
import React, { useState } from "react";

import { useAlert } from "react-alert";
import NProgress from "nprogress";

import PictureModal from "@components/Dashboard/ProfileComponents/EditpictureModal";

export default function Profile() {
  const { user, updateUser, isAuthenticated } = useAuth();
  const [modalVisible, setModalVisible] = useState(false);
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
    <DashboardLayout className="userDash">
      <PictureModal
        show={modalVisible}
        onClose={() => {
          setModalVisible(false);
        }}
      />
      <>
        <h1 className={styles.title}>Profile Overview</h1>
        <h2 className={styles.userDashH2}>Click any field to edit/add info!</h2>
        <div className={styles.profile}>
          <img
            src={user.profilePicture.url}
            alt="Profile Avatar"
            className={styles.avatar}
            onClick={() => {
              setModalVisible(true);
            }}
          />
          <div className={styles.profileContainer}>
            <h3>Name:</h3>
            <div className={styles.profileSection}>
              <EasyEdit
                type={Types.TEXT}
                onSave={(value) => {
                  saveProfile(value, "firstName");
                }}
                value={user.firstName}
                placeholder="Edit First Name"
                // instructions="First Name"
                className={styles.inline}
                name="inline"
              />
              <p>&nbsp;</p>
              {/* space btwn first and last name */}
              <EasyEdit
                type={Types.TEXT}
                onSave={(value) => {
                  saveProfile(value, "lastName");
                }}
                value={user.lastName}
                placeholder="Edit Last Name"
                name="inline"
              />
            </div>
            <hr />
            <h3>Role:</h3>
            <p>{user.role.name}</p>
            <hr />
            <h3>Gap Year:</h3>
            <EasyEdit
              type={Types.NUMBER}
              onSave={(value) => {
                saveProfile(value, "gapYearStart");
              }}
              value={user.gapYearStart}
              placeholder="+ Add start of gap year (e.g. 2020)"
              // instructions="Gap Year Start"
            />
            <EasyEdit
              type={Types.NUMBER}
              onSave={(value) => {
                saveProfile(value, "gapYearEnd");
              }}
              value={user.gapYearEnd}
              placeholder="+ Add end of gap year (e.g. 2021)"
              // instructions="Gap Year End"
            />
            <hr />
            <h3>University:</h3>
            <EasyEdit
              type={Types.TEXT}
              onSave={(value) => {
                saveProfile(value, "universityName");
              }}
              value={user.universityName}
              placeholder="+ Add university name"
              // instructions="University"
            />
            <EasyEdit
              type={Types.NUMBER}
              onSave={(value) => {
                saveProfile(value, "universityYear");
              }}
              value={user.universityYear}
              placeholder="+ Add graduation year"
              // instructions="Graduation Year"
            />
            <hr />
            <h3>Location:</h3>
            <EasyEdit
              type={Types.TEXT}
              onSave={(value) => {
                saveProfile(value, "location");
              }}
              value={user.location}
              placeholder="+ Add location (state/province, country)"
            />
            <hr />
            <h3>Instagram:</h3>
            <div className={styles.profileSection}>
              @
              <EasyEdit
                type={Types.TEXT}
                onSave={(value) => {
                  saveProfile(value, "instagram");
                }}
                value={user.instagram}
                placeholder=" + Add username"
              />
            </div>
            <hr />
            <h3>Interests:</h3>
            <EasyEdit
              type={Types.TEXT}
              value={user.interests.length !== 0 ? user.interests : ""}
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
              placeholder="+ Add interests"
            />
            <hr />
            <h3>Language Interests:</h3>
            <EasyEdit
              type={Types.TEXT}
              onSave={(value) => {
                saveProfile(value, "language");
              }}
              value={user.language}
              placeholder="+ Add languages (e.g. Mandarin Chinese, French, Portuguese)"
            />
            <hr />
            <h3>Bio:</h3>
            <EasyEdit
              type={Types.TEXTAREA}
              onSave={(value) => {
                saveProfile(value, "bio");
              }}
              value={user.bio}
              maxLength="500"
              placeholder="+ Add a bio (max. characters: 500)"
            />
          </div>
        </div>
      </>
    </DashboardLayout>
  );
}
