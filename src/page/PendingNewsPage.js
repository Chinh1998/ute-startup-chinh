import React, { Component } from "react";
import Header from "../component/header/Header";
import Vertical from "../component/aside/Vertical";
import Footer from "../component/footer/Footer";
import MyPendingNews from "../component/content/personal/MyPendingNews";
class PendingNewsPage extends Component{
    render(){
      return(
          <div className="App">
             <div className="App">
                <Header history={this.props.history}/>
            <div className="section">
                <div>
                      <Vertical/>
                  </div>
            </div>
            <div className="Container">
                <MyPendingNews history={this.props.history}/>
                </div>
            <div className="footer" >
                <Footer/>
            </div>
          </div>
        </div>
        );
    }
}
export default PendingNewsPage;