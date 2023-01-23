import React, { useState } from "react";

const Tbody = ({ data, deleteHandaler }) => {
  const { photoURL, displayName, name, email, massage, _id } = data;

  const [mass, setMass] = useState({});

  const updateHandaler = (e) => {
    e.preventDefault();
    const mass = { mass: e.target.value };
    setMass(mass);
  };
  console.log(mass);
  const massgeHandler = (id) => {
    fetch(`http://localhost:7000/reviews/${id}`, {
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
      {/* <td>{massage.slice(0, 80)}</td> */}
      <th>
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
              onChange={updateHandaler}
              type="text"
              className="w-full p-7 border-2 border-black"
            />
            <div className="modal-action">
              <label
                onClick={() => massgeHandler(_id)}
                htmlFor="my-modal-5"
                className="btn"
              >
                Yay!
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
      </th>
    </tr>
  );
};

export default Tbody;
