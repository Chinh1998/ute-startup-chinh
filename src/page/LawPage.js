import React, { Component } from "react";
import Header from "../component/header/Header";
import Vertical from "../component/aside/Vertical";
import Footer from "../component/footer/Footer";
import Law from "../component/content/law/Law";

class LawPage extends Component{

    render(){
      return(
          <div className="App">
          <Header history={this.props.history}/>
          <div className="section">
              <div>
                  <Vertical/>
              </div>
                <div className="Container">
                <Law/>
              </div>
          </div>
          <div className="footer" >
              <Footer/>
          </div>
      </div>
        );
    }
}
export default LawPage;