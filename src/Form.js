import React from "react";
import Modal from "react-modal";
import "./styles/Form.css"

Modal.setAppElement('#root');

export default function Form(props) {
  let subtitle;
  function afterOpenModal() {
    subtitle.style.color = "rgb(46, 46, 46)";
    subtitle.style.textAlign = "center";
    subtitle.style.fontSize = "3rem";
  }

  return (
    <Modal
      isOpen={props.isOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={props.closeModal}
      className="Modal"
      overlayClassName="Overlay"
      contentLabel="Example Modal"
    >
      <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Contact Me</h2>

      <form>
        <input />
        
      </form>
      <button onClick={props.closeModal}>close</button>
    </Modal>
  );
}
