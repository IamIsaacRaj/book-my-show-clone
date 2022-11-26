import React from "react";
import { BiChevronDown, BiMenu, BiSearch } from "react-icons/bi";
import {Link} from "react-router-dom";
import homeLogo from "./homeLogo.png"

function NavSm() {
  return (
    <>
      <div className="text-white flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">It All Starts Here!</h3>
          <span className="text-gray-800 text-xs flex items-center cursor-pointer hover:text-white">
            Hyderabad <BiChevronDown />
          </span>
        </div>
        <div className="w-8 h-8">
          <BiSearch className="w-full h-full" />
        </div>
      </div>
    </>
  );
}

function NavMd() {
  return (
    <>
      <div className="w-full flex items-center gap-3">
      <div className="w-64 h-10 flex text-white text-2xl font-bold cursor-pointer">
            Book
            <img
              src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
              alt="logo"
              className="w-full h-full"
            />
            Show
          </div>
        <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
          <BiSearch />
          <input
            type="search"
            className="w-full bg-transparent border-none focus:outline-none"
            placeholder="Search for movies, events, plays, sports and activities"
          />
        </div>
      </div>
    </>
  );
}

function NavLg() {
  return (
    <>
    <div className="container flex flex-col">
      <div className="container flex  mx-auto px-4 py-1 items-center justify-between">
        <div className="flex items-center w-1/2 gap-3">
          <div className="w-64 h-10 flex text-white text-2xl font-bold cursor-pointer">
            Book
            <img
              src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
              alt="logo"
              className="w-full h-full"
            />
            Show
          </div>
          <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
            <BiSearch />
            <input
              type="search"
              className="w-full bg-transparent border-none focus:outline-none"
              placeholder="Search for movies, events, plays, sports and activities"
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white ">
            Hyderabad
            <BiChevronDown />
          </span>
          <button className="bg-red-600 text-white px-2 py-1 text-sm rounded">
            Sign In
          </button>
          <div className="w-8 h-8 text-white">
            <BiMenu className="w-full h-full cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="sticky top-0  z-20  bg-darkBackground-800 hidden md:block text-gray-200 w-full h-10 px-4">
          <div className="flex gap-3 justify-start items-center py-2">
            <Link to={"/"} className="text-gray-300 hover:bg-gray-700 hover:text-white px-2 rounded-md text-md font-medium" >Home</Link>

            <Link to={"/movies"} className="text-gray-300 hover:bg-gray-700 hover:text-white px-2 rounded-md text-md font-medium">Movies</Link>

            <Link to={"/shows"} className="text-gray-300 hover:bg-gray-700 hover:text-white px-2  rounded-md text-md font-medium">Shows</Link>
          </div>
        </div>
     </div> 
    </>
  );
}

//main component
const Navbar = () => {
  return (
    <>
    <nav className="bg-darkBackground-700 p-2 lg:p-0">
      {/* mobile screen only */}
      <div className="md:hidden">
        <NavSm />
      </div>
      {/* medium/tab Screen */}
      <div className="hidden md:flex lg:hidden">
        <NavMd />
      </div>
      {/* large Screen only */}
      <div className="hidden md:hidden lg:flex">
        <NavLg />
      </div>
    </nav>
    <div className='flex gap-3 p-2 lg:hidden'>
            <Link to ={'/'}>
                    <img src={homeLogo} className='w-10 pt-2' alt="Movies" />
                    <h3 className='text-md mt-2 font-semibold'>Home</h3>
                </Link>
                <Link to ={'/movies'}>
                    <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300:q-80/icd-movies-collection-202201201113.png" className='w-24' alt="Movies" />
                </Link>
                <Link to ={'/shows'}>
                    <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300:q-80/icd-plays-collection-202201201113.png" className='w-24' alt="Movies" />
                </Link>
                <Link to ={''}>
                    <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300:q-80/icd-stream-collection-202201201113.png" className='w-24' alt="Movies" />
                </Link>
                <Link to ={''}>
                    <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300:q-80/icd-music-shows-collection-202201201113.png" className='w-24' alt="Movies" />
                </Link>
            </div>
    </>
    
  );
};

export default Navbar;
