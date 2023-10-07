import React from "react";
import "./our_works.css";
import { works } from "../languageData/OurWorks";

import img1 from "../assets/4.миллий таомлар.jpg";
import img2 from "../assets/4.миллий таомлар 2.jpg";

import img3 from "../assets/2.Рузметов.jpg";
import img4 from "../assets/2.Рузметов 2.jpg";

import img5 from "../assets/sergeli uy.jpg";

import img6 from "../assets/5. Крембер 2.jpg";
import img7 from "../assets/5 1.jpg";

import img8 from "../assets/3.Частный дом 2.jpg";
import img9 from "../assets/3.Частный дом.jpg";

export default function OurWorks({ lang }) {
  return (
    <div className="our_works pt-[90px]">
      <h4 className="text-[25px] font-[500] text-center" data-aos="fade-bottom">
        {works[lang].title}
      </h4>

      <div className="mt-[30px] flex justify-center flex-col w-full items-center gap-7">
        <h3 className="text-center text-[20px]" data-aos="fade-bottom">
          {works[lang].text1}
        </h3>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 w-4/5">
          <img className="rounded-lg" data-aos="fade-left" src={img1} alt="" />
          <img className="rounded-lg" data-aos="fade-right" src={img2} alt="" />
        </div>
      </div>

      <div className="mt-[40px] flex justify-center flex-col w-full items-center gap-7">
        <h3 className="text-center text-[20px]" data-aos="fade-bottom">
          {works[lang].text2}
        </h3>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 w-4/5">
          <img className="rounded-lg" data-aos="fade-right" src={img4} alt="" />
          <img className="rounded-lg" data-aos="fade-left" src={img3} alt="" />
        </div>
      </div>

      <div className="flex justify-center items-center flex-col mt-[40px]">
        <div className="w-4/5 grid lg:grid-cols-2 grid-cols-1">
          <div
            data-aos="fade-right"
            className="h-100% items-center justify-center py-12 lg:py-0"
          >
            <div className="flex items-center h-full">
              <p className="text-[20px] text-center">{works[lang].text3}</p>
            </div>
          </div>
          <img
            data-aos="fade-left"
            className="w-full rounded-lg"
            src={img5}
            alt="Solar panel image"
          />
          {/* <div className="h-100% flex items-center justify-center py-12 lg:py-0 lg:hidden">
            <div className="w-[80%]">
              <p>{works[lang].text3}</p>
              <p className="mt-2">{works[lang].text2}</p>
            </div>
          </div> */}
        </div>
      </div>

      <div className="flex justify-center items-center mb-9">
        <div className="mt-[40px] grid lg:grid-cols-2 grid-cols-1 w-4/5 gap-7">
          <h3 className="text-center text-[20px] md:hidden" data-aos="fade-bottom ">
            {works[lang].text5}
          </h3>
          <img className="rounded-lg" data-aos="fade-right" src={img7} alt="" />
          <div className="flex flex-col justify-around">
            <h3 className="text-center text-[20px] hidden md:flex" data-aos="fade-bottom ">
              {works[lang].text5}
            </h3>
            <img
              className="rounded-lg"
              data-aos="fade-left"
              src={img6}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="mb-[30px] flex justify-center flex-col w-full items-center gap-7">
        <h3 className="text-center text-[20px]" data-aos="fade-bottom">
          {works[lang].text4}
        </h3>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 w-4/5">
          <img className="rounded-lg" data-aos="fade-right" src={img8} alt="" />
          <img className="rounded-lg" data-aos="fade-left" src={img9} alt="" />
        </div>
      </div>
    </div>
  );
}
