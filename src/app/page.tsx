import Hero from "@/components/Hero";
import Image from "next/image";
import SectionOne from "@/components/SectionOne";
import SectionTwo from "@/components/SectionTwo";
import SectionThree from "@/components/SectionThree";
import Cta from "@/components/Cta";
import Cta2 from "@/components/Cta2";

export default function Home() {
  return (
    <div>
      <Hero />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Cta />
      <Cta2 />
    </div>
  );
}
