import Button from "@components/Buttons/Button";
import styles from "components/Forms/SignupForm/SignupForm.module.css";
import AvatarEditor from "react-avatar-editor";
import React, { useRef } from "react";

export default function Bio({ next, previous, formData, setForm }) {
  const { profilePicture } = formData;
  const fileRef = useRef();
  const editorRef = useRef();

  if (fileRef.current && fileRef.current.files) {
    formData.profilePicture = fileRef.current.files[0];
  }

  return (
    <>
      <form
        className={styles.avatarForm}
        onSubmit={next}
        action="javascript:void(0);"
      >
        <label htmlFor="profilePicture">Upload a profile picture!</label>
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
  onClickSave = () => {
    if (this.editor) {
      // This returns a HTMLCanvasElement, it can be made into a data URL or a blob,
      // drawn on another canvas, or added to the DOM.
      const canvas = this.editor.getImage();

      // If you want the image resized to the canvas size (also a HTMLCanvasElement)
      const canvasScaled = this.editor.getImageScaledToCanvas();
    }
  };

  setEditorRef = (editor) => (this.editor = editor);

  render() {
    return (
      <AvatarEditor
        image={this.props.profilePicture}
        width={250}
        height={250}
        border={30}
        borderRadius={150}
        color={[0, 0, 0, 0.38]} // RGBA
        scale={1.2}
        rotate={0}
        className={styles.avatar}
        ref={this.setEditorRef}
      />
    );
  }
}
