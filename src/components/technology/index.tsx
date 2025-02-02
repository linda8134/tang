import {motion} from 'framer-motion';
import Container from '../shared/Container';

const Index = () => {
  return (
    <section className="min-h-screen py-20">
      <Container className='space-y-12 max-w-[1200px]'>
        <div className="space-y-6">
          <motion.h1 
            className="text-5xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent leading-[2] width-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
          Architecture Overview
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.8, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            EastWorld's architecture is built on the robust zkWASM Omnibus Stack of the EightFish blockchain, comprising several key components:
          </motion.div>
          <motion.div className='grid grid-cols-3 gap-6'>
            <div className='space-y-4 bg-white/10 rounded-lg p-5'>
              <motion.h1 
                  className="text-2xl md:text-xl leading-[2]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                VintageVM
              </motion.h1>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.8, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                A blockchain-optimized WASM runtime built on the Spin framework, enabling decentralized execution of complex business logic with high performance.
              </motion.div>
            </div>
            <div className='space-y-4 bg-white/10 rounded-lg p-5'>
              <motion.h1 
                  className="text-2xl md:text-xl leading-[2]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                VintageZK
              </motion.h1>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.8, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Integrates zero-knowledge proofs to ensure secure and verifiable computations, enhancing privacy and trustworthiness of AI operations.
              </motion.div>
            </div>
            <div className='space-y-4 bg-white/10 rounded-lg p-5'>
              <motion.h1 
                  className="text-2xl md:text-xl leading-[2]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                VintageDB
              </motion.h1>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.8, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                A decentralized relational database built on PostgreSQL, providing fast and scalable data indexing and querying capabilities essential for AI agents.
              </motion.div>
            </div>
          </motion.div>
        </div>
        <motion.div 
          className='space-y-6'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-2">
            <motion.h1 
              className="text-5xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent leading-[2]"
              
            >
            How It Works
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Steps for Deploying AI Agents as ODAs
            </motion.div>
          </div>
          <div className=' grid grid-cols-2 gap-8'>
            <div className='space-y-5 bg-white/10 p-6 rounded-lg'>
              <motion.h1 
                className="text-2xl md:text-xl font-bold leading-[2]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Step1: Development
              </motion.h1>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.8, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Utilize the Press framework to build your AI agent using familiar programming languages like Python, JavaScript, Rust, or C++.
              </motion.div>
            </div>
            <div className='space-y-5 bg-white/10 p-6 rounded-lg'>
              <motion.h1 
                className="text-2xl md:text-xl font-bold leading-[2]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
              Step2: Deployment
              </motion.h1>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.8, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Deploy the AI agent as an Open Data Application (ODA) on the EightFish blockchain using Press, ensuring decentralized ownership and execution.
              </motion.div>
            </div>
            <div className='space-y-5 bg-white/10 p-6 rounded-lg'>
              <motion.h1 
                className="text-2xl md:text-xl font-bold leading-[2]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Step3: Integration
              </motion.h1>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.8, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Leverage Arsenal to integrate specialized Action ODAs, enabling your AI agent to interact with Web2 services and physical systems seamlessly.
              </motion.div>
            </div>
            <div className='space-y-5 bg-white/10 p-6 rounded-lg'>
              <motion.h1 
                className="text-2xl md:text-xl font-bold leading-[2]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Step4: Orchestration
              </motion.h1>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.8, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Use Forge to manage and chain workflows, coordinating actions between multiple AI agents and Action ODAs for complex task execution.
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Index; 