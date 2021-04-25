import Link from "next/link";
import styles from "@styles/Dashboard/UserDashboard.module.css";
import React, { useState } from "react";
import Button from "@components/Buttons/Button";

export default function AskQuestion() {
  const [question, setQuestion] = useState("");
  return (
    <>
      <h3>Have gap year questions?</h3>
      {/* Switch here */}
      <p>We've got your back.</p>
      <br />
      <p>
        Submit a question and we'll share it on <strong>@gapyearly</strong> on
        Instagram with fellow gappers and gap alumni!
      </p>
      <form>
        <textarea
          type="textarea"
          name="question"
          value={question}
          onChange={(e) => {
            setQuestion(e.target.value);
          }}
          placeholder="Ask question here"
        />
        <Button color="greenBg" type="button">
          Submit
        </Button>
      </form>
    </>
  );
}
