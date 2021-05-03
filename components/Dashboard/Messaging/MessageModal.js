import Button from "@components/Buttons/Button";
import Modal from "@components/Modal";

export default function MessageModal({ show }) {
  return (
    <Modal show="true" title="Start a conversation">
      <div className=""></div>
      <p>Send your first message to</p>
      <textarea></textarea>
      <Button color="greenBg">Send</Button>
    </Modal>
  );
}
