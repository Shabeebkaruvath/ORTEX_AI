import React, { useContext } from "react";
import { Moon, Sun } from "lucide-react";
import ThemeContext from "../../context/ThemeContext";

function AppearanceSection() {
  const { theme, setTheme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <div className={`rounded-xl shadow-sm border p-6 transition-all ${isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"}`}>
      <h3 className={`text-lg font-semibold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>Appearance</h3>
      <div className="space-y-4">
        <div className={`flex items-center justify-between p-4 border rounded-lg transition-colors
          ${isDark ? "border-gray-700 hover:bg-gray-700" : "border-gray-100 hover:bg-gray-50"}`}>
          
          <div className="flex items-center space-x-3">
            {isDark ? <Moon className="w-5 h-5 text-gray-300" /> : <Sun className="w-5 h-5 text-gray-600" />}
            <div>
              <h4 className={`font-medium ${isDark ? "text-white" : "text-gray-900"}`}>Dark Mode</h4>
              <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>Toggle dark theme</p>
            </div>
          </div>

          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={isDark}
              onChange={() => setTheme(isDark ? "light" : "dark")}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full 
              peer peer-checked:after:translate-x-full peer-checked:after:border-white 
              after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
              after:bg-white after:border-gray-300 after:border after:rounded-full 
              after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600">
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}

export default AppearanceSection;
