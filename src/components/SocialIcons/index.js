import React from 'react';
import './style.css';


const SocialIcons = (props)=>{
	return(
	  <div className="socialIcons">
	    <div><a><i class="fab fa-facebook-f"></i></a></div>
	    <div><a><i class="fab fa-twitter"></i></a></div>
	    <div><a><i class="fab fa-linkedin-in"></i></a></div>
	    <div><a><i class="fab fa-instagram"></i></a></div>
	  </div>
	)
}

export default SocialIcons;