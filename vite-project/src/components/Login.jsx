import React, { useState } from 'react';
import { login } from '../api';
import { GoogleLogin } from '@react-oauth/google';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import sun from '../../public/sun';
import logo from "../../public/logo.svg";

import frame from '../../public/frame.svg'
import { useNavigate } from 'react-router-dom'; // Assuming you want to redirect after login

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [showSuccessToast, setShowSuccessToast] = useState(false); // State for success toast
  const navigate = useNavigate();

  const { email, password } = formData;

  // Handle input change
  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  // Toggle Password Visibility
  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  // Handle form submit for traditional login
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password });
      console.log('Token:', res.data.token);
      navigate('/'); // Redirect after successful login
    } catch (err) {
      console.error(err.response.data.msg);
    }
  };

  // Google Login Success Handler
  const handleLogin = (response) => {
    console.log('Google Login Response:', response);
    setShowSuccessToast(true); // Show success toast
    setTimeout(() => {
      setShowSuccessToast(false);
      navigate('/'); // Redirect after 3 seconds
    }, 3000);
  };

  // Google Login Error Handler
  const handleError = (error) => {
    console.error('Google Login Error:', error);
  };

  return (
    <section className='flex gap-12'>
      <div>
      <img className='ml-80 mt-6' src={sun} alt="Sun" />
      <h1 className='text-blue-100 text-4xl font-semibold ml-52 mt-9'>
        Welcome Back!
      </h1>
      <p className='ml-64 mt-9'>Please enter your details</p>
      <form id='fr' className='ml-52 mt-9' onSubmit={onSubmit}>
        <input
          className='block mt-9 w-72 h-9'
          type="email"
          name="email"
          value={email}
          onChange={onChange}
          placeholder="Email"
        />
        <div className="relative w-72">
          <input
            className='block mt-9 w-72 h-9'
            type={showPassword ? 'text' : 'password'} // Toggle between text/password input
            name="password"
            value={password}
            onChange={onChange}
            placeholder="Password"
          />
          <button
            type="button"
            onClick={handlePasswordToggle}
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
          >
            {showPassword ? <AiFillEyeInvisible size={24} /> : <AiFillEye size={24} />}
          </button>
        </div>
        <button
          className='mt-9 w-72 text-center bg-blue-100 h-10 rounded-xl text-white'
          type="submit"
        >
          Login
        </button>

        <div className="my-5 w-72">
          <GoogleLogin
            onSuccess={handleLogin}
            onError={handleError}
          />
        </div>
      </form>

      {/* Success Toast */}
      {showSuccessToast && (
        <div className="fixed top-4 right-4 bg-green-100 border border-black text-green-700 px-4 py-3 rounded shadow-lg animate-fade-in">
          <strong className="font-bold">Success!</strong>
          <span className="block sm:inline"> You have logged in with Google.</span>
        </div>
      )}
      </div>
      <div className='login_svg'>
        <img className='h-16 mt-10 ml-28' src={logo} alt="/" />
        <img className='mt-20 h-72' src={frame} alt="" />
       
      </div>
      
    </section>
  );
};

export default Login;
