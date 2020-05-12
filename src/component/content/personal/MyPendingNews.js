import React, {Component} from 'react';
import ls from 'local-storage';
import PostsTable from './PostsTable';

class MyPendingNews extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            posts:  [],
        }
    }
    async componentDidMount() {
        const token =ls.get('jwtToken')
        const requestOptions = {
          method: "GET",
          headers: {
              "Content-Type":"application/json",
              'Authorization': "Bearer " + token
          },
        };
        const response = await fetch('/news/mypendingpost',requestOptions);
        const body = await response.json();
        if(response.ok){
          
        }else{
          this.props.history.push('/login')
        }
        this.setState({ posts: body, isLoading: false });
      }

    render() {
        const {isLoading, posts} = this.state;
        if (isLoading) {
               return (
                   <p>Loading...</p>
               );
        } else {
            return (
                <div className="myprofile">
                   <PostsTable posts={posts}/>
                </div>
            );
        }
    }
   
}

export default MyPendingNews;