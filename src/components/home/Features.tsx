import { useRef } from 'react';
import Container from '../shared/Container';
import { motion, useInView } from 'framer-motion';

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div  
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="py-24 space-y-12"
    >
      <motion.h1 
        className="text-5xl text-center md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-[2]"
        variants={itemVariants}
      >
        Features
      </motion.h1>
      <Container className="grid grid-cols-3 gap-8">
        {[
          {
            title: "The Promised Land for AI Agents",
            description: "Deploy your AI agents in a decentralized environment, ensuring no single entity controls the intelligence or data."
          },
          {
            title: "Seamless Web2 and Physical Integration",
            description: "Enable your AI agents to interact effortlessly with existing Web2 services and physical systems through specialized Action ODAs."
          },
          {
            title: "Scalable Blockchain Performance",
            description: "Benefit from the high-performance infrastructure of the EightFish blockchain, ensuring your AI applications operate with Web2-level efficiency and scalability."
          }
        ].map((feature, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            className='space-y-4 bg-white/10 rounded-lg p-5 hover:bg-white/20 transition-colors duration-300'
          >
            <h1 className="text-2xl md:text-3xl font-bold leading-[2]">
              {feature.title}
            </h1>
            <div className='opacity-80'>
              {feature.description}
            </div>
          </motion.div>
        ))}
      </Container>
    </motion.div>
  );
};

export default Features; 