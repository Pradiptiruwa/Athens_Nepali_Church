
import churchLogo from "../assets/church-logo.png";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Ministries", path: "/ministries" },
    { name: "Events", path: "/events" },
    { name: "Gallery", path: "/gallery" },
    { name: "Sermons", path: "/sermons" },
    { name: "Contact", path: "/contact" },
  ];

  const linkStyle = ({ isActive }) =>
    `block py-2 font-medium transition ${
      isActive
        ? "text-amber-500"
        : "text-gray-700 hover:text-amber-500"
    }`;

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo and Church Name */}
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-3"
        >
          <img
  src={churchLogo}
  alt="Athens Nepali Church Logo"
  className="h-12 w-12 rounded-full object-contain"
/>

          <div>
            <h2 className="text-lg font-bold leading-tight text-[#101D35] md:text-xl">
              Athens Nepali Church
            </h2>
            <p className="text-xs tracking-wider text-gray-500">
              WORSHIP • CONNECT • GROW
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={linkStyle}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg p-2 text-2xl text-[#101D35] hover:bg-gray-100 lg:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-gray-100 bg-white px-6 py-4 shadow-lg lg:hidden">
          <div className="flex flex-col">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                onClick={() => setMenuOpen(false)}
                className={linkStyle}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
