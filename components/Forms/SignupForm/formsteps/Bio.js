import Button from "@components/Buttons/Button";
import styles from "components/Forms/SignupForm/SignupForm.module.css";
import AvatarEditor from "react-avatar-editor";
import React from "react";

export default function Bio({ next, previous, formData, setForm }) {
  const { instagram, interests, bio, profilePicture } = formData;
  return (
    <>
      <form onSubmit={next} action="javascript:void(0);">
        <label htmlFor="instagram">Instagram Handle</label>
        <input
          id={styles.instagram}
          name="instagram"
          value={instagram}
          onChange={setForm}
          placeholder="e.g. @gapyearly"
        />
        <label htmlFor="interests">Interests</label>
        {/* alex change this to pills :D */}
        <input
          id={styles.interests}
          name="interests"
          value={interests}
          onChange={setForm}
        />
        <label htmlFor="bio">Write a short bio!</label>
        <textarea
          type="textarea"
          id={styles.bio}
          name="bio"
          value={bio}
          onChange={setForm}
          placeholder="Max. character length: 500"
          maxLength="500"
        />
        <div className={styles.btns}>
          <Button
            className={styles.previousBtn}
            color="greyBg"
            onClick={previous}
            type="button"
          >
            Previous
          </Button>
          <Button className={styles.nextBtn} color="blueBg" type="submit">
            Next
          </Button>
        </div>
      </form>
    </>
  );
}
