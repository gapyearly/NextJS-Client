import AvatarEditor from "react-avatar-editor";
import React from "react";
import styles from "@components/Forms/SignupForm/SignupForm.module.css";

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

export default MyEditor;
