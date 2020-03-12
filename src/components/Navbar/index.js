import React,{useState} from 'react';
import{Link} from 'react-router-dom';
import './style.css';


const Navbar = (props)=>{

	const [search,setSearch] = useState(false);

	const submitSearch=(e)=>{
		e.preventDefault();
		alert("search");
	}

	const openSearch = ()=>{
		setSearch(true);
	}

	const searchClass = search?'searchInput active':'searchInput';

	return(
		<div className="navbar">
		  <ul className="navbarMenu">
		  	<li><Link to="/">Home</Link></li>
		  	<li><Link to="/about-us">About Us</Link></li>
		  	<li><Link to="/post">Posts</Link></li>
		  	<li><Link to="/contact-us">Contact Us</Link></li>
		  </ul>
		  <div className="search">
		    <form onSubmit={submitSearch}>
			  	<input type="text" className={searchClass} placeholder="Search" />
			  	<img onclick={openSearch} className="searchIcon" src={require('../../assets/icons/search.png')} alt="Search" />
		  	</form>
		  </div>
		</div>
	)
}

export default Navbar;