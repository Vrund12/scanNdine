import React, { useState } from 'react';

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-lg mt-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">⚙️ Settings</h2>

      {/* Profile Section */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">👤 Profile Settings</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="border p-3 rounded w-full focus:outline-none focus:ring focus:ring-blue-300"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="border p-3 rounded w-full focus:outline-none focus:ring focus:ring-blue-300"
          />
          <input
            type="password"
            placeholder="New Password"
            className="border p-3 rounded w-full focus:outline-none focus:ring focus:ring-blue-300"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="border p-3 rounded w-full focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
      </section>

      {/* Restaurant Preferences */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">🏪 Restaurant Preferences</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Restaurant Name"
            className="border p-3 rounded w-full focus:outline-none focus:ring focus:ring-blue-300"
          />
          <input
            type="text"
            placeholder="Business Hours (e.g. 9 AM - 10 PM)"
            className="border p-3 rounded w-full focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
      </section>

      {/* Notifications */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">🔔 Notifications</h3>
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <span className="text-gray-700">Enable Email Notifications</span>
        </label>
      </section>

      {/* Dark Mode */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">🌙 Appearance</h3>
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            className="form-checkbox h-5 w-5 text-indigo-600"
          />
          <span className="text-gray-700">Enable Dark Mode</span>
        </label>
      </section>

      <div className="text-right">
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Settings;
