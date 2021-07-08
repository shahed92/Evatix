import React from "react";
import shape from "../images/Shape_01.png";
import animate from "../images/image_01.png";
function Header() {
  return (
    <header className="text-white pt-20   bg-gradient-to-r from-pink-300  to-purple-700  ">
      <div className="hero md:flex  md:m-8 md:mx-16 justify-around items-center">
        <div className="hero_left flex flex-col md:text-left text-center">
          <p className="text-xs">Bussiness workflow</p>
          <h4 className="md:text-3xl font-bold md:w-3/5 pt-3 pb-3 sm:text-sm text-xs">
            Get the most <br /> efficient UI design for your bussiness now!
          </h4>
          <p className="md:w-3/5 text-xs pt-2">
            Hire me to design a clean and modern UI for your <br /> product's
            website
          </p>
          <div className="buttons mt-7 mx-20 sm:mx-0 flex flex-col sm:block justify-center space-y-2">
            <button className="transition-all duration-500 ease-in-out hover:bg-white hover:text-purple-700    border-2 border-white text-xs p-1 rounded-3xl md:px-5 pl-5 pr-5 mx-1">
              {/* font-bold p-2 pl-7 pr-7 md:pl-4 md:pr-4 text-xs m-2 bg-white text-purple-700 rounded-3xl */}
              HIRE ME
            </button>
            <button className=" transition-all duration-500 ease-in-out hover:bg-white hover:text-purple-700  border-2 border-white text-xs p-1 rounded-3xl md:pl-2 md:pr-2 pl-5 pr-5 mx-1">
              PORTFOLIO
            </button>
          </div>
        </div>
        <div className="hero_right flex items-center justify-center">
          <img className="w-96 pt-9" src={animate} alt="" srcset="" />
        </div>
      </div>
      <img src={shape} />
    </header>
  );
}

export default Header;
