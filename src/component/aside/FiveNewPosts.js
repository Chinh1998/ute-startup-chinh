import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './fivepost.css'
class FiveNewPost extends Component{
    
     render() {
        const { post } = this.props;
        if(post.approved===true){
        return (
            <div className="fivenews">
                <Link to={ "/viewnews/"+post.id} className="title">{post.title}
                    <img className="img_news" src={post.image} alt="" />
                </Link>
            </div>
            );
        }
        return null;
    }      
    }

export default FiveNewPost;