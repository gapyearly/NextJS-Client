import styles from "./Modal.module.css";
import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const Modal = ({ show = true, onClose, children, title }) => {
  // Make sure all rendering will be done in the browser. The Modal-root doesn't exist yet
  const [isBrowser, setIsBrowser] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    setIsBrowser(true);
    // Mousedown event listener
    document.addEventListener("mousedown", handleCloseClick, false);
    return () => {
      document.removeEventListener("mousedown", handleCloseClick, false);
    };
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    // If the mouse click contains the modal, don't close the modal. Except when the anchor is clicked.
    if (ref.current.contains(e.target) && e.target.localName !== "a") return;
    onClose();
  };

  console.log(show);
  const modalContent = show ? (
    <div className={styles.modalOverlay}>
      <div className={styles.modal} ref={ref}>
        <div className={styles.header}>
          <h2>{title}</h2>
          <a className={styles.close} href="#" onClick={handleCloseClick}>
            &#10005;
          </a>
        </div>
        {children}
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};

export default Modal;
