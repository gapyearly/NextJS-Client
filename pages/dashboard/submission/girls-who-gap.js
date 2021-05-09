import Button from "@components/Buttons/Button";
import styles from "@styles/Dashboard/UserDashboard.module.css";
import { useAuth } from "@contexts/auth";
import DashboardLayout from "@components/Layouts/DashboardLayout";
import strapi from "@api/strapi";
import { useAlert } from "react-alert";
import { useRouter } from "next/router";
import ArticleEditor from "@components/RichtextEditor/Article";
import React, { useState, useRef } from "react";
import Link from "next/link";
import { useForm } from "react-hooks-helper";
export default function ParentReflectionSubmit() {
  const alert = useAlert();
  const router = useRouter();
  const [content, setContent] = useState();
  const [formData, setForm] = useForm({});

  const imageRef = useRef();
  if (imageRef.current && imageRef.current.files) {
    formData.image = imageRef.current.files[0];
  }

  console.log(formData);
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!content) {
      return alert.error("Please enter required fields.");
    }
    try {
      await strapi.post(`girls-who-gaps`, { ...formData, content });
      alert.success("GWG succesfully submited: pending approval");
      router.push("/dashboard/submission");
    } catch {
      alert.error("Could not submit. Please refresh or contact admin.");
    }
  };

  // Styled in ckeditor styles
  return (
    <DashboardLayout>
      <h1 className={styles.title}>Solo Female Travel Tips (Girls Who Gap)</h1>
      <div className={styles.submissionContainer}>
        <h2 className={styles.userDashH2}>
          Check out examples of{" "}
          <Link href="../../prospective/girls-who-gap">
            Girls Who Gap reflections
          </Link>
          !
        </h2>

        <form id="gwgForm" onSubmit={onSubmit}>
          <label htmlFor="gwgTitle">Title*</label>
          <input
            id="gwgTitle"
            name="title"
            value={formData.title}
            type="text"
            onChange={setForm}
            required
          />

          <label htmlFor="content">Reflection content*</label>
          <ArticleEditor onChange={setContent} />
          {/* required, label namews, input types, placeholders */}

          <Button color="greenBg">Submit</Button>
          {/* alert, submit action */}
        </form>
      </div>
    </DashboardLayout>
  );
}
