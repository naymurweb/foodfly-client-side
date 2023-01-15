import React from "react";
import { useLoaderData } from "react-router-dom";
import Product from "../../Utilities/Product";

const Items = () => {
  const items = useLoaderData();
  console.log(items);
  return (
    <div className="container mx-auto my-20">
      <div className="text-center my-8">
        <h3 className="text-yellow-400">Our Item's</h3>
        <h1 className="text-5xl font-semibold">All Popular Items</h1>
      </div>

      <div className="grid md:grid-cols-2  lg:grid-cols-3  gap-5">
        {items.map((item) => (
          <Product key={item._id} item={item}></Product>
        ))}
      </div>

    </div>
  );
};

export default Items;
