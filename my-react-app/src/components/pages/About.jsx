import React from 'react';
import Founder1 from '../../assets/Founder1.png';
import Founder2 from '../../assets/Founder2.png';
import Founder3 from '../../assets/Founder3.png';
import { motion } from 'framer-motion';
import { User, Briefcase, Star } from 'lucide-react'; // Import lucide icons

const cardAnimation = {
  initial: { opacity: 0, scale: 1 },
  animate: { opacity: 1, scale: 1 },
  transition: { delay: 0.4, duration: 1 },
  whileHover: { scale: 1.10 }
};

const About = () => {
  return (
    <motion.div className="m-4 p-6 max-w-6xl mx-auto border rounded-xl shadow-xl bg-gradient-to-b from-red-100 via-red-200 to-red-400 mb-8">
      <p className="text-lg text-gray-700 mb-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam minima eum, unde culpa aspernatur ab
        asperiores amet saepe in accusantium ullam libero praesentium repellat, provident nobis? Atque ipsum possimus
        adipisci est. Dolor sunt doloremque quas iure adipisci quaerat aspernatur mollitia eius expedita, laudantium
        neque tempore soluta unde obcaecati earum a praesentium autem temporibus cum illum rerum, fugit ducimus. Facilis
        accusamus nobis a enim iusto vero fugiat, consequuntur velit debitis quibusdam doloremque labore dicta magni
        maiores sapiente error nisi necessitatibus laborum rem praesentium quasi, libero rerum hic. Molestiae reiciendis
        magnam placeat ipsum velit ullam! Maiores harum corrupti nam perspiciatis est aliquam.
      </p>

      <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          {...cardAnimation}
          className="bg-white border border-gray-300 shadow-lg rounded-lg p-4 text-center"
        >
          <img
            src={Founder1}
            alt="Richard Gupta"
            className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
          />
          <h3 className="text-xl font-semibold flex items-center justify-center gap-2">
            <User size={20} /> Richard Gupta
          </h3>
          <p className="text-gray-600 flex items-center justify-center gap-2 mt-1">
            <Briefcase size={16} /> Co-Founder
          </p>
          <p className="text-sm mt-2">
            Richard Gupta is a visionary leader with a passion for building scalable solutions.
          </p>
        </motion.div>

        <motion.div
          {...cardAnimation}
          className="bg-white border border-gray-300 shadow-lg rounded-lg p-4 text-center"
        >
          <img
            src={Founder2}
            alt="Alisa Belz"
            className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
          />
          <h3 className="text-xl font-semibold flex items-center justify-center gap-2">
            <User size={20} /> Alisa Belz
          </h3>
          <p className="text-gray-600 flex items-center justify-center gap-2 mt-1">
            <Briefcase size={16} /> Co-Founder
          </p>
          <p className="text-sm mt-2">
            Alisa Belz brings innovation and creativity, pushing the boundaries of design.
          </p>
        </motion.div>

        <motion.div
          {...cardAnimation}
          className="bg-white border border-gray-300 shadow-lg rounded-lg p-4 text-center"
        >
          <img
            src={Founder3}
            alt="Arinz Kingson"
            className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
          />
          <h3 className="text-xl font-semibold flex items-center justify-center gap-2">
            <User size={20} /> Arinz Kingson
          </h3>
          <p className="text-gray-600 flex items-center justify-center gap-2 mt-1">
            <Briefcase size={16} /> Co-Founder
          </p>
          <p className="text-sm mt-2">
            Arinz Kingson focuses on user experience and strategic product direction.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
