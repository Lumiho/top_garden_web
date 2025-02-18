import React from 'react';
import google from "../Media/google.png"

function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#4A7A63] px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
        <h2 className="text-2xl font-semibold text-[#4A7A63]">Welcome! Sign in to your Top Garden account</h2>

        {/* Email Input */}
        <div className="mt-6 text-left">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            placeholder="Enter your email address"
            className="mt-1 w-full p-3 border rounded-lg bg-[#F4F1DE] text-gray-900 focus:ring-2 focus:ring-[#4A7A63]"
          />
        </div>

        {/* Password Input */}
        <div className="mt-4 text-left">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="mt-1 w-full p-3 border rounded-lg bg-[#F4F1DE] text-gray-900 focus:ring-2 focus:ring-[#4A7A63]"
          />
        </div>

        {/* Forgot Password */}
        <div className="mt-3 text-right">
          <a href="#" className="text-[#4A7A63] hover:underline text-sm">Forgot Password?</a>
        </div>

        {/* Login Button */}
        <button className="mt-6 w-full bg-[#4A7A63] text-white py-3 rounded-lg hover:bg-[#E07A5F] transition">
          NEXT
        </button>

        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-3 text-gray-500">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <button className="w-full flex items-center justify-center border rounded-lg py-3 shadow-sm bg-white hover:bg-gray-100 transition">
          <img src={google} alt="Google Logo" className="w-6 h-6 mr-3" />
          <span className="text-gray-700 font-medium">Sign in with Google</span>
        </button>

        {/* Service Professional Login */}
        <div className="mt-6 text-[#4A7A63] font-semibold text-lg">
          <a href="#" className="hover:underline">Are you a service professional? Sign in here</a>
        </div>
      </div>
    </div>
  );
}

export default Login;