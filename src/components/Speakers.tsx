
import React from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const Speakers = () => {
  const speakers = [
    {
      name: "Dr. N. Balaji",
      position: "Professor & HOD, Dept. of ECE, JNTUK, Kakinada",
      initials: "NB"
    },
    {
      name: "Dr. R Sandanalakshmi",
      position: "Associate Professor, Puducherry Technological University, Puducherry",
      initials: "RS"
    },
    {
      name: "Dr. A Ravi",
      position: "Associate Professor & HOD, Dept. of ECE, MANU - Central University, Hyderabad",
      initials: "AR"
    },
    {
      name: "Dr.V.R. Sarma Dhulipala",
      position: "Assistant Professor, Dept. of Physics, ANNA University, BIT Campus, Tiruchirappalli",
      initials: "VS"
    }
  ];

  const patrons = [
    {
      name: "Dr ALLURI INDRA KUMAR",
      position: "President, Sir C R Reddy Educational Institutions",
      initials: "AI"
    },
    {
      name: "Dr M B S V PRASAD",
      position: "Secretary, Sir C R Reddy Educational Institutions",
      initials: "MP"
    },
    {
      name: "Sri JASTI MALLIKHARJUNUDU",
      position: "Correspondent, Sir C R Reddy College of Engineering",
      initials: "JM"
    }
  ];

  const organizers = [
    {
      name: "Dr. K VENKATESWA RAO",
      position: "Principal, Sir C R Reddy College of Engineering",
      role: "CONVENER",
      initials: "KV"
    },
    {
      name: "Dr. P H S TEJO MURTHY",
      position: "Professor & Head, Dept. of Electronics & Communication Engineering",
      role: "CO-CONVENER",
      initials: "PT"
    },
    {
      name: "Dr. MIRANJI KATTA",
      position: "Associate Professor, Dept. of Electronics & Communication Engineering",
      role: "COORDINATOR",
      initials: "MK"
    }
  ];

  return (
    <section id="speakers" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#003366]">
          Keynote <span className="text-red-600">Speakers</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {speakers.map((speaker, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4 bg-[#003366]">
                  <AvatarFallback className="text-white text-xl">{speaker.initials}</AvatarFallback>
                </Avatar>
                <h3 className="font-bold text-lg text-[#003366]">{speaker.name}</h3>
                <p className="text-gray-600 text-sm mt-2">{speaker.position}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <h2 className="text-3xl font-bold text-center mb-12 text-[#003366]">
          Chief <span className="text-red-600">Patrons</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {patrons.map((patron, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Avatar className="w-20 h-20 mx-auto mb-4 bg-red-600">
                  <AvatarFallback className="text-white text-xl">{patron.initials}</AvatarFallback>
                </Avatar>
                <h3 className="font-bold text-lg text-[#003366]">{patron.name}</h3>
                <p className="text-gray-600 text-sm mt-2">{patron.position}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <h2 className="text-3xl font-bold text-center mb-12 text-[#003366]">
          Conference <span className="text-red-600">Organizers</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {organizers.map((organizer, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Avatar className="w-20 h-20 mx-auto mb-4 bg-[#003366]">
                  <AvatarFallback className="text-white text-xl">{organizer.initials}</AvatarFallback>
                </Avatar>
                <div className="inline-block bg-red-600 text-white px-3 py-1 rounded-full text-xs mb-3">
                  {organizer.role}
                </div>
                <h3 className="font-bold text-lg text-[#003366]">{organizer.name}</h3>
                <p className="text-gray-600 text-sm mt-2">{organizer.position}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
