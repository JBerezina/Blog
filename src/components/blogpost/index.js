import React,{useState, useEffect} from 'react';
import "./style.css";
import Card from '../ui/card';
import blogPost from '../../data/blog.json';

/**
* @author
* @function BlogPost
**/

const BlogPost = (props) => {

    const[post, setPost] =useState({});

   
   useEffect(()=>{
    const postId = props.match.params.postId;
    const post = blogPost.data.find(post =>post.id == postId);
    setPost(post);

   },post);


  return(
    
      <div className = "blogPostContainer">
          <Card>
             <div className="blogHeader">
             <span className="blogCategory">Featured</span>
             <h1 className="postTitle">{post.blogTitle}</h1>
              <span className="postedBy">date, ghghghghhghghgh</span>
             </div>

             <div className="postImage">
                 <img src={require('../../blogPostImages/memories-from.jpg')} alt="Post img"></img>

             </div>

             <div className="postContent">
                 <h3>Post Title</h3>
                 <p>blfl</p>
             </div>
          </Card>
      </div>
    
   )

 }

export default BlogPost