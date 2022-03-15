import React from "react";
import { Rating } from "@material-ui/lab";
import { MdLocationPin } from "react-icons/md";

const DataCardContainer = () => {
  return (
    <div className="w-full h-auto p-1 bg-white shadow-lg flex items-center justify-center flex-col rounded-md">
      {/* top section */}
      <div className="flex items-center justify-between w-full">
        <div className="flex-1  flex-col items-center justify-center gap-2 px-2">
          {/* Title section */}
          <div className="flex items-center justify-between ">
            <p className="text-base text-gray-800 font-semibold">
              Mix Bar lounge...
            </p>
            <p className="text-xs font-semibold text-gray-500">$14-$25</p>
          </div>

          {/* Ratings sections */}
          <div className="flex items-center gap-1">
            <Rating size="small" value={4} readOnly />
            <p className="text-xs text-gray-500">(1471)</p>
            <p className="text-xs font-semibold text-gray-500 ml-auto">$$-$$</p>
          </div>

          {/* Ranking Sections */}
          <p className="text-xs text-gray-400 font-semibold">
            #438 of 1238 Restaurant in Somewhere
          </p>

          {/* Open Status */}
          <p className="text-xs text-gray-600 font-semibold my-1">Open Now</p>

          {/* Badges */}
          <div className="flex flex-1 items-center gap-2 flex-wrap">
            <p className="bg-green-200 p-[2px] text-[10px] font-semibold rounded-sm uppercase shadow-sm">
              VEGAN OPTIONS
            </p>
            <p className="bg-green-200 p-[2px] text-[10px] font-semibold rounded-sm uppercase shadow-sm">
              VEGAN OPTIONS
            </p>
          </div>
        </div>
        <img
          src="http://cdn.cnn.com/cnnnext/dam/assets/200120161356-cnn-worlds-best-new-restaurants---madera---simon-brown-photography-1-1.jpg"
          alt=""
          className="w-28 h-28 object-cover rounded-lg"
        />
      </div>

      {/* address section */}
      <p className="flex flex-1 w-full gap-1 items-center justify-start mt-3">
        <MdLocationPin className="text-base text-gray-700" />
        <span className="text-xs text-gray-700"> Some address over here</span>
      </p>
    </div>
  );
};

export default DataCardContainer;
