
import { NavLink } from "react-router-dom";

function Navbar() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Ministries", path: "/ministries" },
    { name: "Events", path: "/events" },
    { name: "Gallery", path: "/gallery" },
    { name: "Sermons", path: "/sermons" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Church Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/src/assets/church-logo.png"
            alt="Athens Nepali Church Logo"
            className="w-12 h-12 object-contain"
          />

          <div>
            <h1 className="text-lg font-bold text-slate-900">
              ATHENS NEPALI
            </h1>
            <p className="text-xs tracking-widest text-amber-700">
              CHURCH
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive
                    ? "text-amber-700"
                    : "text-slate-700 hover:text-amber-700"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
