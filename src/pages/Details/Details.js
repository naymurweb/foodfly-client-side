import React from "react";
import { useLoaderData } from "react-router-dom";
const Details = () => {
  const item = useLoaderData();
  const { image, name, details } = item;

  return (
    <div className="container mx-auto md:flex my-20">
      <div className="w-1/2 text-center">
        <div className="shadow-lg p-5">
          <h1 className="text-5xl font-semibold text-yellow-400">
            Description
          </h1>
          <img className="mx-auto" src={image} alt="" />
          <h1 className="text-5xl">{name}</h1>
          <p>{details}</p>
        </div>
      </div>

      <div className="w-1/2 text-center">
        <div className="shadow-lg p-5">
          <h1 className="text-5xl font-semibold text-yellow-400">Reviews</h1>

          <textarea className="textarea textarea-warning" placeholder="Bio"></textarea>
        </div>
      </div>
    </div>
  );
};

export default Details;
