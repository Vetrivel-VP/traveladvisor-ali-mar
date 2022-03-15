import React, { useState } from "react";
import CardLoadingContainer from "./CardLoadingContainer";
import DataCardContainer from "./DataCardContainer";

const LeftContainer = ({ isDataLoading }) => {
  return (
    <div className="w-full h-full overflow-x-hidden overflow-y-scroll flex flex-col items-start justify-start p-4 pt-24 gap-4 scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-400">
      {isDataLoading ? (
        <>
          {Array.apply(null, { length: 8 }).map((e, i) => (
            <CardLoadingContainer key={i + 1} />
          ))}
        </>
      ) : (
        <DataCardContainer />
      )}
    </div>
  );
};

export default LeftContainer;
