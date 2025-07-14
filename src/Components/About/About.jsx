import React from "react";
import logo from "../../assets/images/WhatsApp Image 2024-01-19 at 00.27 1.png";
export default function About() {
  return (
    <section className=" lg:flex items-center justify-between relative ">
      <div className="content  p-8 bg-main text-white  lg:w-2/3">
        <div className="text md:w-1/2 mx-auto">
          <h3 className="uppercase mb-5 font-[800] text-[50px] leading-[50px]  w-36   ">
            About us
          </h3>
          <p className="mb-5 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <button className="rounded-[30px]  bg-[#FDBA10] uppercase text-white py-2 px-4">
            Contact us
          </button>
        </div>
      </div>
      <div className="image  lg:absolute left-[60%]    lg:w-1/3">
        <img className=" w-full  " src={logo} alt="" />
      </div>
    </section>
  );
}
