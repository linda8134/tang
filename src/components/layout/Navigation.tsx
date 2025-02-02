import { Link } from 'react-router-dom';
import Button from '../shared/Button';

const Navigation = () => {
  const navItems = [
    { label: 'Products', href: '/products' },
    { label: 'Developers', href: '/developers' },
    { label: 'About', href: '/about' },
  ];

  return (
    <nav className="hidden md:flex items-center space-x-8">
      {navItems.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          className="text-gray-300 hover:text-white transition-colors"
        >
          {item.label}
        </Link>
      ))}
      <Button variant="primary">Launch App</Button>
    </nav>
  );
};

export default Navigation; 