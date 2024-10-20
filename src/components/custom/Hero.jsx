import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="flex flex-col items-center mx-57 gap-9">
      <h1 className="font-extrabold text-[50px] text-center mt-16">
        <span className="text-[#f56551]">Unleash the Traveler in You:</span>{" "}
        <br></br>
        <span className="text-lg font-semibold">
          Create Your Dream Itinerary with AI!
        </span>
      </h1>

      <Link to={"/create-trip"}>
        <Button>Get Started, It's Free.</Button>
      </Link>
      {/* <img src="/landing.png" className="-mt-30 width-[120px] height-[120px]" /> */}
    </div>
  );
}

export default Hero;
