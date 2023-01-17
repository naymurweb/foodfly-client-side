import React, { useEffect } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";

const Product = ({ item }) => {
  const { image, name, price, details, _id } = item;

  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto">
      <figure>
        <PhotoProvider>
          <PhotoView src={image}>
            <img src={image} alt="" />
          </PhotoView>
        </PhotoProvider>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <h2 className="card-title text-yellow-500">${price}</h2>
        <p>{details.slice(0, 80)}</p>
        <div className="card-actions justify-end">
          <Link to={`/items/${_id}`}>
            <button className="btn btn-warning">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
