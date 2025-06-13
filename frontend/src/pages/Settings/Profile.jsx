import React, { useState,useContext } from "react";
import {
  User,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
  Upload,
} from "lucide-react";
import Theme from "../../context/ThemeContext";

function Profile() {
  const [showPassword, setShowPassword] = useState(false);
  const [profile, setProfile] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  
  const { theme } = useContext(Theme);
  const isDark = theme === "dark";

  const handleProfileChange = (field, value) => {
    setProfile(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="space-y-6">
  {/* Personal Info */}
  <div className={`${isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"} rounded-xl shadow-sm border p-6`}>
    <h3 className={`text-lg font-semibold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>Personal Information</h3>

    <div className="flex items-center space-x-4 mb-6">
      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
        <User className="w-8 h-8 text-white" />
      </div>
      <button className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors">
        <Upload className="w-4 h-4 inline mr-2" />
        Change Photo
      </button>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {["First Name", "Last Name", "Email", "Phone"].map((label, i) => {
        const keys = ["firstName", "lastName", "email", "phone"];
        const icons = [null, null, Mail, Phone];
        return (
          <div key={label}>
            <label className={`block text-sm font-medium mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>{label}</label>
            <div className="relative">
              {icons[i] && React.createElement(icons[i], {
                className: `absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${isDark ? "text-gray-400" : "text-gray-400"}`
              })}
              <input
                type={keys[i] === "email" ? "email" : keys[i] === "phone" ? "tel" : "text"}
                value={profile[keys[i]]}
                onChange={(e) => handleProfileChange(keys[i], e.target.value)}
                className={`w-full ${icons[i] ? "pl-10" : "pl-4"} pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all 
                  ${isDark ? "bg-gray-900 text-white border-gray-700 placeholder-gray-400" : "bg-white text-gray-900 border-gray-200"}`}
              />
            </div>
          </div>
        );
      })}
    </div>
  </div>

  {/* Password Section */}
  <div className={`${isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"} rounded-xl shadow-sm border p-6`}>
    <h3 className={`text-lg font-semibold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>Change Password</h3>
    <div className="space-y-4">
      <div>
        <label className={`block text-sm font-medium mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>Current Password</label>
        <div className="relative">
          <Lock className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${isDark ? "text-gray-400" : "text-gray-400"}`} />
          <input
            type={showPassword ? "text" : "password"}
            value={profile.currentPassword}
            onChange={(e) => handleProfileChange("currentPassword", e.target.value)}
            className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all 
              ${isDark ? "bg-gray-900 text-white border-gray-700 placeholder-gray-400" : "bg-white text-gray-900 border-gray-200"}`}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${isDark ? "text-gray-400 hover:text-white" : "text-gray-400 hover:text-gray-600"}`}
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {["New Password", "Confirm Password"].map((label, i) => {
          const keys = ["newPassword", "confirmPassword"];
          return (
            <div key={label}>
              <label className={`block text-sm font-medium mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>{label}</label>
              <input
                type="password"
                value={profile[keys[i]]}
                onChange={(e) => handleProfileChange(keys[i], e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all 
                  ${isDark ? "bg-gray-900 text-white border-gray-700 placeholder-gray-400" : "bg-white text-gray-900 border-gray-200"}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  </div>
</div>

  );
}

export default Profile;