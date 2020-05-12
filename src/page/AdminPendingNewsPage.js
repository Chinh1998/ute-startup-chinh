import React, { Component } from "react";
import Footer from "../component/footer/Footer";
import PendingNews from "../admin/PendingNews";

class AdminPendingNewsPage extends Component{
    render(){
      const newsId = this.props.match.params.newsId;
        return(
          <div className="App">
            <div className="Container">
                <PendingNews newsId={newsId} history={this.props.history}/>
            </div>
            <div className="footer" >
                <Footer/>
            </div>
          </div>
        );
    }
}
export default AdminPendingNewsPage;