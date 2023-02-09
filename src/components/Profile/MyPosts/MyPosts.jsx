import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx';


const MyPosts = () => {
    return (
        <div className={classes.postsBlock}>
            <div>
                <h3>My posts:</h3>
            </div>

            <div className={classes.postWrapper}>
                <div>
                    <textarea className={classes.textrrr}/>
                </div>
                <div>
                    <button className={classes.btna}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                <Post toWhat='Have a nice day!'/>
                <Post toWhat='Hoping to get a job soon...'/>
                <Post toWhat='I am new in REACT'/>
                <Post toWhat='Hello World!'/>
            </div>
        </div>
    );
}

export default MyPosts;