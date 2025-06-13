import React from 'react';
import { Mail, Lock, Chrome, Github } from 'lucide-react'; // Import icons from lucide-react
import { Link } from 'react-router-dom';

function Login()  {
  // Basic state for form fields (though not fully functional for a backend in this simple example)
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login attempt with:', { email, password });
    // In a real application, you would send this data to an authentication API
  };

  const handleSocialLogin = (provider) => {
    console.log(`Login with ${provider}`);
    // In a real application, you would redirect to the social authentication provider
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
  <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md border border-gray-200">
    <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 font-inter">Welcome Back!</h2>
    <p className="text-center text-gray-600 mb-8 font-inter">Sign in to your account</p>

    <form onSubmit={handleLogin} className="space-y-5">
      {/* Email Input */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 font-inter">Email Address</label>
        <div className="relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Mail className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            type="email"
            id="email"
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
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2 font-inter">Password</label>
        <div className="relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Lock className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm font-inter"
            placeholder="••••••••"
          />
        </div>
      </div>

      {/* Forgot Password Link */}
      <div className="flex items-center justify-end">
        <div className="text-sm">
          <Link
            to="/forgot-password"
            className="font-medium text-blue-600 hover:text-blue-500 hover:underline font-inter"
          >
            Forgot your password?
          </Link>
        </div>
      </div>

      {/* Login Button */}
      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out font-inter"
      >
        Login
      </button>
    </form>

    {/* Separator */}
    <div className="relative my-8">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-300"></div>
      </div>
      <div className="relative flex justify-center text-sm">
        <span className="px-2 bg-white text-gray-500 font-inter">Or continue with</span>
      </div>
    </div>

    {/* Social Login Buttons */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <button
        type="button"
        onClick={() => handleSocialLogin('Google')}
        className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition duration-150 ease-in-out font-inter"
      >
        <Chrome className="h-5 w-5 mr-2" />
        Google
      </button>
      <button
        type="button"
        onClick={() => handleSocialLogin('GitHub')}
        className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition duration-150 ease-in-out font-inter"
      >
        <Github className="h-5 w-5 mr-2" />
        GitHub
      </button>
    </div>

    {/* Sign Up Link */}
    <p className="mt-8 text-center text-sm text-gray-600 font-inter">
      Don't have an account?{' '}
      <Link to="/signup" className="font-medium text-blue-600 hover:text-blue-500 hover:underline">
        Sign Up
      </Link>
    </p>
  </div>
</div>

  );
}

export default Login;