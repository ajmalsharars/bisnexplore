import coverPhoto from "../../../public/images/about.jpg";
import Image from "next/image";
async function page() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
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
          <hr className="w-48 h-1 mx-auto my-4 bg-gray-50 border-0 rounded md:my-10"></hr>
        </div>
      </section>
      {/* Start of Cards */}
      <div className="bg-gray-50 flex flex-wrap gap-6 justify-center items-center mb-10 mt-10 pt-10 pb-10">
        <div className="w-full max-w-xs px-8 py-4 items-center bg-white rounded-2xl shadow-lg">
          <div className="flex justify-center  md:justify-end"></div>

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
          <div className="flex justify-center  md:justify-end"></div>

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
