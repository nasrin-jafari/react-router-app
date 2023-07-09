import React from "react";
import ProductItem from "./ProductItem";
import "./../App.css";
export default function Products({ products }) {
  return (
    <div className="home-container">
      <h1 className="home__title">all products</h1>
      <div className="home-Content">
        {products.map(({ id, title, image, price }) => {
          return (
            <ProductItem
              key={id}
              image={image}
              price={price}
              title={title}
              id={id}
            ></ProductItem>
          );
        })}
      </div>
    </div>
  );
}
