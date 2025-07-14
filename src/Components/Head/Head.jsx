import React from "react";
import logo from "../../assets/images/Mask Group.png";
import photo from "../../assets/images/Place Your Image Here (Double Click to Edit)_ 1.png";

export default function Head() {
  return (
    <section className="flex flex-col md:flex-row text-white w-full">
      <div className="left bg-main h-[600px] md:h-[700px] w-full md:w-2/3 p-4 relative">
        <h5 className="mx-auto font-bold pt-10 mb-6 md:mb-0 w-fit text-center text-lg">
          Peachy Pup Bakery
        </h5>

        <div className="text w-11/12 sm:w-3/4 md:w-2/3 mx-auto lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 text-center">
          <h1 className="font-extrabold uppercase text-3xl sm:text-4xl mb-4">
            Tasty pastries
          </h1>
          <p className="text-sm mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
          <button className="bg-[#FDBA10] rounded-[30px] px-6 text-sm font-semibold py-2 uppercase">
            see more
          </button>
        </div>
      </div>

      <div
        className="right relative h-[400px] md:h-[700px] w-full md:w-1/3 bg-cover bg-center"
        style={{ backgroundImage: `url(${logo})` }}
      >
        <div className="gallery absolute bottom-5 md:bottom-auto md:top-1/2 md:left-[-100px] md:-translate-y-1/2 w-2/3 md:w-[250px] mx-auto">
          <img src={photo} className="w-full" alt="Gallery" />
        </div>
      </div>
    </section>
  );
}
