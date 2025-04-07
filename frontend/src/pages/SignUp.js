import React, { useState } from 'react';
import { supabase } from '../supabaseClient'; 

function Signup() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    console.log("📨 Signup submitted with:", { fullName, email, password });

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    });

    if (error) {
      alert('Signup failed: ' + error.message);
    } else {
      alert('Signup successful! Please check your email to confirm your account.');
      console.log(data);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#4A7A63] px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
        <h2 className="text-2xl font-semibold text-[#4A7A63] mb-6">
          Create your Top Garden account
        </h2>

        <form onSubmit={handleSignup}>
          {/* Full Name */}
          <div className="mb-4 text-left">
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your full name"
              className="mt-1 w-full p-3 border rounded-lg bg-[#F4F1DE] text-gray-900 focus:ring-2 focus:ring-[#4A7A63]"
              required
            />
          </div>

          {/* Email Input */}
          <div className="mb-4 text-left">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="mt-1 w-full p-3 border rounded-lg bg-[#F4F1DE] text-gray-900 focus:ring-2 focus:ring-[#4A7A63]"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-4 text-left">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="mt-1 w-full p-3 border rounded-lg bg-[#F4F1DE] text-gray-900 focus:ring-2 focus:ring-[#4A7A63]"
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-6 text-left">
            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Re-enter your password"
              className="mt-1 w-full p-3 border rounded-lg bg-[#F4F1DE] text-gray-900 focus:ring-2 focus:ring-[#4A7A63]"
              required
            />
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-[#4A7A63] text-white py-3 rounded-lg hover:bg-[#E07A5F] transition"
          >
            Sign Up
          </button>
        </form>

        {/* Already have an account */}
        <div className="mt-6 text-[#4A7A63] font-semibold text-lg">
          <a href="/login" className="hover:underline">Already have an account? Log in</a>
        </div>
      </div>
    </div>
  );
}

export default Signup;
