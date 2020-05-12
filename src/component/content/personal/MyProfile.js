import React, {Component} from 'react';
import ls from 'local-storage';
import PostsTable from './PostsTable';
import './myprofile.css'

class MyProfile extends Component{
  constructor() {
    super();
    this.state = {
      isLoading: true,
      posts: []
    };
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
    const response = await fetch('/news/mypost',requestOptions);
    const body = await response.json();
    if(response.ok){
      
    }else{
      this.props.history.push('/login')
    }
    this.setState({ posts: body, isLoading: false });
  }
render(){
    const { posts, isLoading } = this.state;
  
    if (isLoading) {
      return <p>Loading...</p>;
}
    return(
        <div className="myprofile">
            <PostsTable posts={posts} history={this.props.history}/>
        </div>
    );
}
}
export default MyProfile;