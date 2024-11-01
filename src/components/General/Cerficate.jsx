import React from 'react';

function Certificate() {
  const certificates = [
    { name: 'Birth Certificate', description: 'Official record of birth for residents.' },
    { name: 'Marriage Certificate', description: 'Legal certificate for marriages in Lagos State.' },
    { name: 'Business Registration', description: 'Certificate for registered businesses.' },
    { name: 'Indigene Certificate', description: 'Proof of Lagos State residency and indigene status.' },
    { name: 'Death Certificate', description: 'Official record of death for residents.' },
    { name: 'Property Ownership Certificate', description: 'Certificate for recognized property owners in the state.' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Lagos State E-Certificate Portal</h1>
      <p className="text-center mb-6 text-gray-600">
        Select the type of certificate you need and apply online.
      </p>
      <div className="container mx-auto px-4">
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center transition-transform transform hover:scale-105"
            >
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">{cert.name}</h2>
              <p className="text-gray-600 mb-4">{cert.description}</p>
              <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Certificate;
