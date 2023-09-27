import React from "react";
import Image from "next/image";
import svg from "../../public/images/hero.png";
function Hero() {
  return (
    <div>
      <section className="bg-center bg-no-repeat bg-[url('')] bg-gray-100 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-10 lg:py-24">
          <div>
            <h1 className="mb-8 text-4xl font-extrabold leading-8 tracking-tight  text-blue-950 md:text-4xl lg:text-5xl">
              Explore unlimited business opportunities with{" "}
            </h1>
            <h1 className="text-fuchsia-900 uppercase font-extrabold text-6xl ">
              Bisnexplore
            </h1>
            <hr className="w-48 h-1 mx-auto my-4 bg-blue-950 border-0 rounded md:my-10"></hr>
            <p className="mb-4 font-extralight   text-gray-600 lg:text-xl sm:px-16 lg:px-48">
              Ready to unlock boundless business opportunities with Bisnexplore
              ajmal?
            </p>
            <hr className="border-1 border-gray-200 mb-1 mx-auto drop-shadow-sm" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
