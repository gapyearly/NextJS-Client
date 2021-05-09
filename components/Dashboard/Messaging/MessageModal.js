import Button from "@components/Buttons/Button";
import Modal from "@components/Modal";
import fullName from "@util/fullName";
import React, { useState } from "react";
import { useAlert } from "react-alert";
import strapi from "@api/strapi";
import { useAuth } from "@contexts/auth";
import NProgress from "nprogress";

export default function MessageModal({ show, recipient, onClose }) {
  const [message, setMessage] = useState("");
  const alert = useAlert();
  const { updateUser } = useAuth();

  const onSend = async () => {
    if (!message) return alert.error("Please enter a message");
    NProgress.start();
    try {
      const { data: chatroom } = await strapi.post("chatrooms", {
        participant: recipient.id,
      });
      await strapi.post("messages", {
        chatroom: chatroom.id,
        content: message,
      });
      updateUser();
      alert.success(
        "Message sent. A chatroom has been created in the messaging tab."
      );
    } catch {
      alert.error("Error occurred in attempting to send message.");
    }
    NProgress.done();
    onClose();
  };
  if (!show) return <></>;
  return (
    <Modal show={show} title="Start a conversation" onClose={onClose}>
      <div className=""></div>
      <p>Send your first message to {fullName(recipient)}</p>
      <br />
      <textarea
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      ></textarea>
      <Button color="greenBg" onClick={onSend}>
        Send
      </Button>
    </Modal>
  );
}
