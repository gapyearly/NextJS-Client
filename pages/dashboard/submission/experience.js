import Button from "@components/Buttons/Button";
import styles from "@styles/Dashboard/UserDashboard.module.css";
import DashboardLayout from "@components/Layouts/DashboardLayout";
import strapi from "@api/strapi";
import { useAlert } from "react-alert";
import { useRouter } from "next/router";
import ListEditor from "@components/RichtextEditor/List";
import React, { useState, useRef } from "react";
import Link from "next/link";
import { useForm } from "react-hooks-helper";
import NProgress from "nprogress";

export default function ExperienceSubmit() {
  const alert = useAlert();
  const router = useRouter();
  const [dayToDayExperiences, setDayToDayExperiences] = useState();
  const [formData, setForm] = useForm({});

  const imageRef = useRef();
  if (imageRef.current && imageRef.current.files) {
    formData.image = imageRef.current.files[0];
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!dayToDayExperiences) {
      return alert.error("Please enter required fields.");
    }
    NProgress.start();
    try {
      const imageData = new FormData();
      imageData.append("files", formData.image);
      const ctx = await strapi.post("upload", imageData);
      const image = ctx.data;
      await strapi.post(`experiences`, {
        ...formData,
        dayToDayExperiences,
        image,
      });
      alert.success("Experience review succesfully submited: pending approval");
      router.push("/dashboard/submission");
    } catch {
      alert.error("Could not submit. Please refresh or contact admin.");
    }
    NProgress.done();
  };

  // Styled in ckeditor styles
  return (
    <DashboardLayout>
      <h1 className={styles.title}>Experience Review</h1>
      <div className={styles.submissionContainer}>
        <h2 className={styles.userDashH2}>
          Check out examples of{" "}
          <Link href="../../opportunities/past-experiences">
            past experiences
          </Link>
          !
        </h2>

        <form id="mentorForm" onSubmit={onSubmit}>
          <label htmlFor="experienceTitle">Name of Experience*</label>
          <input
            id="experienceTitle"
            name="title"
            value={formData.title}
            type="text"
            onChange={setForm}
            required
          />

          <label htmlFor="experienceLocation">Location*</label>
          <input
            id="experienceLocation"
            name="location"
            type="text"
            value={formData.location}
            onChange={setForm}
            required
          />
          <label htmlFor="experienceFunRating">
            How would you rate your fun out of 5?*
          </label>
          <span className={styles.rating}>
            <input
              id="experienceFunRating"
              name="funRating"
              value={formData.funRating}
              onChange={setForm}
              type="number"
              min="1"
              max="5"
              required
            />
          </span>

          <label htmlFor="experiencePersonalGrowthRating">
            How would you rate your personal growth out of 5?*
          </label>
          <span className={styles.rating}>
            <input
              id="experiencePersonalGrowthRating"
              name="personalGrowthRating"
              value={formData.personalGrowthRating}
              onChange={setForm}
              required
              min="1"
              max="5"
              type="number"
            />
          </span>

          <label htmlFor="experienceCost">
            Let’s talk money. Did you earn or spend money on this experience
            overall?
          </label>
          <div className={styles.radioBtn}>
            <label htmlFor="experienceCostFree">
              {" "}
              <input
                id="experienceCostFree"
                name="cost"
                value="Free"
                onChange={setForm}
                type="radio"
                required
              />
              Free
            </label>
            <label htmlFor="experienceCostCost_Money">
              <input
                id="experienceCostCost_Money"
                name="cost"
                value="Cost_Money"
                onChange={setForm}
                type="radio"
              />
              Cost Money
            </label>

            <label htmlFor="experienceCostBroke_Even">
              {" "}
              <input
                id="experienceCostBroke_Even"
                name="cost"
                value="Broke_Even"
                onChange={setForm}
                type="radio"
              />
              Broke Even
            </label>
            <label htmlFor="experienceCostEarned_Money">
              <input
                id="experienceCostEarned_Money"
                name="cost"
                value="Earned_Money"
                onChange={setForm}
                type="radio"
              />
              Earned Money
            </label>
          </div>

          <label htmlFor="experienceCategory">
            How would you categorize your experience?*
          </label>
          <div className={styles.radioBtn}>
            <label htmlFor="experienceCategoryTravel">
              <input
                id="experienceCategoryTravel"
                name="category"
                value="travel"
                onChange={setForm}
                type="radio"
                required
              />
              Travel
            </label>

            <label htmlFor="experienceCategoryProgram">
              <input
                id="experienceCategoryProgram"
                name="category"
                value="programs"
                onChange={setForm}
                type="radio"
              />
              Program (incl. classes)
            </label>

            <label htmlFor="experienceCategoryPaidWork">
              <input
                id="experienceCategoryPaidWork"
                name="category"
                value="paidWork"
                onChange={setForm}
                type="radio"
              />
              Paid work (incl. internship)
            </label>

            <label htmlFor="experienceCategoryVolunteer">
              <input
                id="experienceCategoryVolunteer"
                name="category"
                value="volunteer"
                onChange={setForm}
                type="radio"
              />
              Volunteer
            </label>

            <label htmlFor="experienceCategoryEntrepreneurship">
              <input
                id="experienceCategoryEntrepreneurship"
                name="category"
                value="entrepreneurship"
                onChange={setForm}
                type="radio"
              />
              Entrepreneurship
            </label>
          </div>

          <label htmlFor="experienceImage">
            Upload a picture that best represents your experience!* (Please
            ensure you have permission to use your image.)
          </label>
          <input
            required
            id="experienceImage"
            name="image"
            type="file"
            ref={imageRef}
          />

          <label htmlFor="experienceActivitiesDone">
            What types of activities were done?*
          </label>
          <textarea
            id="experienceActivitiesDone"
            name="activitiesDone"
            value={formData.activitiesDone}
            onChange={setForm}
            required
          />

          <label htmlFor="dayToDayExperiences">
            What was your day-to-day like?*
          </label>
          <ListEditor onChange={setDayToDayExperiences} />
          {/* required, label namews, input types, placeholders */}
          <label htmlFor="topTips">
            Your top tips for anyone doing this experience?
          </label>
          <textarea
            id="experienceTopTips"
            name="topTips"
            value={formData.topTips}
            onChange={setForm}
            placeholder="Advice about preparation, things to do, safety..."
          />
          <label htmlFor="memorableMoment">Most memorable moment?</label>
          <textarea
            id="experienceMemorableMoment"
            name="memorableMoment"
            value={formData.memorableMoment}
            onChange={setForm}
          />
          <label htmlFor="lessonsLearned">
            Lessons learned/experience gained?
          </label>
          <textarea
            id="experienceLessonsLearned"
            name="lessonsLearned"
            value={formData.lessonsLearned}
            onChange={setForm}
          />

          <Button color="greenBg">Submit</Button>
          {/* alert, submit action */}
        </form>
      </div>
    </DashboardLayout>
  );
}
