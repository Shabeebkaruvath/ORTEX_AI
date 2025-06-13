import React, { useState,useContext } from "react";
import Theme from "../../context/ThemeContext";

function Language() {
  const { theme } = useContext(Theme);
  const isDark = theme === "dark";
  const [language, setLanguage] = useState("English (US)");
  const [timeZone, setTimeZone] = useState("UTC-08:00 Pacific Time");

  const languageOptions = [
    "English (US)",
    "English (UK)",
    "Spanish",
    "French",
    "German"
  ];

  const timeZoneOptions = [
    "UTC-08:00 Pacific Time",
    "UTC-05:00 Eastern Time",
    "UTC+00:00 Greenwich Mean Time",
    "UTC+01:00 Central European Time"
  ];

  return (
   <div className={`${isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"} rounded-xl shadow-sm border p-6`}>
  <h3 className={`text-lg font-semibold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
    Language & Region
  </h3>
  <div className="space-y-4">
    <div>
      <label className={`block text-sm font-medium mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
        Language
      </label>
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className={`w-full px-4 py-3 rounded-lg transition-all
          ${isDark
            ? "bg-gray-900 text-white border-gray-700 focus:ring-blue-500 focus:border-blue-500"
            : "bg-white border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"}`}
      >
        {languageOptions.map((lang) => (
          <option key={lang} value={lang}>{lang}</option>
        ))}
      </select>
    </div>
    <div>
      <label className={`block text-sm font-medium mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
        Time Zone
      </label>
      <select
        value={timeZone}
        onChange={(e) => setTimeZone(e.target.value)}
        className={`w-full px-4 py-3 rounded-lg transition-all
          ${isDark
            ? "bg-gray-900 text-white border-gray-700 focus:ring-blue-500 focus:border-blue-500"
            : "bg-white border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"}`}
      >
        {timeZoneOptions.map((tz) => (
          <option key={tz} value={tz}>{tz}</option>
        ))}
      </select>
    </div>
  </div>
</div>

  );
}

export default Language;