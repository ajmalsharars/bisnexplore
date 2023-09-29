import coverPhoto from "../../../public/images/about.jpg";
import vission from "../../../public/images/vission.jpg";
import mission from "../../../public/images/mission.jpg";
import who from "../../../public/images/who.jpg";
import Image from "next/image";
function page() {
  return (
    <div className="bg-gray-50">
      <section
        className="bg-center bg-no-repeat bg-gray-600 bg-blend-multiply"
        style={{ backgroundImage: `url(${coverPhoto.src})` }}
      >
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-2xl font-semibold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            About us
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Welcome to Bisnexplore, the world’s first platform where companies
            connect with each other word wide to amplify their businesses.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a
              href="#"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Get started
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>
      {/* Start of Cards */}
      <div className="bg-gray-50 flex flex-wrap gap-6 justify-center items-center mb-10 mt-10 pt-10 pb-10">
        <div className="w-full max-w-xs px-8 py-4 items-center bg-white rounded-2xl shadow-lg">
          <div className="flex justify-center  md:justify-end">
            <Image
              className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full"
              alt="Testimonial avatar"
              src={vission}
            />
          </div>

          <h2 className="mt-2 text-xl font-semibold  md:mt-0 text-blue-600">
            Our vision
          </h2>

          <p className="mt-2 mb-10 text-sm text-gray-600">
            The vision of Bisnexplore is to become the global catalyst for
            seamless business connections, driving innovation and growth in
            emerging markets and technology sectors.
          </p>
        </div>

        <div className="w-full max-w-xs px-8 py-4 items-center bg-white rounded-2xl shadow-lg">
          <div className="flex justify-center  md:justify-end">
            <Image
              className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full"
              alt="Testimonial avatar"
              src={mission}
            />
          </div>

          <h2 className="mt-2 text-xl font-semibold  md:mt-0 text-blue-600">
            Our mission
          </h2>

          <p className="mt-2 mb-10 text-sm text-gray-600">
            Our mission is to empower businesses, facilitating connections that
            ignite progress in emerging markets and technologyg
          </p>
          <br />
        </div>

        <div className="w-full max-w-xs px-8 py-4 items-center bg-white rounded-2xl shadow-lg">
          <div className="flex justify-center  md:justify-end">
            <Image
              className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full"
              alt="Testimonial avatar"
              src={who}
            />
          </div>

          <h2 className="mt-2 text-xl font-semibold md:mt-0 text-blue-600">
            Who we are
          </h2>

          <p className="mt-2 mb-10 text-sm text-gray-600">
            There should be some text...... There should be some text......
            There should be some text......
          </p>
          <br />
          <br />
        </div>
      </div>
      ___
    </div>
  );
}

export default page;
