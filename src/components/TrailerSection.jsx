import React, { useState } from "react";
import ReactPlayer from "react-player";
import { dummyTrailers } from "../assets/assets.js";
import BlurCircle from "./BlurCircle";

const TrailerSection = () => {
  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0]);

  return (
    <div className="px-6 md:px-24 xl:px-44 py-20 overflow-hidden">
      <p className="text-gray font-medium text-lg max-w-[960px]">Trailer</p>
      <div className="relative mt-6">
        <BlurCircle top="-100px" right="-100px" />
        <ReactPlayer
          src={currentTrailer.videoUrl}
          controls={false}
          className="mx-auto max-w-full"
          width="960px"
          height="540px"
        />
      </div>

      <div className="group grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-8 mt-8 max-w-3xl mx-auto">
        {dummyTrailers.map((trailer) => (
          <div
            key={trailer.image}
            className="relative hover:opacity-100 opacity-70 hover:-translate-y-1 transition duration-300 max-md:h-60 md:max-h-60 cursor-pointer"
            onClick={() => setCurrentTrailer(trailer)}
          >
            <img
              src={trailer.image}
              alt=" "
              className="rounded-lg w-full h-full object-cover brightness-75"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrailerSection;
