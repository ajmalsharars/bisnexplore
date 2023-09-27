import React from "react";

function Cta2() {
  return (
    <div>
      <section className="bg-white mb-20 mt-20">
        <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
          <h2 className="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl">
            Bring your Business to the{" "}
            <span className="text-blue-500">next level.</span>
          </h2>

          <p className="max-w-4xl mt-6 text-center text-gray-700">
            Try something really different right now. If ready try it...
          </p>

          <div className="inline-flex w-full mt-6 sm:w-auto">
            <a
              href="#"
              className="inline-flex items-center justify-center w-full px-6 py-2 text-white duration-300 bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80"
            >
              Sign Up
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cta2;
