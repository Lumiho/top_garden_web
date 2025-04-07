// import React, { useState } from 'react';
// import { supabase } from '../supabaseClient';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     const { data, error } = await supabase.auth.signInWithPassword({
//       email,
//       password,
//     });

//     if (error) {
//       alert('Login failed: ' + error.message);
//     } else {
//       console.log('Logged in user:', data.user);
//       alert('Login successful!');
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-[#4A7A63] px-4">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
//         <h2 className="text-2xl font-semibold text-[#4A7A63]">Welcome! Sign in to your Top Garden account</h2>

//         <form onSubmit={handleLogin}>
//           <div className="mt-6 text-left">
//             <label className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter your email address"
//               className="mt-1 w-full p-3 border rounded-lg bg-[#F4F1DE] text-gray-900 focus:ring-2 focus:ring-[#4A7A63]"
//             />
//           </div>

//           <div className="mt-4 text-left">
//             <label className="block text-sm font-medium text-gray-700">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter your password"
//               className="mt-1 w-full p-3 border rounded-lg bg-[#F4F1DE] text-gray-900 focus:ring-2 focus:ring-[#4A7A63]"
//             />
//           </div>

//           <div className="mt-3 text-right">
//             <a href="#" className="text-[#4A7A63] hover:underline text-sm">Forgot Password?</a>
//           </div>

//           <button
//             type="submit"
//             className="mt-6 w-full bg-[#4A7A63] text-white py-3 rounded-lg hover:bg-[#E07A5F] transition"
//           >
//             NEXT
//           </button>
//         </form>

//         <div className="mt-6 text-[#4A7A63] font-semibold text-lg">
//           <a href="/signup" className="hover:underline">Need an account? Sign up</a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;
