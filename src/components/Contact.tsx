
import React from "react";
import { EnvelopeIcon, PhoneIcon, GlobeIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#003366]">
          Contact <span className="text-red-600">Information</span>
        </h2>
        
        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-8">
            <div className="flex flex-col space-y-6">
              <div className="flex items-start">
                <EnvelopeIcon className="w-5 h-5 text-red-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-bold text-[#003366]">Email</h3>
                  <p className="text-gray-700">icbeaimlnit2025@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <PhoneIcon className="w-5 h-5 text-red-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-bold text-[#003366]">Phone</h3>
                  <p className="text-gray-700">Dr. K. Miranji: +91-9652330263</p>
                  <p className="text-gray-700">Dr. CH. Jayaprakash: +91-9441310177</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <GlobeIcon className="w-5 h-5 text-red-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-bold text-[#003366]">Website</h3>
                  <p className="text-gray-700">www.sircrrengg.ac.in</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="font-bold text-center text-[#003366] mb-4">Address</h3>
              <p className="text-center text-gray-700">
                SIR C R REDDY COLLEGE OF ENGINEERING<br />
                Approved by AICTE, New Delhi & Accredited by NBA and NAAC,<br />
                Permanently Affiliated to JNTU Kakinada, Autonomous,<br />
                Vatluru, Eluru, Eluru District, Andhra Pradesh, India - 534007.
              </p>
            </div>
          </CardContent>
        </Card>
        
        <div className="mt-10 bg-[#003366] text-white p-6 rounded-lg text-center max-w-2xl mx-auto">
          <p className="font-bold mb-2">ALL THE ACCEPTED AND PRESENTED PAPERS WILL BE SUBMITTED TO CONFERENCE PROCEEDINGS WITH ISBN NUMBER.</p>
          <p className="text-sm">*NOTE: COMPLETE FEES WAIVE/OFF FOR SC/ST CATEGORY</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
