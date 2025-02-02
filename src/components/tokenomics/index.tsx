import {motion} from 'framer-motion';
import Container from '../shared/Container';
import Chart from './chart';

const Index = () => {
  return (
    <section className="min-h-screen py-20">
      <Chart />
      <Container className='space-y-8 max-w-[1200px]'>
        <div className='space-y-6'>
          <div className="space-y-2">
            <motion.h1 
              className="text-5xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent leading-[2]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
            Utility
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              EAST serves multiple critical functions within the EastWorld ecosystem
            </motion.div>
          </div>
          <motion.div 
            className='grid grid-cols-3 gap-4'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className='space-y-4 bg-white/10 rounded-lg p-5'>
              <motion.h1 
                className="text-2xl md:text-xl font-bold leading-[2]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Transaction Fees
              </motion.h1>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.8, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Used to pay for operations performed by AI ODAs and Action ODAs. Initially, these fees are waived to encourage early adoption.
              </motion.div>
            </div>
            <div className='space-y-4 bg-white/10 rounded-lg p-5'>
              <motion.h1 
                className="text-2xl md:text-xl font-bold leading-[2]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
              Governance
              </motion.h1>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.8, y: 0 }}
                transition={{ duration: 0.8 }}
              >
              EAST holders can participate in governance decisions, including voting on proposals related to tokenomics, inflation rules, and airdrop criteria.
            </motion.div>
            </div>
            <div className='space-y-4 bg-white/10 rounded-lg p-5'>
              <motion.h1 
                className="text-2xl md:text-xl font-bold leading-[2]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Incentives for Participation
              </motion.h1>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.8, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                EAST rewards users for deploying AI agents, contributing to development, and engaging in community activities, fostering a vibrant and active ecosystem.
              </motion.div>
            </div>
          </motion.div>
        </div>
        <div className='space-y-6'>
          <div className="space-y-2">
            <motion.h1 
              className="text-5xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent leading-[2]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
            EAST AI Treasury
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              The Treasury AI agent will manage token emissions and inflation rates, ensuring the long-term sustainability of the token economy. Rules governing these processes will be established through community governance, allowing EAST holders to have a direct say in the tokenomics evolution.
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Index; 