import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import Review from "../Utilities/Review";
const Details = () => {
  const [massage, setMassage] = useState("");
  const [allData, setAllData] = useState([]);

  const item = useLoaderData();
  const { user } = useContext(AuthContext);
  const { image, name, details, _id } = item;
  const productId = _id;
  const { displayName, photoURL,email  } = user;
  console.log('sssssssss  ',user);
  const reviewText = (event) => {
    setMassage(event.target.value);
  };
  console.log(allData);
  const reviewHandaler = () => {
    const review = {
      productId,
      name,
      displayName,
      photoURL,
      email,
      massage,
    };
    fetch("http://localhost:7000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    console.log(review);
  };

  useEffect(() => {
    fetch("http://localhost:7000/reviews")
      .then((res) => res.json())
      .then((data) => setAllData(data));
  }, [massage]);

  const reviewData = allData.filter((item) => item.productId === _id);

  return (
    <div className="container mx-auto md:flex my-20">
      <div className="md:w-1/2 text-center">
        <div className="shadow-lg p-5">
          <h1 className="text-5xl font-semibold text-yellow-400">
            Description
          </h1>
          <img className="mx-auto" src={image} alt="" />
          <h1 className="text-5xl">{name}</h1>
          <p>{details}</p>
        </div>
      </div>

      <div className="md:w-1/2 text-center">
        <div className="shadow-lg p-5 ">
          <h1 className="text-5xl font-semibold text-yellow-400 mb-4">
            Reviews
          </h1>
          {user.email ? (
            <div>
              <label htmlFor="my-modal-5" className="btn btn-primary">
                review
              </label>

              <input type="checkbox" id="my-modal-5" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                  <h3 className="font-bold text-lg">Write a review</h3>
                  <input
                    onChange={reviewText}
                    type="text"
                    className="w-full p-7 border-2 border-black"
                  />
                  <div className="modal-action">
                    <label
                      onClick={reviewHandaler}
                      htmlFor="my-modal-5"
                      className="btn btn-primary"
                    >
                      Add
                    </label>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <p>Please login to add a review</p>
          )}

<div className="">
          {reviewData.map((data) => (
            <Review data={data} total={reviewData.length} key={data._id}></Review>
          ))}
        </div>

        </div>

       
      </div>
    </div>
  );
};

export default Details;
