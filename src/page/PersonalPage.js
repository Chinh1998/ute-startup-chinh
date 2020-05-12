import React, { Component } from "react";
import Header from "../component/header/Header";
import Vertical from "../component/aside/Vertical";
import Personal from "../component/content/personal/Personal";
import Footer from "../component/footer/Footer";
class PersonalPage extends Component{

    render(){
        return(
          <div className="App">
                <Header history={this.props.history}/>
          <div className="section">
              <div>
                  <Vertical/>
              </div>
              <div className="Container">
              <Personal/>
              </div>
          </div>
          <div className="footer" >
              <Footer/>
          </div>
      </div>
      );
    }
}
export default PersonalPage;