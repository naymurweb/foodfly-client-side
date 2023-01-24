import React, { useState } from "react";

const Tbody = ({ data, deleteHandaler }) => {
  const { photoURL, displayName, name, email, massage, _id, productId } = data;

  const [mass, setMass] = useState({});

  const massgeHandler = (e) => {
    e.preventDefault();
    const mass = { mass: e.target.value };
    setMass(mass);
  };

  const updateHandaler = (id) => {
    fetch(`https://foodfly.vercel.app/reviews/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(mass),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={photoURL} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{displayName}</div>
            <div className="text-sm opacity-50">{email}</div>
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{massage}</td>
      <td>
        {/* The button to open modal */}
        <label htmlFor="my-modal-5" className="btn btn-ghost btn-xs">
          edit review
        </label>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal-5" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            <h3 className="font-bold text-lg">Update</h3>
            <input
              onChange={massgeHandler}
              type="text"
              className="w-full p-7 border-2 border-black"
            />
            <div className="modal-action">
              <label
                onClick={() => updateHandaler(_id)}
                htmlFor="my-modal-5"
                className="btn"
              >
                update
              </label>
            </div>
          </div>
        </div>

        <button
          onClick={() => deleteHandaler(_id)}
          className="btn btn-ghost btn-xs"
        >
          delete
        </button>
      </td>
    </tr>
  );
};

export default Tbody;
