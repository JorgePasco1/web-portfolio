import React, { useState, useRef } from "react";
import Modal from "react-modal";
import "./styles/Form.css";

Modal.setAppElement("#root");

export default function Form(props) {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");

  const formRef =  useRef(null)

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formRef.current.checkValidity()) {
      console.log(userName)
    } else {
      formRef.current.reportValidity()
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
      <form ref={formRef}>
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
          className="form-ta"
          name="form-ta"
          placeholder={
            userName && userEmail
              ? "Start typing your message"
              : "Please, fill out name and email first."
          }
          rows="15"
          cols="70"
          readOnly={!(userName && userEmail)}
          value={userMessage}
          onChange={(event) => setUserMessage(event.target.value)}
          required
        ></textarea>
        <button onClick={handleSubmit} className="submit-button">
          Send
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
