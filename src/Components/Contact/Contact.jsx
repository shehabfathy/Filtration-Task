import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
export default function Contact() {
  let [loading, setLoading] = useState(false);
  let [error] = useState(null);

  async function handleContacts(values) {
    console.log(values);
    setLoading(true);
    let { data } = await axios.post(
      `https://upskilling-egypt.com:3001/contact`,
      values
    );

    console.log(data);
    alert(data.message);
    setLoading(false);
  }
  let validationSchema = Yup.object().shape({
    email: Yup.string().email("enter a valid mail").required("required"),
    name: Yup.string()
      .min(3, "at least 3 charater")
      .max(10, "maximum 10 character")
      .required("enter a valid Name"),
    phone: Yup.string()
      .matches(/^01[0125][0-9]{8}$/, "is not correct")
      .required("enter an Egyptian num"),
  });

  let formik = useFormik({
    initialValues: {
      email: "",
      phone: "",
      name: "",
    },
    validationSchema,
    onSubmit: handleContacts,
  });
  return (
    <>
      <div className="max-w-xl translate-middle  mx-auto py-5 lg:py-20">
        <h2 className="text-main text-3xl font-extrabold mb-6 uppercase text-center ">
          Contact us
        </h2>
        <div className=" md:flex items-center justify-between">
          <form onSubmit={formik.handleSubmit} className=" md:w-1/2  p-5">
            {error ? (
              <div className="bg-red-200 text-center py-1 mb-5">{error}</div>
            ) : null}
            <div className="relative z-0 w-full mb-5 group">
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                type="text"
                name="name"
                id="name"
                className="block px-3 bg-[#FFD39F] w-full py-3 rounded-[61px] placeholder:font-bold placeholder:text-black placeholder:ps-3 border-none outline-none"
                placeholder=" Full Name"
              />
            </div>
            {formik.errors.name && formik.touched.name ? (
              <div className="bg-red-200 text-center py-1 mb-1">
                {formik.errors.name}
              </div>
            ) : null}

            <div className="relative z-0 w-full mb-5 group">
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                type="email"
                name="email"
                id="email"
                className="block px-3 bg-[#FFD39F] w-full py-3 rounded-[61px] placeholder:font-bold placeholder:text-black placeholder:ps-3 border-none outline-none"
                placeholder=" Email"
              />
            </div>
            {formik.errors.email && formik.touched.email ? (
              <div className="bg-red-200 text-center py-1 mb-1">
                {formik.errors.email}
              </div>
            ) : null}

            <div className="relative z-0 w-full mb-5 group">
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
                type="tel"
                name="phone"
                id="phone"
                className="block px-3 bg-[#FFD39F] w-full py-3 rounded-[61px] placeholder:font-bold placeholder:text-black placeholder:ps-3 border-none outline-none"
                placeholder=" Phone Number "
              />
            </div>
            {formik.errors.phone && formik.touched.phone ? (
              <div className="bg-red-200 text-center py-1 mb-1">
                {formik.errors.phone}
              </div>
            ) : null}

            <button
              type="submit"
              className=" block mx-auto font-bold rounded-[61px] border-2 bg-transparent py-2 px-8 border-[#C98A40]"
            >
              {loading ? <i className="fa-solid fa-spinner"></i> : "Send "}
            </button>
          </form>
          <div className="icon md:w-[48%]  ">
            <div>
              <i className="fa-solid fa-envelope text-main mr-3"></i>
              <span className="text-[#333333]">upskilling.eg1@gmail.com</span>
            </div>
            <div>
              <i className="fa-solid fa-phone text-main mr-3"></i>
              <span className="text-[#333333]">+201154932137</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
