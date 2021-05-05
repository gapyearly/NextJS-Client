import Button from "@components/Buttons/Button";
import styles from "@components/Forms/SignupForm/SignupForm.module.css";
import React, { useRef } from "react";
import MyEditor from "../../AvatarEditor";

export default function ProfilePicture({
  next,
  previous,
  setForm,
  useProfilePicture,
}) {
  const fileRef = useRef();
  const editorRef = useRef();
  const [profilePicture, setProfilePicture] = useProfilePicture;

  const onSubmit = async () => {
    if (fileRef.current.files.length !== 0) {
      const canvas = await editorRef.current.editor.getImageScaledToCanvas();
      await canvas.toBlob((blob) => {
        const file = new File([blob], fileRef.current.files[0].name, {
          type: "image/png",
        });
        setProfilePicture(file);
      }, "image/png");
    }

    next();
  };

  if (fileRef.current && fileRef.current.files) {
    // formData.profilePicture = fileRef.current.files[0];
  }
  // TODO: Zoom features
  return (
    <>
      <form
        className={styles.avatarForm}
        onSubmit={onSubmit}
        action="javascript:void(0);"
      >
        <label htmlFor="profilePicture">Upload a profile picture!</label>
        <input
          type="file"
          id={styles.profilePicture}
          ref={fileRef}
          onChange={setForm}
        />
        {fileRef.current && fileRef.current.files.length !== 0 && (
          <MyEditor profilePicture={fileRef.current.files[0]} ref={editorRef} />
        )}
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
