import Button from "@components/Buttons/Button";
import Modal from "@components/Modal";
import fullName from "@util/fullName";
import React, { useState } from "react";
import { useAlert } from "react-alert";

export default function MessageModal({ show, recipient }) {
  const [message, setMessage] = useState("");
  const alert = useAlert();
  const onSend = () => {};
  return (
    <Modal show="true" title="Start a conversation">
      <div className=""></div>
      <p>Send your first message to {fullName(recipient)}</p>
      <br />
      <textarea></textarea>
      <Button color="greenBg">Send</Button>
    </Modal>
  );
}
