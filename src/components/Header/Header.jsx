import { memo, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaGraduationCap,
  FaMoon,
  FaSun,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import "./Header.css";

const Header = ({ theme, toggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <NavLink to="/" className="logo" onClick={() => setMenuOpen(false)}>
          <FaGraduationCap className="logo-icon" />
          <span>Khmer Learning</span>
        </NavLink>

        {/* Menu */}
        <nav className={menuOpen ? "nav active" : "nav"}>
          <NavLink 
            to="/" 
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            onClick={() => setMenuOpen(false)}
          >
            ទំព័រដើម
          </NavLink>

          <NavLink 
            to="/classes" 
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            onClick={() => setMenuOpen(false)}
          >
            ថ្នាក់រៀន
          </NavLink>

          <NavLink 
            to="/subjects" 
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            onClick={() => setMenuOpen(false)}
          >
            មុខវិទ្យាទូទៅ
          </NavLink>

          <NavLink 
            to="/literature" 
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            onClick={() => setMenuOpen(false)}
          >
            អក្សរសិល្ប៍
          </NavLink>

          <NavLink 
            to="/about" 
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            onClick={() => setMenuOpen(false)}
          >
            អំពីយើង
          </NavLink>

          <NavLink 
            to="/contact" 
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            onClick={() => setMenuOpen(false)}
          >
            ទំនាក់ទំនង
          </NavLink>
        </nav>

        {/* Right */}
        <div className="header-right">
          <button className="theme-btn" onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>

          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
