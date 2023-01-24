import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Tbody from "../Utilities/Tbody";

const MyReviews = () => {
  const data = useLoaderData();
  const [product, setProduct] = useState(data);

  const deleteHandaler = (id) => {
    console.log(id);
    fetch(`https://foodfly.vercel.app/reviews/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const remaining = data.filter((item) => item._id !== id);
          setProduct(remaining);
        }
      });
  };
  return (
    <div>
      <div className="overflow-x-auto w-full container mx-auto ">
        <table className="table w-full">
          <thead>
            <tr>
              <th>User</th>
              <th>Product</th>
              <th>Review</th>
              <th>Update/delete</th>
            </tr>
          </thead>
          <tbody>
            {product.map((info) => (
              <Tbody
                key={info._id}
                data={info}
                deleteHandaler={deleteHandaler}
              ></Tbody>
            ))}
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
    </div>
  );
};

export default MyReviews;
