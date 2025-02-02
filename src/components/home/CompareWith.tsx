import { motion, useInView } from 'framer-motion';
import styled from 'styled-components'
import { useRef } from 'react';

export default function Index(){
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const tableVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const rowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section ref={ref} className="py-24 flex items-center">
      <div className="container mx-auto text-center space-y-6">
        <motion.h1 
          className="text-5xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-[2]"
          variants={tableVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
        EastWorld vs Other Platforms
        </motion.h1>
        
        <motion.div
          variants={tableVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <StyledTable>
            <thead>
              <motion.tr variants={rowVariants}>
                <td>Feature</td>
                <td>EastWorld(Decentralized)</td>
                <td>Centeralized AI Platforms</td>
              </motion.tr>
            </thead>
            <tbody>
              {[
                {
                  feature: "Transparency",
                  eastworld: "High - Blockchain-based",
                  others: "Low - proprietary systems"
                },
                {
                  feature: "Security",
                  eastworld: "Enhanced via decentralization",
                  others: "Vulnerable to breaches"
                },
                {
                  feature: "Data ownership",
                  eastworld: "User-controlled",
                  others: "Controlled by entity"
                },
                {
                  feature: "Scalability",
                  eastworld: "High - Leveraging EightFish",
                  others: "Limited by central infrastructure"
                },
                {
                  feature: "Innovation",
                  eastworld: "Fostered throught distributed",
                  others: "Stifled by monopolistic practices"
                }
              ].map((row, index) => (
                <motion.tr key={index} variants={rowVariants}>
                  <td>{row.feature}</td>
                  <td>{row.eastworld}</td>
                  <td>{row.others}</td>
                </motion.tr>
              ))}
            </tbody>
          </StyledTable>
        </motion.div>
      </div>
    </section>
  );
};

const StyledTable = styled('table')`
  width: 100%;
  border-color: rgba(255,255,255, 0.2);
  border-width: 1px 0 0 1px;
  border-radius: 10px;
  thead{
    border-radius: 10px;
  }
  td{
    text-align: left;
    padding-left: 8px;
    padding: 8px;
    font-weight: 400;
    width: 33.3%;
    border-color: rgba(255,255,255, 0.2);
    border-width: 0px 1px 1px 0px;
    &:first-of-type{
      font-weight: 800;
    }
  }
`
