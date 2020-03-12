import React from 'react';
import './style.css';
import SocialIcons from '../SocialIcons';

const Header = props => {
	return(
	  <header className="header">
	  	<nav className="headerMenu">
	  		<a>Home</a>
	  		<a>About Us</a>
	  		<a>Contact Us</a>
	  	</nav>
	  	<div>
	  		<SocialIcons />
	  	</div>
	  </header>
	)
}


export default Header;