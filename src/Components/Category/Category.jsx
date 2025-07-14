import React from "react";
import logo from "../../assets/images/Mask Group.png";
import photo1 from "../../assets/images/WhatsApp Image 2024-01-19 at 00.27 (1).png";
import photo2 from "../../assets/images/WhatsApp Image 2024-01-19 at 00.27 (2).png";
import photo3 from "../../assets/images/WhatsApp Image 2024-01-19 at 00.27.png";
import photo4 from "../../assets/images/WhatsApp Image 2024-01-19 at 00.27 (3).png";
export default function Category() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center relative max-w-screen-xl mx-auto  gap-6">
      <div
        className="left md:w-1/3 relative h-svh  "
        style={{ backgroundImage: `url(${logo})` }}
      >
        <p className="md:absolute  top-52 right-0   md:mt-4 text-main text-sm md:w-40">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the
        </p>
      </div>

      <div className="bg-main text-white  w-full md:w-2/3  rounded-lg h-svh">
        <h3 className="uppercase w-1/2 mx-auto text-white  mb-8 font-extrabold text-3xl md:text-5xl text-center">
          How we work
        </h3>

        <div className="flex flex-row flex-wrap justify-center  gap-3   md:gap-4 mb-10">
          <img src={photo1} className=" mx-auto w-1/3 md:w-1/4" alt="" />
          <img src={photo2} className=" mx-auto w-1/3 md:w-1/4" alt="" />
          <img src={photo3} className=" mx-auto w-1/3 md:w-1/4" alt="" />
          <img src={photo4} className="w mx-auto w-1/3 md:w-1/4" alt="" />
        </div>
        <div className="flex justify-center">
          <button className="rounded-full bg-[#FDBA10] uppercase text-white py-2 px-6 font-bold">
            Contact us
          </button>
        </div>
      </div>
    </section>
  );
}
