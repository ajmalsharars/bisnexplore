import React from "react";
import Image from "next/image";
import figure_1 from "../../public/images/figure_1.svg";
function Sections() {
  return (
    <div>
      <header className="bg-white pattern">
        <div className="container px-6 mx-auto">
          <div className="flex items-center justify-center gap-20 py-6 lg:h-[36rem] lg:flex-row">
            <div className="lg:w-1/2">
              <hr className="w-48 h-1 mx-auto my-4 bg-blue-950 border-0 rounded md:my-10"></hr>
              <h2 className="text-3xl font-semibold text-blue-950 lg:text-4xl">
                Lack of stakeholder connectivity
              </h2>

              <h3 className="mt-2 text-2xl font-semibold text-gray-800">
                <span className="text-blue-400">impedes investments</span>
              </h3>

              <p className="mt-4 text-gray-800 text-xl">
                and hinders progress in emerging markets and technologies the
                problem
              </p>
            </div>

            <div className="flex mt-10 justify-center items-center ">
              <Image
                src={figure_1}
                width={400}
                height={400}
                alt="Figure 1"
                className="rounded-3xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </header>
      <hr className="w-48 h-1 mx-auto my-4 bg-blue-950 border-0 rounded md:my-10"></hr>
    </div>
  );
}

export default Sections;
