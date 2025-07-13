import React from "react";
import HeroImage from "./../assets/hero-image.png";

function Hero() {
  return (
    <div className="w-full h-[90vh] ">
      <div>
        <img src={HeroImage} alt="/" className="w-full h-[90vh] object-cover" />
      </div>
      <div className="max-w-[1140px] m-auto">
        <div className="absolute top-[40%] md:[-50%] max-w-[600px] h-full flex flex-col text-white p-4 ">
          <h1 className="font-bold text-4xl">Find Your Special Trip</h1>
          <h2 className="text-4xl py-4 italic">With Weekend</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
