import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState , useEffect } from "react";
const urlproduct = "https://fakestoreapi.com/products";
export default function ProductsDetail() {
  const [product, setProducts] = useState({});
    const { id } = useParams();
    const dataproduct = async () => {
      const response = await fetch(`${urlproduct}/${id}`);
      const product = await response.json();
      setProducts(product);
    };
    useEffect(() => {
      dataproduct();
    }, []);
  const  {title,price,description,category} = product
  return (
    <div className="detail-container">
      <div className="details-products">
        <div className="details-products__disc">
          <h3 className="title-product">{title}</h3>
          <h2 className="details-products__category">
            <span className="disc-head">category : </span>
            {category}
          </h2>
          <div className="counting-pricing">
            <h4 className="price-product">price : {price} $</h4>
          </div>
          <p className="description-product">
            <span className="disc-head">description : </span>
            {description}
          </p>
          <div>
            <Link to="/" className="link-back">
              back to all products
            </Link>
          </div>
        </div>
        <img className="details-products__img" src={product.image} alt="" />
      </div>
    </div>
  );
}
