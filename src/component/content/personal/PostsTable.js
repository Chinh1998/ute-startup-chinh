import React, { Component } from "react";
import ls from 'local-storage'
import './PostsTable.css';
import NewsRow from "./NewsRow";


class PostsTable extends Component {

    constructor(props) {
        super(props);
        const { posts } = this.props;
        this.state = {
            posts: posts
        }
    }

    render() {
        const { posts } = this.state;
        return (
            <center>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Hình Ảnh</th>
                        <th scope="col">Tiêu Đề</th>
                        <th scope="col">Nội Dung</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map(post =>
                        <NewsRow key={post.id} history={this.props.history}
                         post={post} deleteNews={() => this.deleteNews(post.id)}/>
                    )}
                </tbody>
            </table>
            </center>
        );
    }

   async deleteNews(postId) {
        const jwtToken = ls.get('jwtToken');
        const requestOptions = {
            method: 'DELETE',
            headers: {
               'Authorization': "Bearer" +jwtToken
            },
          };
         await fetch("/news/" + postId, requestOptions).then((response) => {
            return response.json();
          }).then((result) => {
            const { posts } = this.state;
            const newPosts = posts.filter(function(post) {
                return post.id !== postId;
            });

            this.setState({
                posts: newPosts
            });
          });
    }
}

export default PostsTable;