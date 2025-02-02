import React from 'react';
import Header from './Header';
import Footer from './Footer';
import {motion} from 'framer-motion';
import GradientLight from '../shared/GradientLight'
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation()

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col relative"
    >
      <Header />
      <main className="flex-grow relative">
        {children}
        {
          location.pathname === '/' ? null :(
            <>
              <GradientLight 
                className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2"
                color="rgba(56, 189, 248, 0.5)"
              />
              <GradientLight 
                className="top-0 right-0 translate-x-1/2 -translate-y-1/2"
                color="rgba(168, 85, 247, 0.5)"
                delay={2}
              />
            </>
          )
        }
        <GradientLight 
          className="bottom-0 left-1/4 -translate-x-1/2 translate-y-1/2"
          color="rgba(14, 165, 233, 0.5)"
          delay={4}
        />
        <GradientLight 
          className="bottom-0 right-1/4 translate-x-1/2 translate-y-1/2"
          color="rgba(139, 92, 246, 0.5)"
          delay={6}
        />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Layout; 
