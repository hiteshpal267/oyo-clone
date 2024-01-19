"use client";

import Link from "next/link";

const Header3 = () => {
  return (
    <div className="bg-gradient-to-r from-red-600 to-red-400 h-60">
      <div className="  p-5">
        <h2 className="text-4xl text-center font-bold text-white ">
          Over 157,000 hotels and homes across 35 countries
        </h2>
        <div className="grid grid-cols-5 my-5 mx-20">
          <input
            type="text"
            placeholder="Search..."
            className="  h-16 outline-none px-3 text-lg border-r-2 border-gray-400 col-span-2"
          />
          <input
            type="text"
            placeholder="Search..."
            className="  h-16 outline-none px-3 text-lg border-r-2 border-gray-400 col-span-1"
          />
          <input
            type="text"
            placeholder="Search..."
            className="h-16 outline-none px-3 text-lg border-r-2 border-gray-400 col-span-1"
          />

          <button
            type="submit"
            className="h-16 px-3 col-span-1 text-white text-xl bg-green-400 hover:cursor-pointer hover:bg-green-600 py-2"
          >
            <Link href={"/hotels"}> Search </Link>
          </button>
        </div>
        <div className="flex mx-20 my-5 font-bold">
          <button
            type="submit"
            className="h-16 px-3   text-white    hover:cursor-pointer mr-5  py-2"
          >
            Continue Your Search
          </button>
          <button
            type="submit"
            className="h-16 px-3 border-2 border-white  text-white  hover:bg-gray-500 rounded-xl  hover:cursor-pointer mr-5  py-2"
          >
            Homestay in India hotels
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header3;
