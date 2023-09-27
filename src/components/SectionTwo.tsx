import React from "react";
import Image from "next/image";
import figure_3 from "../../public/images/figure_3.svg";
function SectionTwo() {
  return (
    <div>
      <div className="w-full my-28 mx-auto bg-gray-100 justify-center items-center md:flex md:justify-between">
        <h1 className="pl-8 pt-8 pb-7 mb-8  text-2xl font-extralight  leading-8 tracking-tight  text-blue-950 md:text-xl lg:text-2xl">
          <span className="text-fuchsia-900 uppercase text-2xl">
            Bisnexplore’s
          </span>{" "}
          mission is to empower businesses, facilitating connections that ignite
          progress in emerging markets and technologies our solution
        </h1>
        <Image
          src={figure_3}
          width={600}
          height={600}
          alt="Figure 3"
          className="mx-auto mb-5 mt-5"
        />
      </div>
    </div>
  );
}

export default SectionTwo;
