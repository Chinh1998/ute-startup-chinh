import React, {Component} from 'react';
import PostNews from './PostNews';
import './allnews.css'

class AllNews extends Component{
    constructor() {
        super();
        this.state = {
         posts: []
        };
      }
      
      async componentDidMount() {
        const response = await fetch('/news');
        const body = await response.json();
        this.setState({ posts: body });
      }
     render() {
        const { posts } = this.state;
        return (
            <div className="post_app">
                {posts.map(post =>
                        <PostNews key={post.id} post={post}/>
                    )}
            </div>
        );
    }
}

export default AllNews;