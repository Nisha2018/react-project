import React,{useState,useEffect} from 'react';
import './style.css';
import Card from '../UI/Card';
import blogPost from '../../data/blog.json';
import{NavLink} from 'react-router-dom';
import SocialIcons from '../SocialIcons';


const Sidebar = (props)=>{

	const[posts,setPosts] = useState([]);

	useEffect(()=>{
		const posts = blogPost.data;
		setPosts(posts);
	},posts);

	return(
      <div className="sidebarContainer">
	      <Card style={{marginBottom:'20px',padding: '10px', boxSizing:'border-box'}}>
	        <div className="cardHeader">
	          <span>About Us</span>
	        </div>
	        <div className="profileImageContainer">
	          <img src="https://learnenglish.britishcouncil.org/sites/podcasts/files/styles/article/public/RS8003_GettyImages-994576028-hig.jpg?itok=USdYN3SJ" alt="profile" />
	        </div>
	        <div className="cardBody">
	          <p className="personalBio">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, ratione!</p>
	        </div>
	      </Card>

	      <Card>
	        <div className="cardHeader">
	          <span>Social Network</span>
	          <SocialIcons />
	        </div>
	      </Card>

	      <Card style={{marginTop:'20px',padding: '10px', boxSizing:'border-box'}}>
	        <div className="cardHeader">
	          <span>Recent Posts</span>
	        </div>

	        <div className="recentPosts">

	          {
	          	posts.map(post=>{
	          		return (
	          		<NavLink to={`/post/${post.id}`}>	
	          		  <div className="recentPost">
		                <h3>{post.blogTitle}</h3>
		                <span>{post.postedOn}</span>
			          </div>
			        </NavLink>  
	          		);
	          	})
	          }

	        </div>
	      </Card>
      </div>
	)
}

export default Sidebar;