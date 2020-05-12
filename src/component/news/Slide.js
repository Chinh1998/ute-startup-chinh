import React, {Component} from 'react';
import './slide.css'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import { Link } from 'react-router-dom';



class Slide extends Component {
    constructor() {
        super();
        this.state = {
         posts: []
        };
      }
      
      async componentDidMount() {
        const response = await fetch('/news/recent-post');
        const body = await response.json();
        this.setState({ posts: body });
      }
    render(){
        const { posts } = this.state;
        const post_image=posts.map(function name(params) {
            return params.image
        });
        const postID=posts.map(function name(params) {
            return params.id
        });
        return(
            <div className="slider">
                <Slider autoplay={2000}>
                    <Link to={"/viewnews/"+postID[0]}> <img src={post_image[0]} alt=""/></Link> 
                    <Link to={"/viewnews/"+postID[1]}><img src={post_image[1]} alt=""/></Link>
                    <Link to={"/viewnews/"+postID[2]}><img src={post_image[2]} alt=""/></Link>
                    <Link to={"/viewnews/"+postID[3]}><img src={post_image[3]} alt=""/></Link>
                    <Link to={"/viewnews/"+postID[4]}><img src={post_image[4]} alt=""/></Link>
                </Slider>  
                </div>
        );

    }
}
export default Slide;