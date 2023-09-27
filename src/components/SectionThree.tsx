import React from "react";
import Image from "next/image";
import figure_4 from "../../public/images/figure_4.png";
function SectionThree() {
  return (
    <div>
      <div className="bg-fuchsia-50 mt-0 mb-8">
        <h1 className="pl-8 mb-8 pt-8 text-2xl font-extralight text-center leading-8 tracking-tight  text-blue-950 md:text-5xl lg:text-2xl">
          Catalyze your success with our solution, offering enhanced visibility,
          accessibility, and strategic relationship management seamlessly
          embedded within our streamlined process
        </h1>
        <Image
          src={figure_4}
          width={800}
          height={800}
          quality={100}
          alt="Figure 4"
          className="mx-auto pb-10"
        />

      </div>
    </div>
  );
}

export default SectionThree;
