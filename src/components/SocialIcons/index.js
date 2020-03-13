import React from 'react';
import './style.css';


const SocialIcons = (props)=>{
	return(
	  <div className="socialIcons">
	    <div><a><i className="fab fa-facebook-f"></i></a></div>
	    <div><a><i className="fab fa-twitter"></i></a></div>
	    <div><a><i className="fab fa-linkedin-in"></i></a></div>
	    <div><a><i className="fab fa-instagram"></i></a></div>
	  </div>
	)
}

export default SocialIcons;