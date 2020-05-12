import React, {Component} from 'react';
import ls from 'local-storage'
import Comment from '../comment/Comment';
import people from "./microsoft-img.png"
import './news.css'
import AddComment from '../comment/AddComment';
import ReactHtmlParser from 'react-html-parser';
import { Link } from 'react-router-dom';

class News extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            post: {},
            comments: []
        }
    }
    componentDidMount() {
        this.getData();
    }

    componentDidUpdate(prevProps) {
        if (this.props.newsId !== prevProps.newsId) {
            this.getData();
        }
    }

    isLoggedIn() {
        const token = localStorage.getItem("jwtToken");
        return token !== undefined && token !== null;
    }
    async getData(){
        const newsId = this.props.newsId;
        const viewNews = await fetch('/news/'+newsId);
        const body = await viewNews.json();
        const commentNews = await fetch('/news/'+newsId+'/comments');
        const comments = await commentNews.json();
        this.setState({
            loading: false,
            post: body,
            comments: comments
        });
        console.log(body);
    }

    render() {
        const {loading, post, comments} = this.state;
        if (loading) {
               return (
                   <p>Loading...</p>
               );
        } else {
            return (
                <div className="contentNew">
                    <div className="user">
                        <img className="userpost" src={people} alt=""/>
                        <p className="userName">{post.user.username+" "}</p>
                        <Link to={"/major/"+post.majors.id} className="majorName"> > {post.majors.name}</Link>
                    </div> 
                    <div className="viewBox" >
                        <h3 className="post_title">{post.title}</h3>
                        <img className="newimage" src={post.image} alt="" />
                        {ReactHtmlParser(post.content)}
                    </div>
                    <div className="showComment">
                        <div className="show">
                            <p className="btn btn-primary">Comment</p>
                        </div>
                        {comments.map(comment =>
                            <Comment key={comment.id} comment={comment} deleteComment={() => this.deleteComment(comment.id)}/>
                        )}
                    </div>
                    {
                    this.isLoggedIn()
                    && <AddComment postId={post.id} updateComment={() => this.updateComment()}/>
                    }
                </div>
            );
        }
    }
    async updateComment() {
        const newsId = this.props.newsId;
        const commentNews = await fetch('/news/'+newsId+'/comments');
        const comments = await commentNews.json();
        this.setState({
            comments: comments
        });
      }

      //--------------------------------
      async deleteComment(commentId) {
        // SEND AJAX "/news/"+ postID
        const token = ls.get('jwtToken');
        const requestOptions = {
            method: 'DELETE',
            headers: {
                'Authorization': "Bearer " + token
            },
          };
         const response= await fetch("/comment/" + commentId, requestOptions);
         if(response.ok){
            const newsId = this.props.newsId;
            const commentNews = await fetch('/news/'+newsId+'/comments');
            const comments = await commentNews.json();
            this.setState({
                comments: comments
            });
        }
        else {
            alert("Bạn chưa đăng nhập");
            this.props.history.push("/login");
        }
    }
}

export default News;