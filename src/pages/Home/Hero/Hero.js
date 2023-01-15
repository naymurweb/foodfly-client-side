import React from "react";
import bg1 from "../../../image/Home/bg1.png";
import bg2 from "../../../image/Home/bg2.png";
import hero from "../../../image/Home/hero.png";

const Hero = () => {
  return (
    <div className=" min-h-screen" style={{ backgroundImage: `url(${bg2})` }}>
        <div
          className=" min-h-screen bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${bg1})` }}
        >
      <div className="md:flex justify-center items-center container mx-auto py-10 text-center md:text-left">

          <div className="md:w-1/2 text-white">
            <h1 className="md:text-8xl text-5xl  font-semibold">
              Express <br /> <span className="text-yellow-500">Home Delivery</span>
            </h1>
            <p className="my-5">
              Curabitur imperdiet varius lacus, id placerat purus vulputate non.
              Fusce in felis vel arcu maximus placerat eu ut arcu. Ut nunc ex,
              gravida vel porttitor et, pretium ac sapien.
            </p>
            <button className=" btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-warning"> Read More</button>
          </div>

        <div className="md:w-1/2 md:mt-0  w-fit mt-12" >
          <img src={hero} alt="" />
        </div>

        </div>

      </div>
    </div>
  );
};

export default Hero;
