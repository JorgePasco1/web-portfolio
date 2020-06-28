import React from "react";
import Profile from "../assets/profile-compressed.png";

export default function BannerPic() {
  return (
    <div className="bannerPic">
      <img src={Profile} alt="profile"></img>
      <div className="about-container">
        <h1>Hello, World!</h1>
      </div>
    </div>
  );
}
