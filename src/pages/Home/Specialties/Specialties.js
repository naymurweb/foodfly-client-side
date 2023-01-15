import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Product from "../../Utilities/Product";

const Specialties = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:7000/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="container mx-auto my-20">
      <div className="text-center my-8">
        <h3 className="text-yellow-400">Quick pick</h3>
        <h1 className="text-5xl font-semibold">Best Specialties</h1>
      </div>

      <div className="grid md:grid-cols-2  lg:grid-cols-3  gap-5">
        {products.map((item) => (
          <Product key={item._id} item={item}></Product>
        ))}
      </div>

      <div className="text-center my-8">
        <Link to='/items'>
        <button className="btn btn-outline btn-warning ">VIEW ALL ITEMS </button>
        </Link>
      </div>
    </div>
  );
};

export default Specialties;
