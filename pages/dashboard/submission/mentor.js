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
export default function MentorSubmit() {
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
      alert.success("Mentor profile succesfully submited: pending approval");
      router.push("/dashboard/submission");
    } catch {
      alert.error("Could not submit. Please refresh or contact admin.");
    }
  };

  // Styled in ckeditor styles
  return (
    <DashboardLayout>
      <h1 className={styles.title}>Mentor Profile</h1>
      <div className={styles.submissionContainer}>
        <h2>
          Check out examples of{" "}
          <Link href="../../community/mentorship">mentor profiles</Link>!
        </h2>
        <form
          id="mentorForm"
          className={styles.mentorSubmit}
          onSubmit={onSubmit}
          action="javascript:void(0);"
        >
          <label htmlFor="activities">
            What did you do over your gap year, by the month?*
          </label>

          <Editor onChange={setSummary} />

          <label htmlForm="struggles">What were your struggles?*</label>
          <Editor onChange={setStruggles} />
          <Button color="greenBg">Submit</Button>
          {/* alert, submit action */}
        </form>
      </div>
    </DashboardLayout>
  );
}
