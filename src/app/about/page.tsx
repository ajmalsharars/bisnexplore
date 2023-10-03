import coverPhoto from "../../../public/images/about.jpg";
import Image from "next/image";
async function page() {
  return (
    <div className="">
      <section className="bg-center bg-no-repeat bg-[url('')] bg-gray-100 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-10 lg:py-24">
          <div>
            <h1 className="mb-8 text-4xl font-extrabold leading-8 tracking-tight  text-blue-950 md:text-4xl lg:text-5xl">
              About us{" "}
            </h1>
            <hr className="w-48 h-1 mx-auto my-4 bg-blue-950 border-0 rounded md:my-10"></hr>
            <p className="mb-4 font-extralight   text-gray-600 lg:text-xl sm:px-16 lg:px-48">
              Welcome to Bisnexplore, the world’s first platform where companies
              connect with each other word wide to amplify their businesses.
            </p>
            <hr className="border-1 border-gray-200 mb-1 mx-auto drop-shadow-sm" />
          </div>
        </div>
      </section>
      {/* Start of other section */}

      <div>
        <div className="w-full mx-auto my-10 justify-center items-center">
          <h1 className="text-fuchsia-900 uppercase text-2xl text-center py-10">
            Our vision
          </h1>
          <h1 className="pl-8 pb-28 mb-8  text-2xl font-extralight  leading-8 tracking-tight  text-blue-950 md:text-xl lg:text-2xl">
            The vision of Bisnexplore is to become the global catalyst for
            seamless business connections, driving innovation and growth in
            emerging markets and technology sectors.
          </h1>
        </div>

        <div className="w-full mx-auto my-10 justify-center items-center bg-slate-100 py-10">
          <h1 className="text-fuchsia-900 uppercase text-2xl text-center py-10">
            Our mission
          </h1>
          <h1 className="pl-8 pb-28 mb-8  text-2xl font-extralight  leading-8 tracking-tight  text-blue-950 md:text-xl lg:text-2xl">
            Our mission is to empower businesses, facilitating connections that
            ignite progress in emerging markets and technologyg
          </h1>
        </div>

        <div className="w-full mx-auto my-10 justify-center items-center">
          <h1 className="text-fuchsia-900 uppercase text-2xl text-center py-10">
            Who we are
          </h1>
          <h1 className="pl-8 pb-28 mb-8  text-2xl font-extralight  leading-8 tracking-tight  text-blue-950 md:text-xl lg:text-2xl">
            There should be some text...... There should be some text......
            There should be some text......
          </h1>
        </div>
      </div>
    </div>
  );
}

export default page;
