
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarIcon, FileTextIcon, FileArchiveIcon } from "lucide-react";

const Submission = () => {
  const importantDates = [
    {
      title: "Paper Submission Deadline",
      date: "16-04-2025"
    },
    {
      title: "Notification of Acceptance",
      date: "19-04-2025"
    },
    {
      title: "Final Camera-Ready Paper Submission",
      date: "20-04-2025"
    },
    {
      title: "Conference Dates",
      date: "21-23 April 2025"
    }
  ];
  
  const guidelines = [
    "Manuscripts must be original and not previously published.",
    "All submissions should follow the standard conference format.",
    "Papers must be submitted through the official google form: Click Here",
    "Dead Line for Payment: 20/04/2025"
  ];
  
  const registrationDetails = [
    {
      type: "Faculty Registration",
      fee: "INR 1200"
    },
    {
      type: "Research Scholar/Student Registration",
      fee: "INR 1000"
    },
    {
      type: "Industry Participants Registration",
      fee: "INR 1500"
    }
  ];

  return (
    <section id="submission" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#003366]">
          Submission <span className="text-red-600">Guidelines</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <FileTextIcon className="w-6 h-6 text-red-600 mr-2" />
                <h3 className="text-xl font-bold text-[#003366]">Submission Guidelines</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                {guidelines.map((guideline, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>{guideline}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <CalendarIcon className="w-6 h-6 text-red-600 mr-2" />
                <h3 className="text-xl font-bold text-[#003366]">Important Dates</h3>
              </div>
              <ul className="space-y-4">
                {importantDates.map((item, index) => (
                  <li key={index} className="flex flex-col">
                    <span className="font-semibold text-[#003366]">{item.title}</span>
                    <span className="text-red-600">{item.date}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <FileArchiveIcon className="w-6 h-6 text-red-600 mr-2" />
                <h3 className="text-xl font-bold text-[#003366]">Registration Details</h3>
              </div>
              <ul className="space-y-4">
                {registrationDetails.map((item, index) => (
                  <li key={index} className="flex flex-col">
                    <span className="font-semibold text-[#003366]">{item.type}</span>
                    <span className="text-red-600">{item.fee}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                Payment RTGID: k.miranji@ybl
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-10 p-6 bg-[#003366] text-white rounded-lg">
          <h3 className="text-xl font-bold mb-4 text-center">AICTE - AQIS - GOC SCHEME</h3>
          <p className="mb-4 text-center">The main objective of the AQIS-GOC are:</p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-yellow-300 mr-2">•</span>
              <span>The Scheme provides financial assistance to AICTE-approved institutions for organizing national and international conferences in cutting-edge and interdisciplinary areas.</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-300 mr-2">•</span>
              <span>It promotes the exchange of knowledge and research findings by facilitating expert talks, technical sessions and paper presentations.</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-300 mr-2">•</span>
              <span>It encourages original research and publication by offering a platform for researchers and academicians to showcase their work.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Submission;
