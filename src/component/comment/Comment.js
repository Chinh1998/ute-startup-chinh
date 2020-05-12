import React, {Component} from "react"
import people from "./microsoft-img.png"
import ls from 'local-storage'
import "./comment.css"
class Comment extends Component{
    isMine(){
        const {comment} = this.props;
        const me  = ls.get("user");
        if(me!=null){
            return comment.user.id===me.id;
        }
        return null;
    }
   render(){
        const {comment} = this.props;
        return(
            <div className="comment">
                <div className="box_comment">
                    <div  className="mancomment" ><img src={people} alt="" /></div>
                    <p className="user">{comment.user.username}: {comment.user.position.name}</p>
                </div>
                <div className="content_comment">
                    <div className="box">
                        {comment.content}
                    </div>
                {this.isMine()  && 
                    <div className="action">
                        <button className="btn btn-danger" onClick={this.props.deleteComment}>Xóa </button>
                </div>
                }
                </div>
            </div>
        );
    }
}
export default Comment;