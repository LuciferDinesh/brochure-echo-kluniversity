
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-[#003366] text-white py-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <img 
            src="/lovable-uploads/edb085d6-82e8-41d8-930f-db624064a936.png" 
            alt="Conference Logo" 
            className="h-16 w-auto"
          />
          <div className="text-sm md:text-base">
            <h1 className="font-bold">ICBE-AIML-NIT 2025</h1>
            <p className="text-xs md:text-sm">An AICTE Sponsored Conference</p>
          </div>
        </div>
        <nav>
          <ul className="flex flex-wrap justify-center gap-4 text-sm">
            <li><Link to="/" className="hover:text-yellow-300">Home</Link></li>
            <li><a href="#about" className="hover:text-yellow-300">About</a></li>
            <li><a href="#tracks" className="hover:text-yellow-300">Tracks</a></li>
            <li><a href="#submission" className="hover:text-yellow-300">Submission</a></li>
            <li><a href="#speakers" className="hover:text-yellow-300">Speakers</a></li>
            <li><a href="#contact" className="hover:text-yellow-300">Contact</a></li>
            <li>
              <Button size="sm" className="bg-yellow-500 hover:bg-yellow-600 text-black">
                Register Now
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
