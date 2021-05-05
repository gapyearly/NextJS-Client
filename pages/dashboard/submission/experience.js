import Button from "@components/Buttons/Button";
import styles from "@styles/Dashboard/UserDashboard.module.css";
import { useAuth } from "@contexts/auth";
import DashboardLayout from "@components/Layouts/DashboardLayout";
import strapi from "@api/strapi";
import { useAlert } from "react-alert";
import { useRouter } from "next/router";
import Editor from "@components/RichtextEditor/Ckeditor";
import React, { useState } from "react";
import Link from "next/link";
export default function ExperienceSubmit(formData, setForm) {
  const {
    title,
    slug,
    cost,
    funRating,
    personalGrowthRating,
    activitiesDone,
    dayToDayExperiences,
    tips,
    memorableMoment,
    lessonsLearned,
    image,
    category,
    location,
    submittedBy,
    links,
    href,
    // idk if href goes here
  } = formData;
  const { user } = useAuth();
  const alert = useAlert();
  const router = useRouter();
  const [summary, setSummary] = useState();
  const [struggles, setStruggles] = useState();

  const onSubmit = async () => {
    if (!summary || !struggles) {
      return alert.error("Please enter required fields.");
    }
    try {
      await strapi.put(`users/${user.id}`, {
        mentorInfo: { summary, struggles },
      });
      alert.success("Experience review succesfully submited: pending approval");
      router.push("/dashboard/submission");
    } catch {
      alert.error("Could not submit. Please refresh or contact admin.");
    }
  };

  // Styled in ckeditor styles
  return (
    <DashboardLayout>
      <h1 className={styles.title}>Experience Review</h1>
      <div className={styles.submissionContainer}>
        <h2>
          Check out examples of{" "}
          <Link href="../../opportunities/past-experiences">
            past experiences
          </Link>
          !
        </h2>

        <form id="mentorForm" onSubmit={onSubmit} action="javascript:void(0);">
          <label htmlFor="experienceTitle"></label>
          <input
            id={styles.experienceTitle}
            name="experienceTitle"
            value={title}
            onChange={setForm}
          />

          <label htmlFor="experienceLocation"></label>
          <input
            id={styles.experienceLocation}
            name="experienceLocation"
            value={location}
            onChange={setForm}
          />
          <label htmlFor="experienceFunRating"></label>
          <input
            id={styles.experienceFunRating}
            name="experienceFunRating"
            value={funRating}
            onChange={setForm}
          />

          <label htmlFor="experiencePersonalGrowthRating"></label>
          <input
            id={styles.experiencePersonalGrowthRating}
            name="experiencePersonalGrowthRating"
            value={personalGrowthRating}
            onChange={setForm}
          />

          <label htmlFor="experienceCost"></label>
          <input
            id={styles.experienceCost}
            name="experienceCost"
            value={cost}
            onChange={setForm}
          />

          <label htmlFor="experienceCategory"></label>
          <input
            id={styles.experienceCategory}
            name="experienceCategory"
            value={category}
            onChange={setForm}
          />

          <label htmlFor="experienceImage"></label>
          <input
            id={styles.experienceImage}
            name="experienceImage"
            value={image}
            onChange={setForm}
          />

          <label htmlFor="experienceActivitiesDone"></label>
          <textarea
            id={styles.experienceActivitiesDone}
            name="experienceActivitiesDone"
            value={activitiesDone}
            onChange={setForm}
          />

          <label htmlFor="experienceTitle"></label>
          <input
            id={styles.experienceTitle}
            name="experienceTitle"
            value={title}
            onChange={setForm}
          />
          {/* required, label namews, input types, placeholders */}
          <label htmlFor="activities">
            What did you do over your gap year, by the month?*
          </label>
          <Editor onChange={setSummary} />

          <label htmlFor="struggles">What were your struggles?*</label>
          <Editor onChange={setStruggles} />

          <Button color="greenBg">Submit</Button>
          {/* alert, submit action */}
        </form>
      </div>
    </DashboardLayout>
  );
}
