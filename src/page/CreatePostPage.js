import React, { Component } from "react";
import Header from "../component/header/Header";
import Vertical from "../component/aside/Vertical";
import CreatePost from "../component/content/personal/CreatePost";
import Footer from "../component/footer/Footer";
class CreatePostPage extends Component{

    render(){
        return(
          <div className="App">
          <Header history={this.props.history}/>
          <div className="section">
              <div>
                  <Vertical/>
              </div>
              <div className="Container">
              <CreatePost history={this.props.history}/>
              </div>
          </div>
          <div className="footer" >
              <Footer/>
          </div>
      </div>
      );
    }
}
export default CreatePostPage;