import Home from '../components/home/home';
import Features from '../components/home/Features';
import Partners from '../components/home/CompareWith';
import JoinUs from '../components/home/Joinus'


export default function Index(){
  return (
    <div className="bg-black">
      <Home />
      <Features />
      <Partners />
      <JoinUs />
    </div>
  );
};
