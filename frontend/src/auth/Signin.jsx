import React, { useState } from "react";
import { Mail, Lock, Chrome, Github, User } from "lucide-react";
import { Link } from "react-router-dom";

function App() {
  // State for username, email, and password fields (for UI display only)
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Placeholder for the sign-up action
  const handleSignUp = (e) => {
    e.preventDefault();
    console.log("Traditional Sign Up attempt (UI only):", {
      username,
      email,
      password,
    });
    // In a real application, this would send data to a registration API
  };

  // Placeholder for social sign-in actions
  const handleSocialSignInClick = (provider) => {
    console.log(`${provider} Sign-in button clicked (UI only)`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md border border-gray-200">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 font-inter">
          Create Account
        </h2>
        <p className="text-center text-gray-600 mb-8 font-inter">
          Get started with a new account
        </p>

        {/* Traditional Email/Password Sign Up Form */}
        <form onSubmit={handleSignUp} className="space-y-5">
          {/* Username Input */}
          <div>
            <label
              htmlFor="signup-username"
              className="block text-sm font-medium text-gray-700 mb-2 font-inter"
            >
              Username
            </label>
            <div className="relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="text"
                id="signup-username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm font-inter"
                placeholder="Your username"
              />
            </div>
          </div>

          {/* Email Input */}
          <div>
            <label
              htmlFor="signup-email"
              className="block text-sm font-medium text-gray-700 mb-2 font-inter"
            >
              Email Address
            </label>
            <div className="relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="email"
                id="signup-email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm font-inter"
                placeholder="you@example.com"
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="signup-password"
              className="block text-sm font-medium text-gray-700 mb-2 font-inter"
            >
              Password
            </label>
            <div className="relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="password"
                id="signup-password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm font-inter"
                placeholder="••••••••"
              />
            </div>
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-semibold text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150 ease-in-out font-inter"
          >
            Sign Up
          </button>
        </form>

        {/* Separator for social login options */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500 font-inter">
              Or sign up with
            </span>
          </div>
        </div>

        {/* Social Sign-in Buttons */}
        <div className="space-y-4">
          {/* Sign In with Google Button - purely for UI display */}
          <button
            onClick={() => handleSocialSignInClick("Google")}
            className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out font-inter"
          >
            <Chrome className="h-5 w-5 mr-2" aria-hidden="true" />
            Sign in with Google
          </button>

          {/* Sign In with GitHub Button - purely for UI display */}
          <button
            onClick={() => handleSocialSignInClick("GitHub")}
            className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out font-inter"
          >
            <Github className="h-5 w-5 mr-2" aria-hidden="true" />
            Sign in with GitHub
          </button>
        </div>

        {/* Sign Up Link */}
    <p className="mt-8 text-center text-sm text-gray-600 font-inter">
      Already have an account?{' '}
      <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500 hover:underline">
        Login
      </Link>
    </p>
      </div>
    </div>
  );
}

export default App;
