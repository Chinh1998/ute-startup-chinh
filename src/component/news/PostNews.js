import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import eye from "./eye.png";
import './postnews.css';
import ReactHtmlParser from 'react-html-parser';

class PostNews extends Component{
    render() {
        const { post } = this.props;
        return (
            <div className="postnews">
                <Link to={"/viewnews/"+post.id}>
                    <div className="view">
                        <img className="img_views" src={eye} alt=""/>
                        <p className="numberview">{post.view}</p>
                    </div>
                    <img className="img_news" src={post.image} alt=""/>
                    <div className="postnews_content">
                        <p className="title"  >{post.title}</p>
                        {ReactHtmlParser( post.content)}
                    </div>
                </Link>
            </div>
            );
    }  
}

export default PostNews;