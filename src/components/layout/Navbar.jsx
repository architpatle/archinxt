import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Concepts", path: "/concepts" },
    { name: "Designs", path: "/designs" },
    { name: "About", path: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0F172A]/70 border-b border-white/10">
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex flex-col leading-tight">
          <span className="font-heading text-xl font-bold gradient-text">
            ArchInxT
          </span>
          <span className="text-[10px] text-text-muted hidden sm:block">
            Architecture Of Innovation & Technology
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-text-muted">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="px-4 py-2 rounded-lg bg-primary text-white text-sm hover:opacity-90 transition"
          >
            Connect
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#0F172A]">
          <div className="flex flex-col px-6 py-4 gap-4">

            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="text-text-muted hover:text-white transition"
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/contact"
              className="mt-2 px-4 py-2 rounded-lg bg-primary text-center text-white"
              onClick={() => setMenuOpen(false)}
            >
              Connect
            </Link>

          </div>
        </div>
      )}

    </header>
  );
};

export default Navbar;