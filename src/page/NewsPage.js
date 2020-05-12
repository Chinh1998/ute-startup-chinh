import React, { Component } from "react";
import Header from "../component/header/Header";
import Vertical from "../component/aside/Vertical";
import News from "../component/news/News";
import Footer from "../component/footer/Footer";
class NewsPage extends Component{

    render(){
      const newsId = this.props.match.params.newsId;
        return(
          <div className="App">
          <Header history={this.props.history}/>
          <div className="section">
              <div>
                  <Vertical/>
              </div>
              <div className="Container">
              <News newsId={newsId} history={this.props.history}/>
              </div>
          </div>
          <div className="footer" >
              <Footer/>
          </div>
      </div>
        );
    }
}
export default NewsPage;