import React, { useState } from "react";
import Header from "./Header";
import LeftContainer from "./LeftContainer";
import MapContainer from "./MapContainer";

const Home = () => {
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });

  return (
    <div className="w-screen h-screen overflow-hidden flex justify-center items-center bg-gray-50 relative">
      <Header />

      <div className="w-450 h-full flex items-center justify-center">
        <LeftContainer />
      </div>
      <div className="flex-1 h-full flex items-center justify-center">
        <MapContainer
          setCoordinates={setCoordinates}
          coordinates={coordinates}
        />
      </div>
    </div>
  );
};

export default Home;
