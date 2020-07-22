import React from 'react';
import "./style.css";
import Card from '../../components/ui/card';
import BlogPost from '../../components/blogpost';
import SideBar from '../../components/sidebar';

/**
* @author
* @function Post
**/

const Post = (props) => {

console.log(props);

  return(
    <section className="container">
      <BlogPost {...props}/>
      <SideBar />
      
     


    </section>
   )

 }

export default Post