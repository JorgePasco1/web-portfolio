import React from "react";
import Profile from "../assets/profile.png";

export default function BannerPic() {
  return (
    <div className="bannerPic">
      <img src={Profile} alt="profile"></img>
      <div className="about-container">
        <h1>About me</h1>
      </div>
    </div>
  );
}
