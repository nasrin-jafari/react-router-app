import React from "react";
import "./../App.css";
import { Link } from "react-router-dom";

export default function ProductItem({ title, image, price, id }) {
  return (
    <div className="Productcard">
      <img src={image} alt="" className="card__img" />
      <p className="card-title">{title}</p>
      <div className="box-details">
        <p className="price-card">${price}</p>
        <button className="btn-card">
          <Link className="link-card" to={`/Products/${id}`}>view details</Link>
        </button>
      </div>
    </div>
  );
}
