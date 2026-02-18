import React from "react";
import logo from "../../../assets/netflix-logo.png";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState } from "react";
import LoadingScreen from "../../../components/shared/LoadingScreen/LoadingScreen";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [loading, setLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const mainReload = () => {
    setLoading(true);
    setMenuOpen(false);
    setLoading(false);
  };

  if (loading) return <LoadingScreen />;

  return (
    <nav className="Header">
      <div className="nav-left">
        <img src={logo} alt="netflix-logo" />
        <ul className="nav-menu">
          <li>
            <Link to="/" onClick={mainReload}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/tvseries" onClick={mainReload}>
              TV Series
            </Link>
          </li>
          <li>
            <Link to="/films" onClick={mainReload}>
              Films
            </Link>
          </li>
          <li>
            <Link to="/popular" onClick={mainReload}>
              News & Popular
            </Link>
          </li>
          <li>
            <Link to="/" onClick={mainReload}>
              My List
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="hamburger-menu"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
      </button>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <ul className="mobile-nav-menu">
          <li>
            <Link to="/" onClick={mainReload}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/tvseries" onClick={mainReload}>
              TV Series
            </Link>
          </li>
          <li>
            <Link to="/films" onClick={mainReload}>
              Films
            </Link>
          </li>
          <li>
            <Link to="/popular" onClick={mainReload}>
              News & Popular
            </Link>
          </li>
          <li>
            <Link to="/" onClick={mainReload}>
              My List
            </Link>
          </li>
        </ul>
      )}

      <div className="nav-right">
        <ul>
          <li>
            <Link>
              <FiSearch className="nav-search" size={17} />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;