import React from "react";
import Image from "next/image";
import figure_1 from "../../public/images/figure_1.svg";
function Sections() {
  return (
    <div>
      <div className="container my-24 mx-auto md:px-6">
        <section className="mb-32">
          <div className="flex flex-wrap">
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-5/12">
              <div className="flex lg:py-12">
                <Image
                  src={figure_1}
                  width={600}
                  height={600}
                  alt="Figure 1"
                  className="w-full rounded-lg shadow-lg dark:shadow-black/20 lg:ml-[50px] z-[10]"
                />
              </div>
            </div>
            <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
              <div className="flex h-full items-center rounded-lg bg-blue-400 p-6 text-center text-white lg:pl-12 lg:text-left">
                <div className="lg:pl-12">
                  <h2 className="mb-6 text-3xl font-bold">
                    Lack of stakeholder connectivity
                  </h2>
                  <p className="text-lg font-extralight text-left mb-3 leading-8 tracking-tight  text-white md:text-lg lg:text-lg">
                    impedes investments and hinders progress in emerging markets
                    and technologies the problem.
                  </p>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Sections;
