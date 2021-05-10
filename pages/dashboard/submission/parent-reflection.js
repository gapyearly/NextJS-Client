import Button from "@components/Buttons/Button";
import styles from "@styles/Dashboard/UserDashboard.module.css";
import { useAuth } from "@contexts/auth";
import DashboardLayout from "@components/Layouts/DashboardLayout";
import strapi from "@api/strapi";
import { useAlert } from "react-alert";
import { useRouter } from "next/router";
import ListEditor from "@components/RichtextEditor/List";
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

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!content) {
      return alert.error("Please enter required fields.");
    }
    try {
      const imageData = new FormData();
      imageData.append("files", formData.image);
      const ctx = await strapi.post("upload", imageData);
      const image = ctx.data;
      await strapi.post(`parent-reflections`, { ...formData, content, image });
      alert.success("Parent reflection succesfully submited: pending approval");
      router.push("/dashboard/submission");
    } catch {
      alert.error("Could not submit. Please refresh or contact admin.");
    }
  };

  // Styled in ckeditor styles
  return (
    <DashboardLayout>
      <h1 className={styles.title}>Parent Reflection</h1>
      <div className={styles.submissionContainer}>
        <h2 className={styles.userDashH2}>
          Check out examples of{" "}
          <Link href="../../prospective/parent-reflections">
            parent reflection
          </Link>
          !
        </h2>

        <form id="parentReflectionForm" onSubmit={onSubmit}>
          <label htmlFor="parentReflectionTitle">
            Title (quote from parent)*
          </label>
          <input
            id="parentReflectionTitle"
            name="title"
            value={formData.title}
            type="text"
            onChange={setForm}
            required
          />
          <label htmlFor="parentReflectionParentFullName">Parent Name*</label>
          <input
            id="parentReflectionParentFullName"
            name="parentFullName"
            value={formData.parentFullName}
            type="text"
            onChange={setForm}
            required
          />

          <label htmlFor="parentReflectionChildName">Child Name*</label>
          <input
            id="parentReflectionChildName"
            name="childFullName"
            value={formData.childFullName}
            type="text"
            onChange={setForm}
            required
          />

          <label htmlFor="parentReflectionDescription">
            Reflection Preview*
          </label>
          <textarea
            id="parentReflectionDescription"
            name="description"
            value={formData.description}
            onChange={setForm}
            required
            maxLength="300"
            placeholder="A sentence or two from the reflection! Max. characters: 300"
          />

          <label htmlFor="parentReflectionImage">
            Upload a picture for your parent reflection!* (Please ensure you
            have permission to use your image.)
          </label>
          <input
            required
            id="parentReflectionImage"
            name="image"
            type="file"
            ref={imageRef}
          />

          <label htmlFor="content">Reflection content*</label>
          <ListEditor onChange={setContent} />
          {/* required, label namews, input types, placeholders */}

          <Button color="greenBg">Submit</Button>
          {/* alert, submit action */}
        </form>
      </div>
    </DashboardLayout>
  );
}
