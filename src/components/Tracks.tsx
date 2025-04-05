
import React from "react";

const Tracks = () => {
  const tracks = [
    {
      title: "Artificial Intelligence & Machine Learning in Biomedical Applications",
      items: [
        "AI in diagnostic systems",
        "Machine learning algorithms for biomedical data",
        "Neural networks in healthcare applications"
      ]
    },
    {
      title: "Deep Learning for Medical Imaging and Diagnosis",
      items: [
        "Computer vision for medical image analysis",
        "Image segmentation using deep learning",
        "Automated diagnosis systems"
      ]
    },
    {
      title: "AI in Non-Invasive Disease Detection and Monitoring",
      items: [
        "Remote patient monitoring",
        "Early disease detection",
        "Non-invasive diagnostic techniques"
      ]
    },
    {
      title: "Biomedical Signal Processing & AI Integration",
      items: [
        "ECG/EEG signal analysis",
        "Real-time signal processing",
        "Pattern recognition in biosignals"
      ]
    },
    {
      title: "AI-Based Wearable Health Technologies",
      items: [
        "Smart health monitoring devices",
        "Wearable biosensors",
        "Real-time health analytics"
      ]
    },
    {
      title: "Computer Vision for Healthcare Applications",
      items: [
        "Medical image analysis",
        "Surgical guidance systems",
        "Automated screening tools"
      ]
    },
    {
      title: "AI-Enabled Personalized Medicine and Drug Discovery",
      items: [
        "Patient-specific treatment approaches",
        "Drug repurposing using AI",
        "Predictive analytics in therapeutics"
      ]
    },
    {
      title: "Non-Invasive Biosensors and Smart Monitoring Systems",
      items: [
        "Non-contact vital sign monitoring",
        "Smart biosensor design",
        "IoT integration in healthcare"
      ]
    }
  ];

  return (
    <section id="tracks" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#003366]">
          Conference <span className="text-red-600">Tracks</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tracks.map((track, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold mb-4 text-[#003366]">{track.title}</h3>
              <ul className="list-disc pl-5 text-gray-700">
                {track.items.map((item, idx) => (
                  <li key={idx} className="mb-1">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-[#003366] text-white p-6 rounded-lg text-center">
          <h3 className="text-xl font-bold mb-4">CALL FOR PAPERS</h3>
          <p className="mb-4">
            We invite original research papers, case studies, and reviews on the following topics but not limited to the Conference Tracks.
          </p>
          <p className="text-sm">
            All accepted and presented papers will be submitted to conference proceedings with ISBN number.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Tracks;
