import React, { useEffect, useState,useContext } from "react";
import {
  User,
  BarChart3,
  Home,
  Briefcase,
  Settings,
  FileText,
  CircuitBoard,
} from "lucide-react";
import Theme from "../context/ThemeContext";

 
 

// Mock Link component for demonstration (replace with actual react-router-dom Link)
const Link = ({ to, children, className, onClick }) => (
  <a href={to} className={className} onClick={onClick}>
    {children}
  </a>
);

function Navbar() {
  const [activeTab, setActiveTab] = useState("home");
   const { theme } = useContext(Theme);
  const isDark = theme === "dark";

  useEffect(() => {
    const url = window.location.href;
    let currentPath = url.split("/").pop();
    setActiveTab(currentPath || "home");
  }, []);

  const navItems = [
    { id: "home", name: "Home", icon: Home, link: "/home" },
    { id: "dashboard", name: "Dashboard", icon: BarChart3, link: "/dashboard" },
    { id: "interview", name: "Interview", icon: Briefcase, link: "/interview" },
    { id: "cv-builder", name: "CV Build", icon: FileText, link: "/cv-builder" },
    { id: "settings", name: "Settings", icon: Settings, link: "/settings" },
  ];

  return (
    <div className={`${isDark ? "bg-gray-900" : "bg-gray-50"} relative z-0 mb-20 lg:mb-20`}>
  {/* Top Navigation Bar (Desktop) */}
  <nav className={`${isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"} shadow-sm px-6 py-4 flex items-center justify-between lg:px-8 fixed top-0 left-0 right-0 border-b`}>
    <div className="flex items-center justify-center" style={{ userSelect: "none" }}>
      <Link
        to="/home"
        className={`flex items-center text-xl font-medium rounded-lg tracking-tight ${isDark ? "text-white" : "text-gray-900"}`}
      >
        <CircuitBoard className="mr-2" />
        ORTES AI
      </Link>
    </div>

    <div className="hidden md:flex items-center">
      <div className={`${isDark ? "bg-gray-700" : "bg-gray-50"} rounded-full p-1 shadow-inner`}>
        {navItems.map((item) => (
          <Link
            key={item.id}
            to={item.link}
            className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ease-out
              ${
                activeTab === item.id
                  ? `${isDark ? "bg-gray-900 text-blue-400" : "bg-white text-blue-700 shadow-sm"}`
                  : `${isDark ? "text-gray-300 hover:text-white hover:bg-gray-800" : "text-gray-600 hover:text-gray-900 hover:bg-white/50"}`
              }`}
            onClick={() => setActiveTab(item.id)}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>

    <div className="hidden md:flex items-center gap-2">
      <Link to="/settings#profile-section">
        <button
          className={`p-3 rounded-full transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-20
            ${isDark ? "hover:bg-gray-700" : "hover:bg-gray-100"}`}
          title="Profile"
        >
          <User className={`${isDark ? "text-gray-300" : "text-gray-700"} w-5 h-5`} />
        </button>
      </Link>
    </div>
  </nav>

  {/* Mobile Bottom Navigation Bar */}
  <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
    <div className={`${isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} shadow-2xl`}>
      <div className="flex justify-around items-center h-16 px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <Link
              key={item.id}
              to={item.link}
              className="flex flex-col items-center justify-center flex-1 py-2 px-1 transition-all duration-200 ease-out focus:outline-none"
              onClick={() => setActiveTab(item.id)}
            >
              <div
                className={`p-2 rounded-2xl transition-all duration-200 ease-out mb-1
                  ${
                    isActive
                      ? `${isDark ? "bg-blue-900" : "bg-blue-100"} shadow-sm`
                      : `${isDark ? "hover:bg-gray-700" : "hover:bg-gray-100"}`
                  }`}
              >
                <Icon
                  className={`w-5 h-5 transition-colors duration-200 ${
                    isActive
                      ? "text-blue-600"
                      : `${isDark ? "text-gray-400" : "text-gray-600"}`
                  }`}
                />
              </div>
              <span
                className={`text-xs font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-blue-600"
                    : `${isDark ? "text-gray-400" : "text-gray-600"}`
                }`}
              >
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  </div>
</div>

  );
}

export default Navbar;
