import React from "react";
import { Skeleton } from "@material-ui/lab";

const CardLoadingContainer = () => {
  return (
    <div className="w-full h-auto p-1 bg-white shadow-lg flex items-center justify-center flex-col rounded-md">
      {/* top section */}
      <div className="flex items-center justify-between w-full">
        <div className="flex-1  flex-col items-center justify-center gap-2 px-2">
          {/* Title section */}
          <div className="flex items-center justify-between ">
            <Skeleton animation="wave" height={10} width="100%" />
          </div>

          {/* Ratings sections */}
          <div className="flex items-center gap-1">
            <Skeleton animation="wave" height={10} width="100%" />
          </div>

          {/* Ranking Sections */}
          <Skeleton animation="wave" height={10} width="100%" />

          {/* Open Status */}
          <Skeleton animation="wave" height={10} width="100%" />
          <Skeleton animation="wave" height={10} width="100%" />
          <Skeleton animation="wave" height={10} width="100%" />

          {/* Badges */}
          <div className="flex flex-1 items-center gap-2 flex-wrap">
            <Skeleton animation="wave" height={10} width="100%" />
          </div>
        </div>
        <Skeleton animation="wave" height={120} width={120} />
      </div>

      {/* address section */}
      <Skeleton animation="wave" height={10} width="100%" />
    </div>
  );
};

export default CardLoadingContainer;
