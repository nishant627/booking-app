import React from "react";
import { assets } from "../assets/assets";
import { useNavigate, Link } from "react-router-dom";

import { CalendarIcon, ClockIcon, ArrowRight } from "lucide-react";

const HeroSection = () => {
  const nav = useNavigate();

  return (
    <div className='flex flex-col  items-start justify-center gap-4 px-6 md:px-36 bg-[url("/backgroundImage.png")] bg-cover bg-center h-screen'>
      <img src={assets.marvelLogo} alt="" className="max-h-11 lg:h-11 mt-20" />
      <h1 className="text-5xl md:text-[70px] md-leading-18 font-semibold max-w-110">
        Guardians of <br /> of the Galaxy
      </h1>
      <div className="flex items-center gap-4 text-gray-300">
        <span> Action | Adventure | Sci-Fi </span>
        <div className="flex items-center gap-1">
          <CalendarIcon className="w-4.5 h-4.5" />
          2018
        </div>
        <div className="flex items-center gap-1">
          <ClockIcon className="w-4.5 h-4.5 " />
          2h 8m
        </div>
      </div>
      <p className="max-w-md text-gray-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque soluta
        aperiam ipsum eligendi amet quidem enim, minus animi, ad numquam aut
        inventore maxime unde fuga sit totam commodi accusantium doloribus.
      </p>
      <Link to="/movies">
        <button
          className="flex items-center gap-1 px-6 py-3 text-sm bg-primary
      hover:bg-primary-dull transition rounded-full font-medium cursor-pointer"
        >
          Explore Movies
          <ArrowRight className="w-5 h-5" onClick={() => nav("/movies")} />
        </button>{" "}
      </Link>
    </div>
  );
};

export default HeroSection;
