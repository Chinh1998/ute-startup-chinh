import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './aside.css';
import FiveMostPost from './FiveMostPost';

class Aside extends Component{
    constructor() {
        super();
        this.state = {
         posts: []
        };
      }
          async componentDidMount() {
            const response = await fetch('/news/most-views');
            const body = await response.json();
            this.setState({ posts: body });
          }
    render(){
        const { posts } = this.state;
        return(
            <div className="aside">
               <Link to="/it" className="btn btn-primary">Được Xem Nhiều Nhất</Link>
               {posts.map(post =>
                          <FiveMostPost key={post.id} post={post}/>
                      )}
            </div>
        );
    }

}

export default Aside;