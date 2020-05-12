import React, { Component } from 'react';
import './homepage.css';
import '../bootstrap.min.css';
import Admin from '../admin/Admin';

class AdminPage extends Component {
    render() {
       return (
        <div className="">
                <Admin history={this.props.history}/>
    </div>
  );
}
}

export default AdminPage;
