import React, { Component } from "react";
import Header from "../component/header/Header";
import Vertical from "../component/aside/Vertical";
import MyProfile from "../component/content/personal/MyProfile";
import Footer from "../component/footer/Footer";
class MyProfilePage extends Component{

    render(){
        return(
          <div className="App">
          <Header history={this.props.history}/>
          <div className="section">
              <div>
                  <Vertical/>
              </div>
              <div className="Container">
                <MyProfile history={this.props.history}/>
              </div>
          </div>
          <div className="footer" >
              <Footer/>
          </div>
        </div>
      );
    }
}
export default MyProfilePage;