import React, { useState ,useContext} from "react";
import Theme from "../../context/ThemeContext";
function Notification() {
  

 
    const { theme } = useContext(Theme);
  const isDark = theme === "dark";

  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    interviews: true,
    updates: false,
  });

  const handleNotificationChange = (type) => {
    setNotifications(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const notificationOptions = [
    { key: "email", label: "Email Notifications", desc: "Receive updates via email" },
    { key: "push", label: "Push Notifications", desc: "Browser and mobile notifications" },
    { key: "interviews", label: "Interview Reminders", desc: "Get notified about upcoming interviews" },
    { key: "updates", label: "Product Updates", desc: "News about new features and improvements" },
  ];

  return (
   <div className={`${isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"} rounded-xl shadow-sm border p-6`}>
  <h3 className={`text-lg font-semibold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
    Notification Preferences
  </h3>
  <div className="space-y-4">
    {notificationOptions.map((item) => (
      <div
        key={item.key}
        className={`flex items-center justify-between p-4 border rounded-lg transition-colors
          ${isDark
            ? "border-gray-700 bg-gray-900 hover:bg-gray-700"
            : "border-gray-100 hover:bg-gray-50"}`}
      >
        <div>
          <h4 className={`font-medium ${isDark ? "text-white" : "text-gray-900"}`}>{item.label}</h4>
          <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>{item.desc}</p>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={notifications[item.key]}
            onChange={() => handleNotificationChange(item.key)}
            className="sr-only peer"
          />
          <div className={`w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 
            peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full 
            peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] 
            after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full 
            after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600`}></div>
        </label>
      </div>
    ))}
  </div>
</div>

  );
}

export default Notification;