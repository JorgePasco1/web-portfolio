import React, { useContext } from "react";
import Profile from "../assets/profile-compressed.png";
import { ThemeContext } from "../ThemeContext";

export default function BannerPic() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="bannerPic">
      <img src={Profile} alt="profile"></img>
      <div className={`about-container ${theme}`}>
        <h1>Hello, World!</h1>
      </div>
    </div>
  );
}
