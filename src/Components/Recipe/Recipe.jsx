import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Recipe() {
  let [items, setItem] = useState([]);
  async function getData() {
    let { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast`
    );

    setItem(data.meals);
  }

  useEffect(() => {
    getData();
  }, []);

  let filter = items.slice(0, 3);

  return (
    <section className="p-3 text-center mb-4">
      <h3 className="uppercase text-[#C98A40] font-extrabold text-3xl mb-5 ">
        Recipes
      </h3>

      <div className="md:flex items-center justify-center gap-3 mb-4 ">
        {filter.map((item) => (
          <div
            key={item.idMeal}
            className="text-start border-2  border-[#FFD8AB] "
          >
            <img
              src={item.strMealThumb}
              className="w-full  rounded-[30px] "
              alt={item.strMeal}
            />
            <div className="p-4">
              <h4 className="text-main mb-2">{item.strMeal}</h4>
              <p className="text-[#333333]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled
              </p>
            </div>
          </div>
        ))}
      </div>
      <button className="rounded-[30px] bg-[#FDBA10] uppercase text-white py-3 px-5">
        Contact us
      </button>
    </section>
  );
}
