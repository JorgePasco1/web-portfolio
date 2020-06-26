import React from "react";
import Photo from "../assets/profile.png"

export default function Header() {
  return (
    <nav class="navbar">
      {/* TODO: Add a toggle button for mobile */}
      <div class="nav-items-container">
        <ul class="nav-item-list">
          <a class="nav-item active" href="#">
            Home
          </a>
          <a class="nav-item" href="#">
            Web
          </a>
          <a class="nav-item" href="#">
            Data Science
          </a>
          <a class="nav-item" href="#">
            Articles
          </a>
        </ul>
      </div>

      <div class="nav-photo-container">
        <img src={Photo} />
      </div>
    </nav>
  );
}
