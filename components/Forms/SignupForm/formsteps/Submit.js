import Button from "@components/Buttons/Button";
import styles from "components/Forms/SignupForm/SignupForm.module.css";
import AvatarEditor from "react-avatar-editor";
import React, { useRef } from "react";
import strapi from "@api/strapi";
import { useAuth } from "@contexts/auth";
import Link from "next/link";
import { useAlert } from "react-alert";

import NProgress from "nprogress";
import Router, { useRouter } from "next/router";

export default function Submit({
  formData,
  setForm,
  previous,
  useProfilePicture,
}) {
  const { user, updateUser } = useAuth();
  const router = useRouter();
  const alert = useAlert();
  const [profilePicture, setProfilePicture] = useProfilePicture;

  // TODO ERROR Message
  const submitForm = async () => {
    NProgress.start();
    let data = [{}];
    try {
      if (profilePicture) {
        const imageData = new FormData();
        imageData.append("files", profilePicture);
        const ctx = await strapi.post("upload", imageData);
        data = ctx.data;
      }
    } catch (e) {
      console.log(e);
    }

    const role = window.sessionStorage.getItem("role");

    await strapi.put(`users/${user.id}`, {
      ...formData,
      signupCompletion: true,
      profilePicture: data[0].id || undefined,
      role: role || undefined,
    });
    await updateUser();
    NProgress.done();
    alert.success("Successfully logged in!");
    const redirect = window.sessionStorage.getItem("redirect");
    if (!redirect) return router.push("/dashboard");
    const sanatized = redirect.replaceAll(":", " ");
    router.push(sanatized);
  };
  const { newsletter } = formData;
  return (
    <>
      <form onSubmit={submitForm} action="javascript:void(0);">
        <input
          id={styles.termsConsent}
          name="termsConsent"
          type="checkbox"
          required
          defaultChecked
        />
        <label htmlFor="termsConsent" className={styles.checkboxLabel}>
          <p>
            I agree to the Gapyearly{" "}
            <Link href="/privacy-policy">Privacy Policy</Link>,{" "}
            <Link href="/terms">Terms of Use</Link>*
          </p>
        </label>
        <br />
        <input
          id={styles.newsletterConsent}
          name="newsletter"
          value={newsletter}
          onChange={setForm}
          defaultChecked
          type="checkbox"
        />
        <label htmlFor="newsletterConsent" className={styles.checkboxLabel}>
          <p>
            I want to receive gap year oportunities and news through the
            Gapyearly newsletter
          </p>
        </label>
        <div className={styles.btns}>
          <Button
            className={styles.previousBtn}
            color="greyBg"
            onClick={previous}
            type="button"
          >
            Previous
          </Button>
          <Button className={styles.submitBtn} color="darkBg" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </>
  );
}
