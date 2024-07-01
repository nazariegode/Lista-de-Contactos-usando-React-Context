import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3 px-3">
			<Link to="/">
				<span className="navbar-brand mb-0"><i className="bi bi-house-door-fill"></i></span>
			</Link>
			<div className="ml-auto">
				<Link to="/addContact">
					<button className="btn btn-dark">Add New Contact</button>
				</Link>
			</div>
		</nav>
	);
};
