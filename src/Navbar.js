import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
	render() {
		return (
			<nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
				<a className='navbar-brand' href='#'>
					Dog Finder
				</a>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarNav'
					aria-controls='navbarNav'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon' />
				</button>
				<div className='collapse navbar-collapse' id='navbarNav'>
					<ul className='navbar-nav'>
						<li className='nav-item'>
							<NavLink to='/dogs' className='nav-link'>
								Home
							</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Navbar;
