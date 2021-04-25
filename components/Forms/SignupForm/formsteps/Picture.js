import Button from "@components/Buttons/Button";
import styles from "components/Forms/SignupForm/SignupForm.module.css";
import AvatarEditor from "react-avatar-editor";
import React, { useRef } from "react";

export default function ProfilePicture({ next, previous, formData, setForm }) {
  const { profilePicture } = formData;
  const fileRef = useRef();
  const editorRef = useRef();

  const onSubmit = async () => {
    const canvas = editorRef.current.editor.getImageScaledToCanvas();
    canvas.toBlob((blob) => {
      const file = new File([blob], fileRef.current.files[0].name, {
        type: "image/png",
      });
      formData.profilePicture = file;
    }, "image/png");
    next();
  };

  if (fileRef.current && fileRef.current.files) {
    // formData.profilePicture = fileRef.current.files[0];
  }
  // TODO: Zoom features
  return (
    <>
      <form onSubmit={onSubmit} action="javascript:void(0);">
        <label htmlFor="profilePicture">Upload a profile picture</label>
        <input
          type="file"
          id={styles.profilePicture}
          ref={fileRef}
          onChange={setForm}
        />
        {fileRef.current && fileRef.current.files && (
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

class MyEditor extends React.Component {
  setEditorRef = (editor) => (this.editor = editor);

  render() {
    return (
      <AvatarEditor
        image={this.props.profilePicture}
        width={250}
        height={250}
        border={30}
        borderRadius={150}
        color={[255, 255, 255, 0.6]} // RGBA
        scale={1.2}
        rotate={0}
        className={styles.avatar}
        ref={this.setEditorRef}
      />
    );
  }
}
