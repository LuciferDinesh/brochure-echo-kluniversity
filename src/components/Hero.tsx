
import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative bg-[#003366] text-white py-16 overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-grid-white/[0.2]"></div>
      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            An AICTE Sponsored International Conference on Biomedical Engineering: 
            <span className="text-yellow-300"> AI and ML in Non-Invasive Techniques</span>
          </h1>
          <p className="text-xl mb-2">(ICBE-AIML-NIT)</p>
          <p className="text-lg mb-6">21<sup>st</sup> - 23<sup>rd</sup> April 2025</p>
          
          <div className="flex justify-center mb-8">
            <a href="https://forms.gle/c7jAg5A3jVdRumHk7" target="_blank" rel="noopener noreferrer">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
                Register Now
              </Button>
            </a>
          </div>
          
          <div className="bg-white/10 p-4 rounded-lg inline-block">
            <p className="text-sm md:text-base">
              Organized by<br />
              <span className="font-semibold">Department of Electronics & Communication Engineering</span><br />
              SIR C R REDDY COLLEGE OF ENGINEERING<br />
              Vatluru, Eluru, Eluru District, Andhra Pradesh, India - 534007
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
