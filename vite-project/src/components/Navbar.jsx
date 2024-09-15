import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
	const navigate = useNavigate(); // Fixed the typo

	const handleSignup = () => {
	  navigate("/signup"); // Navigates to /signup
	};
  
	const handleLogin = () => {
	  navigate("/login"); // Navigates to /login
	};
  return <section className="flex">
	<nav className="flex gap-16 ">
		<h1>Landing</h1>
		<div>
		<button className="login" onClick={handleLogin}>Login</button> {/* Corrected button */}
		<button onClick={handleSignup}>Signup</button> {/* Corrected button */}
		</div>
	</nav>
  </section>;
};

export default Navbar;
