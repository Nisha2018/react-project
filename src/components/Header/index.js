import React from 'react';
import './style.css';

const Header = props => {
	return(
	  <header className="header">
	  	<nav className="headerMenu">
	  		<a>Home</a>
	  		<a>About Us</a>
	  		<a>Contact Us</a>
	  	</nav>
	  	<div>
	  		Social Media Links
	  	</div>
	  </header>
	)
}


export default Header;