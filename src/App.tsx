import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Developers from './components/technology';
import About from './components/about';
import Tokenomics from './components/tokenomics';
import AuroraBackground from './components/shared/AuroraBackground';

function App() {
  return (
    <Router>
      <AuroraBackground />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/developers" element={<Developers />} />
          <Route path="/about" element={<About />} />
          <Route path="/tokenomics" element={<Tokenomics />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App; 