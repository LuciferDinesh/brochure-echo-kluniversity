
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#003366]">
          About <span className="text-red-600">The Conference & Institution</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-red-600">ABOUT THE CONFERENCE</h3>
              <p className="text-gray-700 mb-4">
                The International Conference on Biomedical Engineering: AI and ML in Non-Invasive Techniques 
                (ICBE-AIML-NIT) aims to bring together leading researchers, academicians, and industry experts to 
                discuss advancements and innovations in artificial intelligence (AI) and machine learning (ML) 
                applications in non-invasive biomedical engineering techniques. This event serves as a 
                platform for exchanging ideas, presenting research findings, and exploring the future of AI-driven 
                healthcare solutions.
              </p>
              
              <h4 className="font-bold mt-4 text-[#003366]">TRACKS OF (ICBE-AIML-NIT)</h4>
              <ul className="list-disc pl-5 mt-2 text-gray-700">
                <li><span className="font-semibold">Track 1:</span> AI & ML in Medical Imaging and Diagnosis</li>
                <li><span className="font-semibold">Track 2:</span> Non-Invasive Biosensing and Wearable Technologies</li>
                <li><span className="font-semibold">Track 3:</span> Biomedical Signal Processing with AI & ML</li>
                <li><span className="font-semibold">Track 4:</span> AI for Personalized Medicine & Predictive Healthcare</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-red-600">ABOUT SIR C R REDDY COLLEGE OF ENGINEERING</h3>
              <p className="text-gray-700">
                Sir C.R Reddy College of Engineering is the first Engineering College in Andhra Pradesh sanctioned and 
                recognized by All India Council for Technical Education (AICTE). This College is permanently affiliated to 
                JNTUK from the Academic Year 2017-18. Since its inception in 1989, Sir C.R.Reddy College of Engineering 
                has been a premier institute for quality engineering education in Andhra Pradesh under the stewardship of 
                its broad minded and magnanimous management.
              </p>
              
              <p className="text-gray-700 mt-4">
                The last two and a half decades has seen the Institute fulfilling its motto of "QUALITY SERVICE & VALUE 
                BASED EDUCATION" to the student community. Adhering to its core values, the institute gives top 
                priority to ethical values and high standards and a commitment to value based education.
              </p>
              
              <p className="text-gray-700 mt-4">
                Approved by AICTE, New Delhi & Accredited by NBA and NAAC, Permanently Affiliated to JNTU Kakinada, 
                Autonomous, Vatluru, Eluru, Eluru District, Andhra Pradesh, India - 534007.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
