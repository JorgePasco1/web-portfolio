import React from "react";
import Modal from "react-modal";
import "./styles/Form.css"

const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgb(75, 75, 75,0.75)",
  },
  content: {
    fontFamily: "Montserrat",
    position: "absolute",
    top: "20%",
    left: "30%",
    right: "30%",
    bottom: "20%",
    background: "whitesmoke",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "10px",
    outline: "none",
    padding: "5%",
  },
};

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
