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
export default function BlogSubmit() {
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
      await strapi.post(`blogs`, { ...formData, content, image });
      alert.success("Blog post succesfully submited: pending approval");
      router.push("/dashboard/submission");
    } catch {
      alert.error("Could not submit. Please refresh or contact admin.");
    }
  };

  // Styled in ckeditor styles
  return (
    <DashboardLayout>
      <h1 className={styles.title}>Blog Post</h1>
      <div className={styles.submissionContainer}>
        <h2 className={styles.userDashH2}>
          Check out examples of <Link href="../../blog">blog posts</Link>!
        </h2>

        <form id="blogForm" onSubmit={onSubmit}>
          <label htmlFor="blogTitle">Post Name*</label>
          <input
            id="blogTitle"
            name="title"
            value={formData.title}
            type="text"
            onChange={setForm}
            required
          />
          <label htmlFor="blogCategory">Blog Category*</label>
          <div className={styles.radioBtn}>
            <label htmlFor="blogCategoryResources">
              {" "}
              <input
                id="blogCategoryResources"
                name="cost"
                value="Resources"
                onChange={setForm}
                type="radio"
                required
              />
              Resources
            </label>
            <label htmlFor="blogCategoryStories">
              <input
                id="blogCategoryStories"
                name="cost"
                value="Stories"
                onChange={setForm}
                type="radio"
              />
              Stories
            </label>

            <label htmlFor="blogCategoryTravel">
              {" "}
              <input
                id="blogCategoryTravel"
                name="cost"
                value="Travel"
                onChange={setForm}
                type="radio"
              />
              Travel
            </label>
            <label htmlFor="blogCategoryMentor">
              <input
                id="blogCategoryMentor"
                name="cost"
                value="Mentor"
                onChange={setForm}
                type="radio"
              />
              Mentor
            </label>

            <label htmlFor="blogCategoryWork">
              <input
                id="blogCategoryWork"
                name="cost"
                value="Work"
                onChange={setForm}
                type="radio"
              />
              Work
            </label>

            <label htmlFor="blogCategoryEntrepreneurship">
              <input
                id="blogCategoryEntrepreneurship"
                name="cost"
                value="Entrepreneurship"
                onChange={setForm}
                type="radio"
              />
              Entrepreneurship
            </label>

            <label htmlFor="blogCategoryVolunteering">
              <input
                id="blogCategoryVolunteering"
                name="cost"
                value="Volunteering"
                onChange={setForm}
                type="radio"
              />
              Volunteering
            </label>
          </div>

          <label htmlFor="blogDescription">Blog Preview Text*</label>
          <textarea
            id="blogDescription"
            name="description"
            value={formData.description}
            onChange={setForm}
            required
            maxLength="500"
            placeholder="A few sentences from your blog post! Max. characters: 500"
          />

          <label htmlFor="blogImage">
            Upload a picture for your blog post!* (Please ensure you have
            permission to use your image.)
          </label>
          <input
            required
            id="blogImage"
            name="image"
            type="file"
            ref={imageRef}
          />

          <label htmlFor="content">Blog content*</label>
          <ArticleEditor onChange={setContent} />
          {/* required, label namews, input types, placeholders */}

          <Button color="greenBg">Submit</Button>
          {/* alert, submit action */}
        </form>
      </div>
    </DashboardLayout>
  );
}
