import React from "react";
import "../styles/Home.css"

export default function Home() {
  return (
    <main>
      <section className="about-section">
        <h1>About me</h1>
        <p>
          Hey!
          <span role="img" aria-label="hi-emoji">
            👋
          </span>{" "}
          My name is <span className="bold">Jorge Pasco</span>, I'm a peruvian
          software developer, focused on web and machine learning. I currently work
          as a <span className="bold">Salesforce Developer</span> in Oktana
          Corporation's peruvian offices, focused on the awesome Einstein
          Analytics platform{" "}
          <span role="img" aria-label="chart-emoji">
            📊
          </span>
          . I'm self-taught and passionate about learning new technologies and
          solving problems.
        </p>
      </section>
      <hr />
      <section name="project-section">
        <p>These are some of my most recent projects:</p>
        <p>
          <span role="img" aria-label="up-emoji">
            ☝️
          </span>{" "}
          Explore more of my work by going to the specific sections in the menu{" "}
          <span role="img" aria-label="up-emoji">
            ☝️
          </span>
        </p>
      </section>
    </main>
  );
}
