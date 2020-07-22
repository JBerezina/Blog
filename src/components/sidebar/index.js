import React, {useState, useEffect} from 'react';
import "./style.css"
import Card from '../ui/card';
import blogPost from '../../data/blog.json';
import Navbar from '../navbar';
import { NavLink } from 'react-router-dom';

/**
* @author
* @function SideBar
**/

const SideBar = (props) => {


    const[posts, setPosts] =useState([]);

   
    useEffect(()=>{
     
     const posts = blogPost.data;
     setPosts(posts);
 
    },posts);
 





  return(
      <div className ="sidebarContainer">
          <Card style={{marginBottom:"20px", padding: '20px', boxSizing: "border-box"}}>
              <div className="cardHeader">

                  <span>About us</span>
                  </div>

                  <div className="profileImageContainer">

                  <img src={require('../../blogPostImages/cestovat-chladny-dno-jednoduchost-2868847.jpg')} alt="Post img"></img>

                  </div>
                  <div className="cardBody">

                      <p className="personalBio">My name is Yulia I am a software deveoper specialization in Front End Developement/.... :)</p>
                  </div>

         </Card>

         <Card style={{marginBottom:"20px", padding: '20px', boxSizing: "border-box"}}>
              <div className="cardHeader">

                  <span>About us</span>
                  </div>

                 

         </Card>

          <Card style={{marginBottom:"20px", padding: '20px', boxSizing: "border-box"}}>
              <div className="cardHeader">

                  <span>Recent Posts</span>
                  </div>


                <div className="recentPosts">

                    {
                        posts.map(post =>{
                            return(
                                <NavLink to ={'posts/${post.id}'}>
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

export default SideBar