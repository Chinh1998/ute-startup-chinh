import React, {Component} from 'react';
import Slide from '../news/Slide';
import './content.css'
import AllNews from '../news/AllNews';

class Content extends Component{
   
    render(){
       return(
            <div className="content" >
              <div>
               <Slide/>
               </div>
               <div className="content_post">
                <AllNews/>
                </div>
            </div>
        );
    }
}
export default Content;