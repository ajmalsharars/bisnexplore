import React from "react";
import Link from "next/link";
const page = () => {
  return (
    <div className="bg-gray-50">
      <div className="flex flex-col justify-center flex-1 px-4 py-2 sm:px-6 lg:flex-none lg:px-28 xl:px-28 scale-95">
        <div className="w-full max-w-xl mx-auto lg:w-96">
          <div>
            <h2 className="mt-6 text-3xl font-extrabold text-neutral-600">
              Sign up.
            </h2>
          </div>

          <div className="mt-8">
            <div className="mt-6">
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-600">
                    {" "}
                    Email address{" "}
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      className="block w-full px-5 py-3 text-base placeholder-gray-400 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-100 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-sm font-medium text-neutral-600">
                    {" "}
                    Password{" "}
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Your Password"
                      className="block w-full px-5 py-3 text-base placeholder-gray-400 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-100 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-sm font-medium text-neutral-600">
                    {" "}
                    Confirm Password{" "}
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Confirm Password"
                      className="block w-full px-5 py-3 text-base placeholder-gray-400 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-100 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <a
                      href="#"
                      className="text-xs text-gray-700 hover:text-blue-500"
                    >
                      {" "}
                      By clicking Agree & Join button, you agree to the
                      Bisnexplore User Agreement, Privacy Policy,
                      and Information requirements sheet in accordance with
                      FinVermV.{" "}
                    </a>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Agree & join
                  </button>
                </div>
              </form>
              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm"></div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
