import React, { useState, useRef } from "react";
import Modal from "react-modal";
import "../styles/form.css";

Modal.setAppElement("#root");

export default function Form(props) {
  const placeHolderMessages = {
    needsInfo: "Please, fill out name and email first.",
    canType: "Start typing your message",
    additional: "Forgot to say something? Send another email ;)",
  };

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [buttonText, setButtonText] = useState("Send");

  const formRef = useRef(null);
  const textAreaRef = useRef(null);
  const sendButtonRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formRef.current.checkValidity()) {
      const template_params = {
        from_name: userName,
        from_email: userEmail,
        message: userMessage,
      };

      setButtonText("Sending...");
      sendButtonRef.current.disabled = true;

      window.emailjs
        .send("gmail", "template_oWWe49dU", template_params)
        .then((res) => {
          props.handleEmail(true);
          props.handleToast(true);
          textAreaRef.current.placeholder = placeHolderMessages.additional;
          setUserMessage("");
        })
        .catch((err) => {
          props.handleToast(true);
        })
        .finally(() => {
          props.handleToast(false);
          props.handleEmail(false);
          setButtonText("Send");
          sendButtonRef.current.disabled = false;
        });
    } else {
      formRef.current.reportValidity();
    }
  };

  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.closeModal}
      className="Modal"
      overlayClassName="Overlay"
      contentLabel="Contact Modal"
    >
      <h2 className="form-title">Contact Me</h2>
      <form ref={formRef} className="message-form">
        <div className="inline-inputs">
          <div className="input-container">
            <label htmlFor="your-name">Your name</label>
            <input
              className="form-input"
              name="your-name"
              value={userName}
              onChange={(event) => setUserName(event.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="email">Your email</label>
            <input
              className="form-input"
              name="email"
              type="email"
              value={userEmail}
              onChange={(event) => setUserEmail(event.target.value)}
              required
            />
          </div>
        </div>
        <textarea
          ref={textAreaRef}
          className="form-ta"
          name="form-ta"
          placeholder={
            userName && userEmail
              ? placeHolderMessages.canType
              : placeHolderMessages.needsInfo
          }
          readOnly={!(userName && userEmail)}
          value={userMessage}
          onChange={(event) => setUserMessage(event.target.value)}
          required
        ></textarea>
        <button
          ref={sendButtonRef}
          onClick={handleSubmit}
          className="submit-button"
        >
          {buttonText}
        </button>
      </form>
      <button
        className="unstyled-button close-button"
        onClick={props.closeModal}
      >
        X
      </button>
    </Modal>
  );
}
