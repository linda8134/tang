import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { FluidBg } from 'color4bg.js';
import seedrandom from 'seedrandom';

// 添加全局声明
declare global {
  interface Window {
    Math: {
      seedrandom: typeof seedrandom;
    } & Math;
  }
}

// 添加 seedrandom 到全局 Math 对象
window.Math.seedrandom = seedrandom;

const Hero = () => {

  useEffect(() => {
    const dom = document.getElementById('box');
    if(!dom){
      return 
    }

    try {
      const colorbg = new FluidBg({
        dom: 'box',
        colors: ["#9333ea","#4B0082","#9333ea","#4B0082","#9333ea","#4B0082"],
        loop: true
      });

      const handleResize = () => {
        try {
          colorbg.resize();
        } catch (error) {
          console.error('Error resizing:', error);
        }
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        try {
          if (typeof colorbg.destroy === 'function') {
            colorbg.destroy();
          }
        } catch (error) {
          console.error('Error destroying:', error);
        }
      };
    } catch (error) {
      console.error('Error initializing FluidBg:', error);
    }
  }, [document.getElementById('box')]);

  return (
    <section 
      className="min-h-screen relative" 
      id="box" 
    >
      <div className="min-h-screen relative overflow-hidden flex justify-center items-center">
        <div className="container mx-auto text-center relative z-10 pt-32">
          <motion.h1 
            className="text-[6rem] md:text-[6rem] font-bold"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            The Promised Land for <br/> AI Agents
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
            <motion.button 
              className="btn-primary bg-white text-black hover:bg-white/80"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Read the Whitepaper
            </motion.button>
            <motion.button 
              className="px-6 py-3 border border-gray-600 rounded-lg hover:border-gray-400 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Our Community
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 