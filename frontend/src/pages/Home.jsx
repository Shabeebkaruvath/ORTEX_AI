import React, { useContext } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Theme from "../context/ThemeContext";

function Home() {
  const { theme } = useContext(Theme);
  const isDark = theme === 'dark';

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center px-6 transition-all ${
        isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'
      }`}
    >
      <h1 className="text-4xl font-semibold mb-4 tracking-tight">ORTES AI</h1>
      <p
        className={`text-base max-w-md text-center ${
          isDark ? 'text-gray-300' : 'text-gray-500'
        }`}
      >
        Your personal AI Interview Simulator — practice, improve, and get
        real-time feedback.
      </p>

      <Link
  to="/interview"
  className={`mt-8 justify-center flex items-center gap-2 px-5 py-2.5 rounded-full transition-all ${
    isDark
      ? 'bg-white text-black hover:bg-black hover:text-white  border border-gray-700'
      : 'bg-black text-white hover:bg-white hover:text-black   border border-gray-300'   
  }`}
>
  Get Started
  <ArrowRight size={18} />
</Link>

      <footer
        className={`absolute bottom-4 text-xs ${
          isDark ? 'text-gray-500' : 'text-gray-400'
        }`}
      >
        © 2025 ORTES AI. All rights reserved.
      </footer>
    </div>
  );
}

export default Home;
