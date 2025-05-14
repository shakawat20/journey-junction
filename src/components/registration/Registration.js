import React, { useEffect, useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

import { useNavigate } from 'react-router-dom';
import auth from '../../firebase/firebase.init';

const Registration = () => {
  const minLength = 6
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate()
  const [createUserWithEmailAndPassword, cUser, loading, error] = useCreateUserWithEmailAndPassword(auth);
  const [user] = useAuthState(auth)


  const handleRegister = (e) => {
    e.preventDefault();

    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    createUserWithEmailAndPassword(email, password)
    // const storedData = localStorage.getItem('user');
    // localStorage.setItem('user', user?.email);


  };


  if (cUser || user) {
    navigate("/")
  }


  // if (user) {
  //   console.log(user)


  // }

  const passwordsMatch = password === confirmPassword;

  return (
    <div className={`min-h-screen  flex items-center justify-center bg-gray-100 `}>
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Registration</h2>
        <form onSubmit={handleRegister}>


          <label htmlFor="username" className="block text-gray-700">Username:</label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
            required
          />


          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          {password.length < minLength && (
            <p className="text-red-500">Password must be at least {minLength} characters long.</p>
          )}
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-gray-700">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div>
            {password === confirmPassword ? (
              <p>Passwords match</p>
            ) : (
              <p>Passwords do not match. Please try again.</p>
            )}
          </div>

          <button

            disabled={!passwordsMatch}
            type="submit"
            className={`${!passwordsMatch
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-blue-500 hover:bg-blue-600'
              } text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300`}
          >

            Registration
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
