import { motion } from 'framer-motion';
import styled from 'styled-components'

export default function Index(){
  return (
    <section className="pt-20 flex items-center">
      <div className="container mx-auto text-center space-y-6">
        <motion.h1 
          className="text-5xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-[2]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          whileInView={{ opacity: 1 }}
        >
        EastWorld vs Other Platforms
        </motion.h1>
        
        <StyledTable>
          <thead>
            <tr>
              <td>Feature</td>
              <td>EastWorld(Decentralized)</td>
              <td>Centeralized AI Platforms</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Transparency</td>
              <td>High - Blockchain-based</td>
              <td>Low - proprietary systems</td>
            </tr>
            <tr>
              <td>Security</td>
              <td>Enhanced via decentralization</td>
              <td>Vulnerable to breaches</td>
            </tr>
            <tr>
              <td>Data ownership</td>
              <td>User-controlled</td>
              <td>Controlled by entity</td>
            </tr>
            <tr>
              <td>Scalability</td>
              <td>High - Leveraging EightFish</td>
              <td>Limited by central infrastructure</td>
            </tr>
            <tr>
              <td>Innovation</td>
              <td>Fostered throught distributed</td>
              <td>Stifled by monopolistic practices</td>
            </tr>
          </tbody>
        </StyledTable>
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
