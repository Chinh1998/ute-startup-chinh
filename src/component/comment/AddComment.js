import React, { Component } from "react";
import ls from 'local-storage';
import './addComment.css';

class AddComment extends Component {
    constructor(props) {
        super(props);
        this.Submit = this.Submit.bind(this);
       
    }
    async Submit(event) {
        const token =ls.get('jwtToken');
        event.preventDefault();
        const data = {
            "content_cmt": this.content.value,
            "newsId": this.props.postId
        }
        
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer "+token
            },
            body: JSON.stringify(data)
        };
        await fetch('/comment', requestOptions).then((response) => {
            return response.json();
        }).then((result) => {
            this.props.updateComment()
        });
        this.content.value = "";
    }
    render(){
        
        return(
            <div className="addComment">
                <p className="btn btn-secondary">Your Comment</p>
                <form onSubmit={this.Submit}>
                    <div className="form-group">
                        <input type="text" ref={(ref)=> {this.content = ref}} className="form-control textComment"  
                        name="content_cmt" placeholder="write your comment"/>
                        <button type="submit" className="postComment" style={{float: "right"}}>Post Comment</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddComment;