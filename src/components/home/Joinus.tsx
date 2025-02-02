import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDiscord, faXTwitter, faTelegram, faGithub} from '@fortawesome/free-brands-svg-icons'

export default function Index(){
  return (
    <section className="py-24 flex items-center">
      <div className="container mx-auto text-center space-y-6">
        <motion.h1 
          className="text-5xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-[2]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
        Join the EastWorld Community
        </motion.h1>
        
        <motion.p 
          className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Stay connected and be a part of our growing community. Engage with fellow developers, AI enthusiasts, and stakeholders through our platforms
        </motion.p>
        <motion.div
          className="mt-6 text-xl max-w-2xl mx-auto space-x-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <FontAwesomeIcon icon={faXTwitter} size='xl'/>
          <FontAwesomeIcon icon={faGithub} size='xl'/>
          <FontAwesomeIcon icon={faTelegram} size='xl'/>
          <FontAwesomeIcon icon={faDiscord} size='xl'/>
        </motion.div>
      </div>
    </section>
  );
};