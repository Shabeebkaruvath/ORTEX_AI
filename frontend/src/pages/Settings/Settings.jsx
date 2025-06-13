import React, { useState, useContext } from "react";
import {
  User,
  Bell,
  Shield,
  Globe,
  Sun,
  Save,
} from "lucide-react";
import Profile from "./Profile";
import Appearance from "./Appearance";
import Language from "./Language";
import Notifications from "./Notification";
import Privacy from "./Privacy";
import Theme from "../../context/ThemeContext";

function SettingsPage() {
  const { theme } = useContext(Theme);
  const isDark = theme === "dark";

  const [activeSection, setActiveSection] = useState("profile");

  const settingSections = [
    { id: "profile", name: "Profile", icon: User },
    { id: "notifications", name: "Notifications", icon: Bell },
    { id: "privacy", name: "Privacy & Security", icon: Shield },
    { id: "appearance", name: "Appearance", icon: Sun },
    { id: "language", name: "Language & Region", icon: Globe },
  ];

  const handleSave = () => {
    alert("Settings saved successfully!");
  };

  const renderContent = () => {
    switch (activeSection) {
      case "profile":
        return <Profile />;
      case "notifications":
        return <Notifications />;
      case "privacy":
        return <Privacy />;
      case "appearance":
        return <Appearance />;
      case "language":
        return <Language />;
      default:
        return <Profile />;
    }
  };

  return (
    <div className={`min-h-screen pb-20 transition-all duration-300 ${isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header */}
        <div className="mb-10 text-center lg:text-left">
          <h1 className="text-4xl font-extrabold">Settings</h1>
          <p className={`mt-3 text-lg ${isDark ? "text-gray-400" : "text-gray-500"}`}>
            Manage your account settings and preferences
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className={`rounded-2xl shadow-lg border p-3 ${isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}>
              {settingSections.map((section) => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`
                      w-full flex items-center space-x-4 px-5 py-3 rounded-xl text-left transition-all duration-200
                      ${
                        activeSection === section.id
                          ? "bg-blue-600 text-white shadow-md"
                          : isDark
                          ? "text-gray-300 hover:bg-gray-700 hover:text-white"
                          : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      }
                    `}
                  >
                    <Icon className="w-6 h-6" />
                    <span className="font-semibold">{section.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className={`rounded-2xl shadow-lg border p-8 ${isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}>
              {renderContent()}
            </div>

            {/* Save Button */}
            <div className="mt-10 flex justify-end">
              <button
                onClick={handleSave}
                className="flex items-center space-x-3 bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors duration-200 font-semibold text-lg shadow-lg hover:shadow-xl"
              >
                <Save className="w-6 h-6" />
                <span>Save Changes</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;
