import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaUserShield, FaRegFileAlt, FaInfoCircle } from 'react-icons/fa';

const services = [
  {
    title: "Certificate Application",
    description: "Easily apply for official government certificates online with a secure process.",
    icon: <FaCertificate size={40} className="text-blue-600" />,
    link: "/services/certificate-application"
  },
  {
    title: "Verification Services",
    description: "Ensure the authenticity of certificates with our verification services.",
    icon: <FaUserShield size={40} className="text-green-600" />,
    link: "/services/verification"
  },
  {
    title: "Document Services",
    description: "Get access to additional document-related services with government authentication.",
    icon: <FaRegFileAlt size={40} className="text-yellow-600" />,
    link: "/services/document-services"
  },
  {
    title: "Information & Support",
    description: "Contact us for guidance and support on any certification needs.",
    icon: <FaInfoCircle size={40} className="text-red-600" />,
    link: "/services/information-support"
  },
];

function ServicesPage() {
  return (
    <section className=" py-16 bg-gray-50 text-gray-800">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Page Header */}
        <motion.h1
          className="text-4xl font-bold text-center text-gray-800 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Services
        </motion.h1>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              {/* Service Icon */}
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              
              {/* Service Title */}
              <h3 className="text-2xl font-semibold text-center mb-2">{service.title}</h3>
              
              {/* Service Description */}
              <p className="text-gray-600 text-center mb-6">
                {service.description}
              </p>
              
              {/* Learn More Button */}
              <div className="text-center">
                <a
                  href={service.link}
                  className="text-blue-600 hover:underline font-medium"
                >
                  Learn More &rarr;
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesPage;
