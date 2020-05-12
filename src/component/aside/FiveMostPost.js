import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './fivepost.css'
import eye from "./eye.png";
class FiveMostPost extends Component{
    
     render() {
        const { post } = this.props;
        if(post.approved===true){
        return (
            <div className="fivenews">
                <Link to={"/viewnews/"+post.id} className="title" >{post.title}
                    <div className="view">
                        <img className="img_views" src={eye} alt=""/>
                        <p className="numberview">{post.view}</p>
                    </div>
                    <img className="img_news" src={post.image} alt=""/>
                </Link>
            </div>
            );
        }
        return null;
    }      
    }

export default FiveMostPost;