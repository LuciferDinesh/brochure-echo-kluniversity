
import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const Speakers = () => {
  const speakers = [
    {
      name: "Dr. N. Balaji",
      position: "Professor & HOD, Dept. of ECE, JNTUK, Kakinada",
      initials: "NB",
      image: `https://images.unsplash.com/photo-1649972904349-6e44c42644a7`
    },
    {
      name: "Dr. R Sandanalakshmi",
      position: "Associate Professor, Puducherry Technological University, Puducherry",
      initials: "RS",
      image: `https://images.unsplash.com/photo-1488590528505-98d2b5aba04b`
    },
    {
      name: "Dr. A Ravi",
      position: "Associate Professor & HOD, Dept. of ECE, MANU - Central University, Hyderabad",
      initials: "AR",
      image: `https://images.unsplash.com/photo-1518770660439-4636190af475`
    },
    {
      name: "Dr.V.R. Sarma Dhulipala",
      position: "Assistant Professor, Dept. of Physics, ANNA University, BIT Campus, Tiruchirappalli",
      initials: "VS",
      image: `https://images.unsplash.com/photo-1581091226825-a6a2a5aee158`
    }
  ];

  const patrons = [
    {
      name: "Dr ALLURI INDRA KUMAR",
      position: "President, Sir C R Reddy Educational Institutions",
      initials: "AI",
      image: `https://images.unsplash.com/photo-1488590528505-98d2b5aba04b`
    },
    {
      name: "Dr M B S V PRASAD",
      position: "Secretary, Sir C R Reddy Educational Institutions",
      initials: "MP",
      image: `https://images.unsplash.com/photo-1518770660439-4636190af475`
    },
    {
      name: "Sri JASTI MALLIKHARJUNUDU",
      position: "Correspondent, Sir C R Reddy College of Engineering",
      initials: "JM",
      image: `https://images.unsplash.com/photo-1461749280684-dccba630e2f6`
    }
  ];

  const organizers = [
    {
      name: "Dr. K VENKATESWA RAO",
      position: "Principal, Sir C R Reddy College of Engineering",
      role: "CONVENER",
      initials: "KV",
      image: `https://images.unsplash.com/photo-1649972904349-6e44c42644a7`
    },
    {
      name: "Dr. P H S TEJO MURTHY",
      position: "Professor & Head, Dept. of Electronics & Communication Engineering",
      role: "CO-CONVENER",
      initials: "PT",
      image: `https://images.unsplash.com/photo-1581091226825-a6a2a5aee158`
    },
    {
      name: "Dr. MIRANJI KATTA",
      position: "Associate Professor, Dept. of Electronics & Communication Engineering",
      role: "COORDINATOR",
      initials: "MK",
      image: `https://images.unsplash.com/photo-1488590528505-98d2b5aba04b`
    }
  ];

  const renderPeople = (people: Array<{name: string, position: string, initials: string, image?: string, role?: string}>) => {
    return people.map((person, index) => (
      <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
        <CardContent className="p-6 text-center">
          <Avatar className="w-24 h-24 mx-auto mb-4 bg-[#003366]">
            {person.image ? (
              <AvatarImage src={person.image} alt={person.name} className="object-cover" />
            ) : null}
            <AvatarFallback className="text-white text-xl">{person.initials}</AvatarFallback>
          </Avatar>
          {person.role && (
            <div className="inline-block bg-red-600 text-white px-3 py-1 rounded-full text-xs mb-3">
              {person.role}
            </div>
          )}
          <h3 className="font-bold text-lg text-[#003366]">{person.name}</h3>
          <p className="text-gray-600 text-sm mt-2">{person.position}</p>
        </CardContent>
      </Card>
    ));
  };

  return (
    <section id="speakers" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#003366]">
          Keynote <span className="text-red-600">Speakers</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {renderPeople(speakers)}
        </div>
        
        <h2 className="text-3xl font-bold text-center mb-12 text-[#003366]">
          Chief <span className="text-red-600">Patrons</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {renderPeople(patrons)}
        </div>
        
        <h2 className="text-3xl font-bold text-center mb-12 text-[#003366]">
          Conference <span className="text-red-600">Organizers</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {renderPeople(organizers)}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
