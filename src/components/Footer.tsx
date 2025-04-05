
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#003366] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 flex items-center">
            <img 
              src="/lovable-uploads/edb085d6-82e8-41d8-930f-db624064a936.png" 
              alt="College Logo" 
              className="h-16 w-auto mr-4"
            />
            <div>
              <h3 className="font-bold">SIR C R REDDY COLLEGE OF ENGINEERING</h3>
              <p className="text-sm">Vatluru, Eluru, Eluru District, Andhra Pradesh, India</p>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm">
              © 2025 ICBE-AIML-NIT Conference. All Rights Reserved.
            </p>
            <p className="text-xs mt-2 text-gray-300">
              An AICTE Sponsored International Conference
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-white/20 text-center text-sm">
          <p>
            International Conference on Biomedical Engineering: AI and ML in Non-Invasive Techniques (ICBE-AIML-NIT)
          </p>
          <p className="mt-2">
            21<sup>st</sup> - 23<sup>rd</sup> April 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
