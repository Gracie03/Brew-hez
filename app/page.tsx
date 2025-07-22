'use client'

import About from "@/components/LandingPages/About";
import Blog from "@/components/LandingPages/Blog";
import Hero from "@/components/LandingPages/Hero";
import Testimonial from "@/components/LandingPages/Testimonial";
import TopOrder from "@/components/LandingPages/TopOrder";


export default function Home() {
  return (
    <>
      <Hero />
      <TopOrder />
      <About />
      <Testimonial />
      <Blog />
    </>
  );
}
