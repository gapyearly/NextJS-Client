import { useForm, useStep } from "react-hooks-helper";
import React, { useState, useEffect } from "react";
import Button from "@components/Buttons/Button";
import styles from "@styles/Dashboard/UserDashboard.module.css";
import { useAuth } from "@contexts/auth";
import DashboardLayout from "@components/Layouts/DashboardLayout";

export default function MentorSubmit() {
  return (
    <DashboardLayout>
      <h1 className={styles.title}>Mentor Submission</h1>
      <form className={styles.mentorSubmit}>
        <label htmlFor="activities">
          What did you do over your gap year, by the month?*
        </label>
        <textarea
          name="activities"
          id="activities"
          placeholder="e.g. 
          
          July-August:
   September:
       November-January:
        February:
        March:
        April-July:"
          required
        />

        <label htmlForm="struggles">What were your struggles?*</label>
        <textarea name="struggles" id="struggles" required />
        <Button color="greenBg">Submit</Button>
        {/* alert, submit action */}
      </form>
    </DashboardLayout>
  );
}
