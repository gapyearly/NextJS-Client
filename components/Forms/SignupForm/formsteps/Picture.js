import Button from "@components/Buttons/Button";
import styles from "components/Forms/SignupForm/SignupForm.module.css";
import AvatarEditor from "react-avatar-editor";
import React, { useRef } from "react";

export default function Bio({ next, previous, formData, setForm }) {
  const { profilePicture } = formData;
  const ref = useRef();

  return (
    <>
      <form onSubmit={next} action="javascript:void(0);">
        <label htmlFor="profilePicture">Upload a profile picture</label>
        <input
          type="file"
          id={styles.profilePicture}
          name="profilePicture"
          value={profilePicture}
          onChange={setForm}
          ref={ref}
        />
        {ref.current && ref.current.files && (
          <MyEditor profilePicture={ref.current.files[0]} />
        )}
        <div className={styles.btns}>
          <Button
            className={styles.nextBtn}
            color="greenBg"
            onClick={previous}
            type="button"
          >
            Previous
          </Button>
          <Button className={styles.previousBtn} color="blueBg" type="submit">
            Next
          </Button>
        </div>
      </form>
    </>
  );
}
const MyEditor = ({ profilePicture }) => {
  return (
    <AvatarEditor
      image={profilePicture}
      width={250}
      height={250}
      border={30}
      borderRadius={150}
      color={[255, 255, 255, 0.6]} // RGBA
      scale={1.2}
      rotate={0}
    />
  );
};
