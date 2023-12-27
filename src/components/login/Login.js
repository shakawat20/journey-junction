import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithGoogle, useSignInWithEmailAndPassword, useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.init';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate()
  const location = useLocation();
  console.log(location)
  let from = location?.state?.from?.pathname || "/";
  console.log(from)
  const [aUser] = useAuthState(auth)

  const handleLogin = (e) => {
    e.preventDefault();

    console.log('Email:', email);
    console.log('Password:', password);
    // localStorage.setItem('user', gUser?.email)




  };

console.log(aUser?.email)
  if (aUser?.email) {
    fetch('http://localhost:9000/jwt', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ email:email })

    })
      .then(res => res.json())
      .then(data => {
        console.log("token", data.token)

        localStorage.setItem('journeyToken', data.token)


      })
  }







  if (gUser || user) {
    navigate(from)
  }
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on component mount
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80w=1887auto=formatfit=cropixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        backgroundSize: 'cover',

      }}>
      <div className="min-h-screen flex items-center justify-center  ">

        <div className="bg-white white p-8 rounded shadow-md w-96">
          <h2 className="text-2xl font-semibold mb-4">Login</h2>
          <form onSubmit={handleLogin}>
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
            <div className='flex justify-center'>
              <button onClick={() => signInWithEmailAndPassword(email, password)}
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300"
              >
                Login
              </button>
            </div>



          </form>

          <div className='flex flex-col justify-center items-center'>
            <span>
              or
            </span>
            <br />
            <button onClick={() => signInWithGoogle()} type="submit" className="border rounded border-blue text-gray py-2 px-4">
              signInWithGoogle
            </button>
            <br />

            <span>
              or
            </span>
            <Link to='/registration'>
              <button type="submit" className="border rounded border-blue text-gray py-2 px-4">
                create account
              </button>
            </Link>
          </div>

        </div>
      </div>
    </div>

  );
};

export default Login;
