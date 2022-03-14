import React, { useState } from "react";
import { IoSearch, IoStar, IoChevronDown, } from "react-icons/io5"; //prettier-ignore
import { MdRestaurant, MdLocalHotel, MdMap } from "react-icons/md"; //prettier-ignore
import { Autocomplete } from "@react-google-maps/api";
import { Rating } from "@material-ui/lab";
import { AnimatePresence, motion } from "framer-motion";

const ratingsData = [
  {    id: 1,   ratings: '2.0',    value: 2,  }, // prettier-ignore
  {    id: 2,   ratings: '3.0',    value: 3,  }, // prettier-ignore
  {    id: 3,   ratings: '4.0',    value: 4,  }, // prettier-ignore
  {    id: 4,   ratings: '5.0',    value: 5,  }, // prettier-ignore
];

const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <AnimatePresence initial={false}>
      <div className="fixed inset-x-0 top-2 p-4 flex items-center gap-4 z-50">
        {/* search box starts here */}
        <div className="flex items-center gap-2 bg-white w-400 py-2 px-3 rounded-lg shadow-lg">
          {/* <Autocomplete> */}
          <input
            type="text"
            className="w-full h-full border-none outline-none text-gray-700 text-base"
            placeholder="Search here...."
          />
          <IoSearch className="text-lg text-gray-700" />
          {/* </Autocomplete> */}
        </div>
        {/* search box ends here */}

        {/* ratings starts here */}
        <div className="relative ml-6">
          <div
            className="bg-white py-2 px-3 flex items-center justify-center gap-2 rounded-lg shadow-lg cursor-pointer"
            onClick={() => setIsMenuActive(!isMenuActive)}
          >
            <IoStar className="text-base text-gray-700" />
            <p>Choose ratings</p>
            <IoChevronDown className="text-base text-gray-700" />
          </div>

          {isMenuActive && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="w-52 bg-white rounded-lg shadow-lg absolute top-11 inset-x-0 flex flex-col gap-1 items-start justify-evenly"
            >
              <p className="flex items-center gap-2 px-4 py-1 cursor-pointer hover:bg-gray-100 w-full mt-2">
                All Ratings
              </p>
              <div className="w-full mb-2 -mt-2">
                {ratingsData &&
                  ratingsData.map((data) => (
                    <p
                      key={data.id}
                      className="flex items-center gap-2 px-4 py-1  text-orange-500 text-base font-semibold cursor-pointer hover:bg-gray-100"
                    >
                      {data.ratings}
                      <Rating size="small" value={data.value} readOnly />
                    </p>
                  ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* ratings ends here */}
        {/* Restaurants */}
        <motion.div
          whileTap={{ scale: 0.8 }}
          className="bg-white px-4 py-2 shadow-lg cursor-pointer rounded-lg flex items-center gap-3"
        >
          <MdRestaurant className="text-lg text-gray-700" />
          <p className="text-base text-gray-700 pointer-events-none">
            Restaurants
          </p>
        </motion.div>

        {/* Hotels */}
        <motion.div
          whileTap={{ scale: 0.8 }}
          className="bg-white px-4 py-2 shadow-lg cursor-pointer rounded-lg flex items-center gap-3"
        >
          <MdLocalHotel className="text-lg text-gray-700" />
          <p className="text-base text-gray-700 pointer-events-none">Hotels</p>
        </motion.div>

        {/* Attractions */}
        <motion.div
          whileTap={{ scale: 0.8 }}
          className="bg-white px-4 py-2 shadow-lg cursor-pointer rounded-lg flex items-center gap-3"
        >
          <MdMap className="text-lg text-gray-700" />
          <p className="text-base text-gray-700 pointer-events-none">
            Attractions
          </p>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default Header;
