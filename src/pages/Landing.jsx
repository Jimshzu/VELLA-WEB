import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Drives from "../components/Drives";
import About from "../components/About";
import Footer from "../components/Footer";

export default function Landing() {
  const location = useLocation();

useEffect(() => {
  if (location.hash) {
    const el = document.querySelector(location.hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }
}, [location]);
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Drives />
      <About />
      <Footer />
    </>
  );
}