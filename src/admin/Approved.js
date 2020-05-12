import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './approved.css'
import ReactHtmlParser from 'react-html-parser';

class Approved extends Component{
    render() {
        const { post } = this.props;
        return (
            <div className="approved">
                <div className="approve_action">
                <button onClick={this.props.accept} className="btn btn-warning">Phê duyệt</button>
                <button onClick={this.props.delete} className="btn btn-danger">Delete</button>
                </div>
                <Link to={"/viewpendingnews/"+post.id}>
                <div className="pendingnews">
                <img className="img_news" src={post.image} alt=""/>
                <div className="postnews_content">
                    <Link to={"/viewpendingnews/"+post.id} className="title"  >{post.title}</Link>
                    <p>{ReactHtmlParser( post.content)}</p>
                    </div>
               </div>
               </Link>
                
               
            </div>
            );
        } 
}

export default Approved;