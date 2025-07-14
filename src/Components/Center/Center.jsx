import React from "react";
import logo from "../../assets/images/Mask Group.png";

export default function Center() {
  return (
    <section className="flex flex-col md:flex-row w-full">
      {/* Right with social icons */}
      <div
        className="relative w-full md:w-1/4 h-48 md:h-56 bg-cover bg-center"
        style={{ backgroundImage: `url(${logo})` }}
      >
        <div className="icon flex flex-row md:flex-col absolute right-2 top-2 text-main text-xl gap-2 md:gap-0">
          <i className="fa-brands fa-facebook p-2"></i>
          <i className="fa-brands fa-twitter p-2"></i>
          <i className="fa-brands fa-instagram p-2"></i>
          <i className="fa-brands fa-tiktok p-2"></i>
        </div>
      </div>

      <div className="relative w-full md:w-1/2 h-48 md:h-56 bg-main text-white flex items-end justify-start p-3">
        <span className="text-sm sm:text-base">
          Telephone: +7 700 000 00 00
        </span>
      </div>

      <div
        className="w-full md:w-1/4 h-48 md:h-56 bg-cover bg-center"
        style={{ backgroundImage: `url(${logo})` }}
      ></div>
    </section>
  );
}
