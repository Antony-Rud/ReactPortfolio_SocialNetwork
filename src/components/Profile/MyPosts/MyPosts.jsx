import React, { Component } from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx';


const MyPosts = () => {
  return (
    <div className={classes.content}>
      <div>
        My posts:
      </div>

      <div className={classes.postWrapper}>
        <textarea className={classes.textrrr}/>
        <button className={classes.btna}>Add post</button>
      </div>

      <Post toWhat='Have a nice day!'/>
      <Post toWhat='Hoping to get a job soon...'/>
      <Post toWhat='I am new in REACT'/>
      <Post toWhat='Hello World!'/>
    </div>
  );
}

export default MyPosts;