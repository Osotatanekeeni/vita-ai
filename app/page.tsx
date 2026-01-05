import Image from "next/image";
import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";
import Section2 from "./sections/Section2";
import Wellness from "./sections/Wellness";
import HowItWorks from "./sections/HowItWorks";
import Testimonials from "./sections/Testimonials";

export default function Home() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full">
        <Navbar />
      </div>
      <Hero />
      <Section2 />
      <Wellness />
      <HowItWorks />
      <Testimonials />
    </>
  );
}
