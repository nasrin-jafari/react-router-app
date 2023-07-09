import React from "react";
import "./../App.css";

export default function Footer() {
  return (
    <div className="footer-container">
      {/* <h1>footer</h1> */}
      <div class="social-media">
        <a class="social-media__link social-media__link--facebook" href="#">
          <i class="social-media__icon fab fa-facebook-f"></i>
        </a>
        <a href="#" class="social-media__link social-media__link--instagram">
          <i class="social-media__icon fab fa-instagram"></i>
        </a>
        <a href="#" class="social-media__link social-media__link--envelope">
          <i class="social-media__icon fas fa-envelope"></i>
        </a>
      </div>
    </div>
  );
}
