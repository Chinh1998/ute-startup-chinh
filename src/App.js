import React, { Component } from 'react';
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import './App.css';
import './bootstrap.min.css';
import HomePage from './page/HomePage';
import LoginPage from './page/LoginPage';
import About from './page/AboutPage';
import MajorNewsPage from './page/MajorNewsPage';
import RegisterPage from './page/RegisterPage';
import MyProfilePage from './page/MyProfilePage';
import PersonalPage from './page/PersonalPage';
import NewsPage from './page/NewsPage';
import CreatePostPage from './page/CreatePostPage';
import LawPage from './page/LawPage';
import AdminPage from './page/AdminPage';
import PendingNewsPage from './page/PendingNewsPage';
import AdminPendingNewsPage from './page/AdminPendingNewsPage';

class App extends Component {
  render(){
    return (
      <Router>
        <Switch>
            <Route path="/admin" component={AdminPage}/>
            <Route exact path="/" component={HomePage}/>
            <Route path="/login" component={LoginPage}/>
            <Route path="/about" component={About}/>
            <Route path="/major/:majorId" component={MajorNewsPage}/>
            <Route path="/register" component={RegisterPage}/>
            <Route path="/my_profile" component={MyProfilePage}/>
            <Route path="/my_pendingnews" component={PendingNewsPage}/>
            <Route path="/users/:userId" component={PersonalPage}/>
            <Route path="/viewpendingnews/:newsId" component={AdminPendingNewsPage}/>
            <Route path="/viewnews/:newsId" component={NewsPage}/>
            <Route path="/news/post" component={CreatePostPage}/>
            <Route path="/law" component ={LawPage}/>
            <Route component={HomePage}/>
        </Switch>
      </Router>
    );
}
}

export default App;
