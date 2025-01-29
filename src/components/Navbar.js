import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-brown-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white">The Lost Sip</Link>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/menu" className="text-white hover:text-gray-300">Menu</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 