import React from "react";
import "./../App.css";
import { Link } from "react-router-dom";

export default function ShopBanner({ children }) {
  return (
    <div className="shop-banner">
      <h1 className="shop-banner__head">{children}</h1>
      <Link
        to="/Products"
        className="link-shop-banner
"
      >
        shop now ➡
      </Link>
    </div>
  );
}
