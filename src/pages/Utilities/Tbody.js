import React from "react";

const Tbody = ({ data }) => {
  const { photoURL, displayName, name, email, massage } = data;
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
      <td>{massage.slice(0, 80)}</td>
      <th>
        <button className="btn btn-ghost btn-xs">edit review</button>
        <button className="btn btn-ghost btn-xs">delete</button>
      </th>
    </tr>
  );
};

export default Tbody;
