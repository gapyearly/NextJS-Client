import styles from "@styles/Dashboard/UserDashboard.module.css";
import React, { useState } from "react";
import Button from "@components/Buttons/Button";
import { useAlert } from "react-alert";
import strapi from "@api/strapi";

export default function AskQuestion() {
  const [question, setQuestion] = useState("");
  const alert = useAlert();
  const submit = async () => {
    try {
      if (!question) return alert.error("Please enter a question.");
      await strapi.post("questions", {
        question,
      });
      setQuestion("");
      alert.success("Question Submitted.");
    } catch {
      alert.error(
        "Error Occurred while trying to submit question. Please contact an admin."
      );
    }
  };
  return (
    <div className={styles.askWindow}>
      <h3>Have gap year questions?</h3>
      <p>We've got your back.</p>
      <br />
      <p>
        Submit a question and we'll share it on{" "}
        <a href="https://instagram.com/gapyearly">@gapyearly</a> on Instagram
        with fellow gappers and gap alumni!
      </p>
      <form>
        <textarea
          type="textarea"
          name="question"
          value={question}
          onChange={(e) => {
            setQuestion(e.target.value);
          }}
          placeholder="Ask away!"
        />
        <Button color="greenBg" type="button" onClick={submit}>
          Submit
        </Button>
      </form>
    </div>
  );
}
