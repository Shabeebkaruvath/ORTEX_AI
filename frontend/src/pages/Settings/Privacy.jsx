import {useContext }from "react";
import {
  ChevronRight,
  Trash2,
  Download,
} from "lucide-react";
import Theme from "../../context/ThemeContext";

function Privacy() {
    const { theme } = useContext(Theme);
  const isDark = theme === "dark";

  const handleDownloadData = () => {
    alert("Data download initiated. You will receive an email with download instructions.");
  };

  const handleDeleteAccount = () => {
    const confirmed = window.confirm("Are you sure you want to delete your account? This action cannot be undone.");
    if (confirmed) {
      alert("Account deletion request submitted. Please check your email for confirmation.");
    }
  };

  const privacySettings = [
    {
      title: "Profile Visibility",
      description: "Control who can see your profile",
      onClick: () => alert("Profile visibility settings coming soon")
    },
    {
      title: "Data Sharing",
      description: "Manage data sharing preferences",
      onClick: () => alert("Data sharing settings coming soon")
    }
  ];

  return (
    <div className="space-y-6">
  {/* Privacy Settings */}
  <div className={`${isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"} rounded-xl shadow-sm border p-6`}>
    <h3 className={`text-lg font-semibold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>Privacy Settings</h3>
    <div className="space-y-4">
      {privacySettings.map((setting, index) => (
        <button
          key={index}
          onClick={setting.onClick}
          className={`w-full flex items-center justify-between p-4 border rounded-lg transition-colors text-left
            ${isDark 
              ? "border-gray-700 bg-gray-900 hover:bg-gray-700 text-white"
              : "border-gray-100 hover:bg-gray-50 text-gray-900"}`}
        >
          <div>
            <h4 className={`font-medium ${isDark ? "text-white" : "text-gray-900"}`}>{setting.title}</h4>
            <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>{setting.description}</p>
          </div>
          <ChevronRight className={`w-5 h-5 ${isDark ? "text-gray-400" : "text-gray-400"}`} />
        </button>
      ))}
    </div>
  </div>

  {/* Data Management */}
  <div className={`${isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"} rounded-xl shadow-sm border p-6`}>
    <h3 className={`text-lg font-semibold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>Data Management</h3>
    <div className="space-y-3">
      <button
        onClick={handleDownloadData}
        className={`w-full flex items-center justify-center px-4 py-3 rounded-lg transition-colors
          ${isDark 
            ? "bg-blue-900 text-blue-300 hover:bg-blue-800"
            : "bg-blue-50 text-blue-700 hover:bg-blue-100"}`}
      >
        <Download className="w-5 h-5 mr-2" />
        Download My Data
      </button>
      <button
        onClick={handleDeleteAccount}
        className={`w-full flex items-center justify-center px-4 py-3 rounded-lg transition-colors
          ${isDark 
            ? "bg-red-900 text-red-300 hover:bg-red-800"
            : "bg-red-50 text-red-700 hover:bg-red-100"}`}
      >
        <Trash2 className="w-5 h-5 mr-2" />
        Delete Account
      </button>
    </div>
  </div>
</div>

  );
}

export default Privacy;