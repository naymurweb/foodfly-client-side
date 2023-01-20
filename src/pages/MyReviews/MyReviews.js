import React from "react";
import { useLoaderData } from "react-router-dom";
import Tbody from "../Utilities/Tbody";

const MyReviews = () => {
  const data = useLoaderData();
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
            {
                data.map(info=><Tbody data={info}></Tbody>)
            }
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
    </div>
  );
};

export default MyReviews;
