import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import CollectionPoints from "@/components/CollectionPoints";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import ServiceSectionOne from "@/components/services/ServiceSectionOne";
import ServiceSectionThree from "@/components/services/ServiceSectionThree";
import ServiceSectionTwo from "@/components/services/ServiceSectionTwo";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      <ServiceSectionOne />
      <ServiceSectionTwo />
      <ServiceSectionThree />
      <Brands />
      <Testimonials />
      {/* <Pricing /> */}
      {/* <Blog /> */}
      <Contact />
    </>
  );
}
