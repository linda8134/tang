import {motion} from 'framer-motion';
import Container from '../shared/Container';

const Products = () => {
  return (
    <section className="min-h-screen pt-20">
      <Container className='space-y-12 max-w-[1200px]'>
        <div className="space-y-3">
          <motion.h1 
            className="text-5xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-[2]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
          About
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            We are creating an ecosystem for action-focused AI Agents, where no single entity monopolizes intelligence or data.
          </motion.div>
        </div>
        <div className='space-y-4'>
          <motion.h1 
              className="text-4xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-[2]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
            Founder
          </motion.h1>

          <motion.h5 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Daogang Tang (Mike Tang)
          </motion.h5>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Daogang Tang, also known as Mike Tang, is a Rust enthusiast based in China and the co-founder of the Rust Chinese Community (RustCC). As an advocate of the Substrate framework in China, Mike brings over 15 years of experience in coding and architecture. He is the ex-cofounder of Octopus Network, where he was in charge of developer community building. Mike has conducted extensive research on Substrate and Web3, publishing numerous articles in public media. He has been dedicated to promoting the mass adoption of Rust, Substrate, and Web3 technologies.
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Products; 