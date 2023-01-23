import React from "react";
import hero2 from "../../../image/Home/your-images-here-02.png";

const Work = () => {
  return (
    <div>
      <div className="hero bg-white mb-20">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={hero2}
            alt=""
            style={{ borderRadius: "11%" }}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="py-10">
            <h3 className="text-lg font-bold text-yellow-500">How It's Work</h3>
            <h1 className="md:text-5xl text-3xl font-bold">
              Real Delicious Food <br /> Straight To Your Door
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi Aenean vulputate eleifend tellus. Aenean leo ligula,
              porttitor eu, consequat vitae, eleifend.
            </p>
            <button className="btn btn-warning">Online Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
