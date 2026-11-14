
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import churchLogo from "../assets/church-logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Ministries", path: "/ministries" },
  { name: "Events", path: "/events" },
  { name: "Gallery", path: "/gallery" },
  { name: "Sermons", path: "/sermons" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-navy shadow-lg shadow-black/10">
      <nav className="container-main flex min-h-[88px] items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-3"
        >
          <img
            src={churchLogo}
            alt="Athens Nepali Church"
            className="h-12 w-12 rounded-full bg-white object-contain p-1"
          />

          <div>
            <h1 className="font-display text-lg font-semibold leading-tight text-white sm:text-xl">
              Athens Nepali
            </h1>
            <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-gold">
              Church
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `relative py-2 text-[13px] font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-gold"
                    : "text-white/75 hover:text-gold"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Visit Us Button */}
        <Link
          to="/contact"
          className="hidden items-center gap-2 rounded-sm bg-gold px-5 py-3 text-xs font-bold uppercase tracking-wider text-navy transition hover:bg-gold-light lg:flex"
        >
          Visit Us
          <ArrowUpRight size={15} />
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="rounded-md p-2 text-white transition hover:bg-white/10 lg:hidden"
        >
          {menuOpen ? <X size={27} /> : <Menu size={27} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-navy px-6 pb-6 pt-3 lg:hidden">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `border-b border-white/10 py-4 text-sm font-medium transition ${
                    isActive
                      ? "text-gold"
                      : "text-white/80 hover:text-gold"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-5 flex items-center justify-center gap-2 rounded-sm bg-gold px-5 py-4 text-sm font-bold uppercase tracking-wider text-navy"
          >
            Visit Us
            <ArrowUpRight size={17} />
          </Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;
