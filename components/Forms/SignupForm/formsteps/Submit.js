import Button from "@components/Buttons/Button";
import styles from "components/Forms/SignupForm/SignupForm.module.css";
import AvatarEditor from "react-avatar-editor";
import React, { useRef } from "react";
import strapi from "@api/strapi";
import { useAuth } from "@contexts/auth";

export default function Bio({ next, previous, formData, setForm }) {
  console.log(user);
  const submitForm = async () => {
    await strapi.put(`users/${user.id}`, {
      personalInfo: { ...formData, profilePicture: null },
    });
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

// const redirect = window.sessionStorage.getItem("redirect");
// if (!redirect) return router.push("/");
// const sanatized = redirect.replaceAll(":", " ");
// router.push(sanatized);
