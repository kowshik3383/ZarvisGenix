import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "../../public/Logo.svg";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    department: '',
    gender: '',
    number: '',
    emergencyNumber: ''
  });
  
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('https://zarvisgenix-1.onrender.com/api/auth/signup', formData);
      const { token, firstName, lastName, email, department, number } = response.data;

      // Store token and user details in localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify({ firstName, lastName, email, department, number }));

      // Navigate to a different page or show a success message
      navigate('/'); // Adjust the route as necessary
    } catch (err) {
      console.error(err.response?.data?.msg || 'Signup failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="ml-24">
      <img src={logo} alt="Logo" className="w-32 mb-4" />
      <h1 className="text-blue-100 text-4xl font-semibold mb-2">Hello!</h1>
      <h1 className="mb-9">Please enter your details</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex space-x-8">
          <input
            className="bg-blue-300 w-80 rounded-md h-10 px-4"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            required
          />
          <input
            className="bg-blue-300 w-80 rounded-md h-10 px-4"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            required
          />
        </div>

        <div className="flex space-x-8">
          <input
            className="bg-blue-300 w-80 rounded-md h-10 px-4"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <input
            className="bg-blue-300 w-80 rounded-md h-10 px-4"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
        </div>

        <div className="flex space-x-8">
          <select
            className="bg-blue-300 w-80 rounded-md h-10 px-4"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <select
            className="bg-blue-300 w-80 rounded-md h-10 px-4"
            name="department"
            value={formData.department}
            onChange={handleChange}
          >
            <option value="">Select Department</option>
            <option value="Design">Design</option>
            <option value="Development">Development</option>
            <option value="HR">HR</option>
            <option value="Sales">Sales</option>
            <option value="Marketing">Marketing</option>
            <option value="Research and Development">Research and Development</option>
            <option value="Production">Production</option>
          </select>
        </div>

        <div className="flex space-x-8">
          <input
            className="bg-blue-300 w-80 rounded-md h-10 px-4"
            type="tel"
            name="number"
            value={formData.number}
            onChange={handleChange}
            placeholder="Phone Number"
            required
          />
          <input
            className="bg-blue-300 w-80 rounded-md h-10 px-4"
            type="tel"
            name="emergencyNumber"
            value={formData.emergencyNumber}
            onChange={handleChange}
            placeholder="Emergency Number"
            required
          />
        </div>

        <div className="flex items-center space-x-2 mt-4">
          <input
            type="checkbox"
            // If you need to handle toggle change, define `toggle` state and `onToggleChange` method
          />
          <span>Receive notifications</span>
        </div>

        <button
          className="bg-blue-100 text-white font-medium rounded-xl mt-6 w-96 h-10"
          type="submit"
          disabled={loading}
        >
          {loading ? 'Signing up...' : 'Signup'}
        </button>
      </form>
    </section>
  );
};

export default Signup;
