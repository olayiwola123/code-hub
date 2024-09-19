// // import React from 'react';
// // import { motion } from 'framer-motion';

// // import johnDoeImg from '../../assets/founder.jpg';
// // import janeSmithImg from '../../assets/founder.jpg';
// // import markJohnsonImg from '../../assets/founder.jpg';
// // import emilyDavisImg from '../../assets/founder.jpg';

// // const teamMembers = [
// //   {
// //     name: 'Mr Ibrahim',
// //     role: 'CEO & Founder',
// //     image: johnDoeImg,
// //     description: 'With over 15 years of experience, John leads Code Hub with exceptional vision.',
// //   },
// //   {
// //     name: 'Jane Smith',
// //     role: 'Lead Developer',
// //     image: janeSmithImg,
// //     description: 'Jane is an expert in full-stack development and ensures smooth project delivery.',
// //   },
// //   {
// //     name: 'Mark Johnson',
// //     role: 'UI/UX Designer',
// //     image: markJohnsonImg,
// //     description: 'Mark creates stunning user interfaces and seamless user experiences.',
// //   },
// //   {
// //     name: 'Emily Davis',
// //     role: 'Project Manager',
// //     image: emilyDavisImg,
// //     description: 'Emily manages projects efficiently, ensuring quality and timely delivery.',
// //   },
// // ];

// // function Team() {
// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-12 px-4">
// //       <div className="max-w-7xl mx-auto">
// //         <h2 className="text-5xl font-extrabold text-center text-gray-800 mb-12">Meet Our Team</h2>
        
// //         <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
// //           {teamMembers.map((member, index) => (
// //             <motion.div
// //               key={index}
// //               className="relative bg-white rounded-lg shadow-lg p-6 overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
// //               initial={{ opacity: 0, y: 50 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeOut' }}
// //             >
// //               {/* Border hover effect */}
// //               <motion.div
// //                 className="absolute inset-0 border-4 border-transparent rounded-lg"
// //                 whileHover={{ borderColor: '#4F46E5' }}
// //                 transition={{ duration: 0.4 }}
// //               />
              
// //               <motion.img
// //                 src={member.image}
// //                 alt={member.name}
// //                 className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-indigo-600 p-1"
// //                 whileHover={{ rotate: 10, scale: 1.05 }}
// //                 transition={{ duration: 0.4 }}
// //               />
              
// //               <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
// //               <p className="text-indigo-500 font-medium mb-2">{member.role}</p>
// //               <p className="text-gray-600 text-sm">{member.description}</p>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Team;
// import React from 'react';
// import { motion } from 'framer-motion';

// // Importing local images
// import johnDoeImg from '../../assets/founder.jpg';
// import janeSmithImg from '../../assets/founder.jpg';
// import markJohnsonImg from '../../assets/founder.jpg';
// import emilyDavisImg from '../../assets/founder.jpg';

// // Sample team member data
// const teamMembers = [
//   {
//     name: 'Mr Ibrahim',
//     role: 'CEO & Founder',
//     image: johnDoeImg,
//     description: 'With over 15 years of experience, John leads Code Hub with exceptional vision.',
//   },
//   {
//     name: 'Jane Smith',
//     role: 'Lead Developer',
//     image: janeSmithImg,
//     description: 'Jane is an expert in full-stack development and ensures smooth project delivery.',
//   },
//   {
//     name: 'Mark Johnson',
//     role: 'UI/UX Designer',
//     image: markJohnsonImg,
//     description: 'Mark creates stunning user interfaces and seamless user experiences.',
//   },
//   {
//     name: 'Emily Davis',
//     role: 'Project Manager',
//     image: emilyDavisImg,
//     description: 'Emily manages projects efficiently, ensuring quality and timely delivery.',
//   },
// ];

// function Team() {
//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-4">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-5xl font-bold text-center text-gray-900 mb-12">Meet Our Team</h2>
        
//         <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//           {teamMembers.map((member, index) => (
//             <motion.div
//               key={index}
//               className="relative bg-white rounded-lg shadow-lg p-6 overflow-hidden group"
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeOut' }}
//             >
//               {/* Border hover effect */}
//               <motion.div
//                 className="absolute inset-0 border-4 border-transparent rounded-lg transition-transform transform group-hover:border-blue-600 group-hover:scale-110"
//                 transition={{ duration: 0.4 }}
//               />
              
//               <motion.img
//                 src={member.image}
//                 alt={member.name}
//                 className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-500 p-1 transition-transform transform group-hover:scale-110"
//                 transition={{ duration: 0.4 }}
//               />
              
//               <h3 className="text-2xl font-bold text-gray-800 text-center">{member.name}</h3>
//               <p className="text-blue-600 font-semibold text-center mb-2">{member.role}</p>
//               <p className="text-gray-700 text-center">{member.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Team;
import React from 'react';
import { motion } from 'framer-motion';

// Importing local images
import johnDoeImg from '../../assets/founder.jpg';
import janeSmithImg from '../../assets/founder.jpg';
import markJohnsonImg from '../../assets/founder.jpg';
import emilyDavisImg from '../../assets/founder.jpg';

// Sample team member data
const teamMembers = [
  {
    name: 'Mr Ibrahim',
    role: 'CEO & Founder',
    image: johnDoeImg,
    description: 'With over 15 years of experience, Mr Ibrahim leads Code Hub with exceptional vision.',
  },
  {
    name: 'Jane Smith',
    role: 'Lead Developer',
    image: janeSmithImg,
    description: 'Jane is an expert in full-stack development and ensures smooth project delivery.',
  },
  {
    name: 'Mark Johnson',
    role: 'UI/UX Designer',
    image: markJohnsonImg,
    description: 'Mark creates stunning user interfaces and seamless user experiences.',
  },
  {
    name: 'Emily Davis',
    role: 'Project Manager',
    image: emilyDavisImg,
    description: 'Emily manages projects efficiently, ensuring quality and timely delivery.',
  },
];

function Team() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-gray-900 mb-12">Meet Our Team</h2>

        <div className="space-y-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="flex flex-col lg:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden p-6 transform transition-transform duration-500 hover:scale-105 hover:shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeOut' }}
            >
              <motion.div
                className="lg:w-1/2 w-full flex justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-full border-4 border-blue-500"
                />
              </motion.div>

              <div className="lg:w-1/2 w-full lg:pl-8 mt-6 lg:mt-0">
                <h3 className="text-3xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-700">{member.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;
