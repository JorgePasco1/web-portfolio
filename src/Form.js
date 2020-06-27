import React, { useState } from "react";
import Modal from "react-modal";
import "./styles/Form.css";

Modal.setAppElement("#root");

export default function Form(props) {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");

  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.closeModal}
      className="Modal"
      overlayClassName="Overlay"
      contentLabel="Contact Modal"
    >
      <h2 className="form-title">Contact Me</h2>
      <form>
        <div className="inline-inputs">
          <div className="input-container">
            <label htmlFor="your-name">Your name</label>
            <input
              className="form-input"
              name="your-name"
              value={userName}
              onChange={(event) => setUserName(event.target.value)}
            />
          </div>
          <div className="input-container">
            <label htmlFor="email">Your email</label>
            <input className="form-input" name="email" value={userEmail} onChange={(event) => setUserEmail(event.target.value)} />
          </div>
        </div>
        <textarea
          className="form-ta"
          name="form-ta"
          placeholder="Start typing your message"
          rows="15"
          cols="70"
          value={userMessage} onChange={(event) => setUserMessage(event.target.value)}
        ></textarea>
      </form>
      <button className="submit-button">Send</button>
      <button
        className="unstyled-button close-button"
        onClick={props.closeModal}
      >
        X
      </button>
    </Modal>
  );
}
