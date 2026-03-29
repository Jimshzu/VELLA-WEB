import { Link } from "react-router-dom";
import logo from "../assets/vella-logo.png";
import arrowIcon from "../assets/icons/arrow_login.png";

export default function Navbar() {
  return (
    <nav
      className="
        fixed top-0 left-0 w-full z-50
        flex items-center justify-between
        px-10 py-4
        bg-white/10 backdrop-blur-md
        border-b border-white/20
        text-white
      "
    >
      {/* LEFT: Logo */}
      <div className="flex items-center gap-2 ml-6">
        <img src={logo} alt="logo" className="w-8 h-8" />
        <h1 className="text-xl font-semibold">vella</h1>
      </div>

      {/* RIGHT SIDE: Links + Login */}
      <div className="flex items-center gap-10">
        
        {/* LINKS */}
        <div className="flex gap-8 font-semibold">
          <a href="#home" className="hover:opacity-80 transition">Home</a>
          <a href="#features" className="hover:opacity-80 transition">Features</a>
          <a href="#drives" className="hover:opacity-80 transition">Donation Drives</a>
          <a href="#about" className="hover:opacity-80 transition">About</a>
        </div>

        {/* LOGIN */}
        <Link to="/login">
          <button
            className="
              bg-white text-black
              px-5 py-2
              rounded-full
              font-medium
              flex items-center gap-2
              hover:scale-105 transition
            "
          >
            <img src={arrowIcon} alt="arrow" className="w-5 h-5" />
            Login
          </button>
        </Link>

      </div>
    </nav>
  );
}