
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#0B1528] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3">
        {/* Church Information */}
        <div>
          <h2 className="text-2xl font-bold">
            Athens <span className="text-amber-400">Nepali Church</span>
          </h2>
          <p className="mt-5 max-w-sm leading-7 text-gray-400">
            A place to worship, connect, and grow together in Christ.
            We welcome everyone to join our church family.
          </p>
          <p className="mt-5 text-sm text-gray-400">
            Patision 11, Athens, Greece
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-5 text-lg font-bold text-amber-400">
            Quick Links
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              ["Home", "/"],
              ["About", "/about"],
              ["Ministries", "/ministries"],
              ["Events", "/events"],
              ["Gallery", "/gallery"],
              ["Sermons", "/sermons"],
              ["Contact", "/contact"],
            ].map(([name, path]) => (
              <Link
                key={path}
                to={path}
                className="text-gray-400 transition hover:text-amber-400"
              >
                {name}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-5 text-lg font-bold text-amber-400">
            Connect With Us
          </h3>

          <p className="mb-3 text-gray-400">
            Sagar Sunar
            <br />
            <a href="tel:+306949651076" className="hover:text-amber-400">
              +30 694 965 1076
            </a>
          </p>

          <p className="mb-5 text-gray-400">
            Joseph Tiruwa
            <br />
            <a href="tel:+306972366505" className="hover:text-amber-400">
              +30 697 236 6505
            </a>
          </p>

          <a
            href="https://www.tiktok.com/@athens.nepali.chu"
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-lg bg-amber-500 px-5 py-2.5 font-semibold text-[#101D35] transition hover:bg-amber-400"
          >
            Follow Us on TikTok
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 px-6 py-6 text-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Athens Nepali Church. All rights reserved.
        </p>
        <p className="mt-2 text-xs text-gray-500">
          Built with faith, love, and fellowship.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
