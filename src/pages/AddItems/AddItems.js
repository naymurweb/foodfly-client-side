import React from "react";

const AddItems = () => {
  const AddItem = (event) => {
    event.preventDefault();
    const form = event.target;
    const image = form.img.value;
    const name = form.name.value;
    const details = form.details.value;
    const price = form.price.value;
    const item = { image, name, price, details };

    fetch("https://foodfly.vercel.app/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          form.reset();
        }
        console.log(data);
      });
  };
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl text-left my-5 ">New Item Add</h1>

      <form className="my-10" onSubmit={AddItem}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Item Image</span>
          </label>
          <input
            type="img"
            placeholder="Item Image"
            className="input input-bordered w-3/4"
            name="img"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Item Name</span>
          </label>
          <input
            type="text"
            placeholder="Item Name"
            className="input input-bordered w-3/4"
            name="name"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Item Price</span>
          </label>
          <input
            type="text"
            placeholder="Item Price"
            className="input input-bordered w-3/4"
            name="price"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Item Details </span>
          </label>
          <input
            type="text"
            placeholder="Item Details"
            className="input input-bordered w-3/4"
            name="details"
          />
        </div>
        <button className="btn btn-warning my-3">Add Item</button>
      </form>
    </div>
  );
};

export default AddItems;
