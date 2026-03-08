import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Concepts", path: "/concepts" },
    { name: "Designs", path: "/designs" },
    { name: "About", path: "/about" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>

      <div className={styles.navContainer}>

        {/* Logo */}
        <NavLink to="/" className="flex flex-col leading-tight">
          <span className="font-heading text-xl font-bold">Arch<span className=" gradient-text">
            InxT</span>
          </span>
          <span className="text-[10px] text-textMuted hidden sm:block">
            Architecture Of Innovation & Technology
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>

          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                isActive ? styles.active : styles.link
              }
            >
              {link.name}
            </NavLink>
          ))}

        </nav>

        {/* Connect Button */}
        <NavLink to="/contact" className={styles.connectBtn}>
          Connect
        </NavLink>

        {/* Hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Bottom Border */}
      <div className={styles.border}></div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className={styles.mobileMenu}>

          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}

          <NavLink
            to="/contact"
            className={styles.mobileConnect}
            onClick={() => setMenuOpen(false)}
          >
            Connect
          </NavLink>

        </div>
      )}

    </header>
  );
};

export default Navbar;