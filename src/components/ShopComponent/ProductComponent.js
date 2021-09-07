import React from "react";
import { Link } from "react-router-dom";
import "./ProductComponent.scss";

export const ProductComponent = ({ filterProducts }) => {
  const renderProduct = filterProducts.map((product) => {
    const { id, title, image, price } = product;

    return (
      <div className="Card" key={id}>
        <Link to={`/product/${id}`}>
          <div className="card-image">
            <img src={image} alt={title} />
          </div>
          <div className="card-title">{title}</div>
          <div>
            <div className="card-price">€ {price}</div>
          </div>
        </Link>
      </div>
    );
  });

  return <>{renderProduct}</>;
};
