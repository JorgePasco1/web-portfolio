import React, { useState, useContext, useRef } from "react";
import {
  disableBodyScroll,
  enableBodyScroll,
} from "body-scroll-lock";

import BannerPic from "./Components/BannerPic";
import Form from "./Components/Form";
import FormToast from "./Components/FormToast";
import { ThemeContext } from "./ThemeContext";
import DarkModeToggle from "react-dark-mode-toggle";

function App() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleToastState = (newValue) => setShowToast(newValue);
  const handleEmailState = (newValue) => setEmailSent(newValue);

  const mainRef = useRef(null);

  const openModal = () => {
    setIsOpen(true);
    disableBodyScroll(mainRef.current);
  };
  const closeModal = () => {
    enableBodyScroll(mainRef.current);
    setIsOpen(false);
  };

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <main ref={mainRef} className={theme}>
        <div className="toggleButtonContainer">
          <DarkModeToggle
            onChange={toggleTheme}
            checked={theme === "dark"}
            size={40}
          />
        </div>
        <section className="about-section">
          <BannerPic />
          <p>
            Hey!
            <span role="img" aria-label="hi-emoji">
              👋
            </span>{" "}
            My name is <span className="bold">Jorge Pasco</span>, I'm a peruvian
            software developer, focused on web and machine learning. I currently
            work as a <span className="bold">Salesforce Developer</span> in
            Oktana Corporation's peruvian offices, focused on the awesome
            Einstein Analytics platform{" "}
            <span role="img" aria-label="chart-emoji">
              📊
            </span>
            . I'm self-taught and passionate about learning new technologies and
            solving problems.
          </p>
        </section>
        <hr />
        <section name="additional-section">
          <p>
            You can download or take a look at my{" "}
            <a
              href="https://drive.google.com/file/d/1ZOKB4oyhmFkkmh50giDI3fsH2UL-b_19/view?usp=sharing"
              className="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              resume
            </a>
            ✌️. Also, here are my{" "}
            <a
              href="https://www.github.com/jorgepasco1"
              className="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>{" "}
            and{" "}
            <a
              href="https://www.linkedin.com/in/jorgepasco1/"
              className="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>{" "}
            profiles
          </p>
          <p className="contact-p">
            Reach out to me by filling out this{" "}
            <button
              href="#"
              className={`unstyled-button ${theme}`}
              onClick={openModal}
            >
              form
            </button>
            , or email me at jorgepascosoto@gmail.com 📩
          </p>
        </section>
      </main>
      <Form
        isOpen={modalIsOpen}
        closeModal={closeModal}
        handleToast={handleToastState}
        handleEmail={handleEmailState}
      />
      <FormToast called={showToast} success={emailSent} />
    </>
  );
}

export default App;
