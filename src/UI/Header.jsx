import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Blogs', path: '/blogs' },
  { name: 'News & Events', path: '/newsandevents' },
  { name: 'Discover', path: '/discover' },
  { name: 'About us', path: '/about' },
];

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-[url('noise-bg2.webp')] flex items-center font-montserrat justify-between px-6 md:px-12 py-3 shadow-md bg-white fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-semibold text-[#FF5C5C]">Samejesté</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-sm">
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

        {/* Desktop Contact Button */}
        <div className="hidden md:block">
          <NavLink
            to="/contact"
            className="bg-[#FF5C5C] text-white px-4 py-2 rounded-full text-sm cursor-pointer hover:bg-[#e74d4d] transition"
          >
            Contact us
          </NavLink>
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(prev => !prev)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="bg-[url('noise-bg2.webp')] md:hidden fixed top-16 left-0 right-0 bg-white shadow-md z-40 px-6 py-4 space-y-2 font-montserrat">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `group flex items-center gap-2 px-4 py-2 rounded-md text-sm transition 
                ${isActive ? 'bg-[#f7eeee] text-[#FF5C5C]' : 'text-gray-700 hover:bg-[#f7eeee] hover:text-[#FF5C5C]'}`
              }
            >
              <span
                className={`w-2 h-2 bg-[#FF5C5C] rounded-full transition duration-300
                  ${window.location.pathname === link.path ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
              ></span>
              <span>{link.name}</span>
            </NavLink>
          ))}

          <NavLink
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block bg-[#FF5C5C] text-white text-center px-4 py-2 rounded-full text-sm hover:bg-[#e74d4d] transition"
          >
            Contact us
          </NavLink>
        </div>
      )}
    </>
  );
}

export default Header;
