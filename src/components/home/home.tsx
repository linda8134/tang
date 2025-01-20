import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen pt-20 flex items-center">
      <div className="container mx-auto text-center">
        <motion.h1 
          className="text-5xl md:text-8xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-[2]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
         The Promised Land for AI Agents
        </motion.h1>
        
        <motion.p 
          className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Deploy Large Action Models as Open Data Applications
        </motion.p>
        
        <motion.div 
          className="mt-10 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button className="btn-primary">
          Read the Whitepaper
          </button>
          <button className="px-6 py-3 border border-gray-600 rounded-lg hover:border-gray-400 transition-colors">
          Join Our Community
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 