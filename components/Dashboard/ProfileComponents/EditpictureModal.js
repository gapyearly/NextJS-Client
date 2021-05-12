import Modal from "@components/Modal";
import React, { useRef, useState } from "react";
import MyEditor from "@components/Forms/AvatarEditor";
import strapi from "@api/strapi";
import { useAlert } from "react-alert";
import NProgress from "nprogress";
import { useAuth } from "@contexts/auth";
import Button from "@components/Buttons/Button";

export default function PictureModal({ show, onClose }) {
  const fileRef = useRef();
  const editorRef = useRef();
  const [render, setRender] = useState();
  const alert = useAlert();
  const { user, updateUser } = useAuth();

  const uploadProfilePicture = async (profilePicture) => {
    const imageData = new FormData();
    imageData.append("files", profilePicture);
    const ctx = await strapi.post("upload", imageData);
    return ctx.data;
  };

  const onSubmit = async () => {
    if (fileRef.current.files.length !== 0) {
      NProgress.start();
      try {
        const canvas = await editorRef.current.editor.getImageScaledToCanvas();
        const name = fileRef.current.files[0].name;
        await canvas.toBlob(async (blob) => {
          console.log(fileRef.current);
          const file = new File([blob], name, {
            type: "image/png",
          });
          const res = await uploadProfilePicture(file);
          await strapi.put(`users/${user.id}`, { profilePicture: res[0].id });
          await updateUser();
          alert.success("Profile Picture uploaded.");
          NProgress.done();
        }, "image/png");
        onClose();
      } catch (e) {
        alert.error(`Error ${e}`);
      }
    } else {
      alert.error("Please upload an image first.");
    }
  };
  return (
    <Modal show={show} title="Upload a new profile picture" onClose={onClose}>
      <label htmlFor="profilePicture">Upload a profile picture!</label>
      <input type="file" ref={fileRef} onChange={setRender} />
      <div
        style={{ display: "flex", flexDirection: "column", marginTop: "1rem" }}
      >
        {fileRef.current && fileRef.current.files.length !== 0 && (
          <MyEditor profilePicture={fileRef.current.files[0]} ref={editorRef} />
        )}
      </div>
      <Button color="greenBg" onClick={onSubmit}>
        Submit
      </Button>
    </Modal>
  );
}
