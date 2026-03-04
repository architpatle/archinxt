import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
         <NavLink to="/" className="flex flex-col leading-tight">
          <span className="font-heading text-xl font-bold gradient-text">
            ArchInxT
          </span>
          <span className="text-[10px] text-textMuted hidden sm:block">
            Architecture Of Innovation & Technology
          </span>
        </NavLink>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8 text-sm">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/concepts"
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
          >
            Concepts
          </NavLink>

          <NavLink
            to="/designs"
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
          >
            Designs
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
          >
            About
          </NavLink>

        </nav>

        {/* Button */}

        <NavLink to="/contact" className={styles.connectBtn}>
          Connect
        </NavLink>

      </div>

      <div className={styles.border}></div>

    </header>
  );
};

export default Navbar;