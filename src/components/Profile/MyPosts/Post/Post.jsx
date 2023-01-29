import React, { Component } from 'react';
import classes from './Post.module.css';


function Post(text) {
  return (
    <div className={classes.item}>
      <img src='https://www.shareicon.net/data/512x512/2016/05/29/772559_user_512x512.png'/>
      <div>{text.toWhat}</div>
    </div>
  );
}

export default Post;