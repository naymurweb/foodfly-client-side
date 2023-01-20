import React from "react";

const Review = ({ data, total }) => {
  const { displayName, massage, name, photoURL } = data;
  console.log("dddddd", total);
  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto my-5 w-4/5">
      <div div className="card-body">
        <div className="flex items-center border-b-2 border-gray-500 py-4">
          <div className="avatar">
            <div className="w-16 rounded-full">
              <img src={photoURL} alt="" />
            </div>
          </div>
          <div className="text-left mx-3">
            <p className="font-semibold">{displayName}</p>
            <small>review {total}</small>
          </div>
        </div>
        <div className="text-left">
          <h2 className="card-title">{name}</h2>
          <p>{massage}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
