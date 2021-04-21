import Button from "@components/Buttons/Button";
import styles from "components/Forms/SignupForm/SignupForm.module.css";
import AvatarEditor from "react-avatar-editor";
import React, { useRef } from "react";
import strapi from "@api/strapi";
import { useAuth } from "@contexts/auth";

import { useAlert } from "react-alert";

import NProgress from "nprogress";
import Router, { useRouter } from "next/router";

export default function Submit({ formData, setForm }) {
  const { user } = useAuth();
  const router = useRouter();
  const alert = useAlert();
  // TODO ERROR Message
  const submitForm = async () => {
    NProgress.start();
    let data = null;
    try {
      if (formData.profilePicture) {
        const imageData = new FormData();
        imageData.append("files", formData.profilePicture);
        const ctx = await strapi.post("upload", imageData);
        data = ctx.data;
      }
    } catch (e) {
      console.log(e);
    }

    await strapi.put(`users/${user.id}`, {
      ...formData,
      signupCompletion: true,
      profilePicture: data[0].id || null,
    });
    alert.show("Succesfully Logged in!");
    NProgress.done();

    const redirect = window.sessionStorage.getItem("redirect");
    if (!redirect) return router.push("/dashboard");
    const sanatized = redirect.replaceAll(":", " ");
    router.push(sanatized);
  };
  return (
    <>
      <form onSubmit={submitForm} action="javascript:void(0);">
        <Button className={styles.previousBtn} color="blueBg" type="submit">
          Next
        </Button>
      </form>
    </>
  );
}
