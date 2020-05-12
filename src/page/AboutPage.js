import React, { Component } from "react";
import About from "../component/content/About";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import Vertical from "../component/aside/Vertical";
import './page.css'
class AboutPage extends Component{

    render(){
        return(
          <div className="App">
                <Header history={this.props.history}/>
            <div className="section">
                <div>
                    <Vertical/>
                </div>
                <div className="Container">
                <About/>
                </div>
            </div>
            <div className="footer" >
                <Footer/>
            </div>
      </div>
            
        );
    }
}
export default AboutPage;