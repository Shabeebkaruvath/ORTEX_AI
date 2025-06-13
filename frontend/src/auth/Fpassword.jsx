import React, { useState } from 'react';
import { Mail, ArrowLeft } from 'lucide-react'; 
import { Link } from 'react-router-dom'; 

function ForgotPassword({ onSwitchToLogin }) {
  const [email, setEmail] = useState('');

  const handleResetPassword = (e) => {
    e.preventDefault();
    console.log('Password reset attempt for:', { email });
    // In a real application, you would send a reset email
  };

  return (
   <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
  <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md border border-gray-200">
    <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 font-inter">Forgot Password?</h2>
    <p className="text-center text-gray-600 mb-8 font-inter">
      Enter your email address below and we'll send you a link to reset your password.
    </p>

    <form onSubmit={handleResetPassword} className="space-y-5">
      {/* Email Input */}
      <div>
        <label htmlFor="forgot-email" className="block text-sm font-medium text-gray-700 mb-2 font-inter">Email Address</label>
        <div className="relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Mail className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            type="email"
            id="forgot-email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm font-inter"
            placeholder="you@example.com"
          />
        </div>
      </div>

      {/* Reset Password Button */}
      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-semibold text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-150 ease-in-out font-inter"
      >
        Send Reset Link
      </button>
    </form>

    {/* Back to Login Link */}
    <p className="mt-8 text-center text-sm text-gray-600 font-inter">
      <button
        type="button"
        onClick={onSwitchToLogin}
        className="font-medium text-blue-600 hover:text-blue-500 hover:underline flex items-center justify-center"
      >
        <ArrowLeft className="h-4 w-4 mr-1" /> <Link to="/login">Back to Login</Link>
      </button>
    </p>
  </div>
</div>

  );
}

export default ForgotPassword;