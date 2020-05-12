import React, {Component} from 'react';
import Approved from './Approved';
import './admin.css'
import ls from 'local-storage'

class AdminApprove extends Component{
    constructor() {
        super();
        this.state = {
         posts: []
        };
      }
      
      async componentDidMount() {
        const response = await fetch('/news/pendingpost');
        const body = await response.json();
        this.setState({ posts: body });
      }

     render() {
        const { posts } = this.state;
        return (
            <div className="admin_approve">
                <div className="header_approve"><h2 className="btn btn-secondary">
                    Danh Sách Bài Đăng Chờ Phê Duyệt</h2></div>
               {posts.map(post =>
                        <Approved key={post.id} post={post} accept={() => this.accept(post.id)} delete={() => this.delete(post.id)}/>
                    )}
            </div>
        );
    }
    async accept(postId) {
        const token = ls.get('jwtToken');
        const requestOptions = {
            method: 'PUT',
            headers: {
               'Authorization': "Bearer " + token
            },
          };
         await fetch("/news/approve/" + postId, requestOptions).then((response) => {
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
    
    async delete(postId) {
        const jwtToken = ls.get('jwtToken');
        const requestOptions = {
            method: 'DELETE',
            headers: {
               'Authorization': "Bearer" + jwtToken
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
export default AdminApprove;