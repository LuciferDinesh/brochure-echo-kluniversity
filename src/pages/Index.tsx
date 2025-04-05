
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Tracks from "@/components/Tracks";
import Submission from "@/components/Submission";
import Speakers from "@/components/Speakers";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <About />
      <Tracks />
      <Submission />
      <Speakers />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
