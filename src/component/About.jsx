import React from "react";
import { Link } from "react-router-dom";
import ShopBanner from "./ShopBanner";

export default function About() {
  return (
    <div className="about__container">
      <div className="about_banner">
        <h1 className="about-title">About Us</h1>
        <p className="about-disc">
          Porta tellus suscipit eget arcu eu nec quis scelerisque nam vitae,
          turpis integer iaculis tristique vivamus mattis egestas.
        </p>
      </div>
      <div className="about-STORY">
        <p className="STORY-title">OUR STORY</p>
        <div className="about-STORY__disc">
          <h3 className="about-STORY__head">
            The fascination of workspace furniture
          </h3>
          <p className="about-STORY__caption">
            Blandit massa, eleifend eget morbi morbi in eleifend gravida in id
            lorem erat donec ipsum nunc est et arcu dolor ut enim mi eu tempus,
            maecenas pharetra eget pretium ultrices mollis facilisi. Arcu erat
            turpis sed ullamcorper viverra amet, vel laoreet massa eu consequat.
          </p>
        </div>
      </div>
      <ShopBanner>Let’s build your dream working space</ShopBanner>
    </div>
  );
}
