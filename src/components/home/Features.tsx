import React from 'react';
import Container from '../shared/Container';
import { motion } from 'framer-motion';


const Features = () => {
  return (
    <section className="py-20">
      <Container className="grid grid-cols-3 gap-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className='space-y-4'
        >
          <h1  className="text-2xl md:text-3xl font-bold leading-[2]">
            The Promised Land for AI Agents
          </h1>
          <div className='opacity-80'>
            Deploy your AI agents in a decentralized environment, ensuring no single entity controls the intelligence or data.
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className='space-y-4'
        >
          <h1  className="text-2xl md:text-3xl font-bold leading-[2]">
          Seamless Web2 and Physical Integration
          </h1>
          <div className='opacity-80'>
            Enable your AI agents to interact effortlessly with existing Web2 services and physical systems through specialized Action ODAs.
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1}}
          className='space-y-4'
        >
          <h1  className="text-2xl md:text-3xl font-bold leading-[2]">
          Scalable Blockchain Performance
          </h1>
          <div className='opacity-80'>
          Benefit from the high-performance infrastructure of the EightFish blockchain, ensuring your AI applications operate with Web2-level efficiency and scalability.
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Features; 