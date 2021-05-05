import Button from "@components/Buttons/Button";
import styles from "components/Forms/SignupForm/SignupForm.module.css";
import AvatarEditor from "react-avatar-editor";
import React, { useRef, useState } from "react";

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

class MyEditor extends React.Component {
  setEditorRef = (editor) => (this.editor = editor);
  state = {
    allowZoomOut: false,
    position: { x: 0.5, y: 0.5 },
    scale: 1,
  };
  handleScale = (e) => {
    const scale = parseFloat(e.target.value);
    this.setState({ scale });
    console.log(this.state);
  };
  handlePositionChange = (position) => {
    this.setState({ position });
  };
  render() {
    return (
      <>
        <AvatarEditor
          scale={parseFloat(this.state.scale)}
          image={this.props.profilePicture}
          width={200}
          height={200}
          border={0}
          position={this.state.position}
          onPositionChange={this.handlePositionChange}
          borderRadius={200}
          color={[0, 0, 0, 0.38]} // RGBA
          rotate={0}
          className={styles.avatar}
          ref={this.setEditorRef}
        />
        <input
          name="scale"
          type="range"
          onChange={this.handleScale}
          min={this.state.allowZoomOut ? "0.1" : "1"}
          max="2"
          step="0.01"
          defaultValue="1"
        />
      </>
    );
  }
}
