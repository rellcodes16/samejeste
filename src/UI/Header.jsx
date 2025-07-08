import { Menu } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Blogs', path: '/blogs' },
  { name: 'News & Events', path: '/news-events' },
  { name: 'Discover', path: '/discover' },
  { name: 'About us', path: '/about' },
];

function Header({ toggleSidebar }) {
  return (
    <header className="flex items-center font-montserrat justify-between px-12 py-3 shadow-md bg-white fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center space-x-2">
        <span className="text-2xl font-semibold text-[#FF5C5C]">Samejesté</span>
      </div>

      <nav className="hidden md:flex space-x-10 text-sm">
        {navLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className={({ isActive }) =>
              `group relative flex items-center space-x-1 px-3 py-1 rounded-full transition duration-200
              ${isActive ? 'bg-[#f7eeee] text-[#FF5C5C]' : 'text-gray-700 hover:text-[#FF5C5C] hover:bg-[#f7eeee]'}`
            }
          >
            <span
              className={`w-1.5 h-1.5 bg-[#FF5C5C] rounded-full transition duration-300
                ${window.location.pathname === link.path ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
            ></span>
            <span>{link.name}</span>
          </NavLink>
        ))}
      </nav>

      <div className="hidden md:block">
        <NavLink
          to="/contact"
          className="bg-[#FF5C5C] text-white px-4 py-2 rounded-full text-sm cursor-pointer hover:bg-[#e74d4d] transition"
        >
          Contact us
        </NavLink>
      </div>

      <button
        className="md:hidden text-gray-700"
        onClick={toggleSidebar}
      >
        <Menu size={24} />
      </button>
    </header>
  );
}

export default Header;
