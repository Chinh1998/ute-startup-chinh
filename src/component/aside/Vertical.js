import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './vertical.css';
import FiveNewPost from './FiveNewPosts';


class Vertical extends Component{
  constructor() {
    super();
    this.state = {
     posts: []
    };
  }
      async componentDidMount() {
        const response = await fetch('/news/recent-post');
        const body = await response.json();
        this.setState({ posts: body });
      }
     render() {
      const { posts } = this.state;
       return (
            <div className="vertical">
              <Link to="/it" className="btn btn-primary">Bài Viết Mới Nhất</Link>
                  {posts.map(post =>
                          <FiveNewPost key={post.id} post={post}/>
                      )}
            </div>
           
        );

    }
}
export default Vertical;