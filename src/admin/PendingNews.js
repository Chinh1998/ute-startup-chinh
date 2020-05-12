import React, {Component} from 'react';
import ReactHtmlParser from 'react-html-parser';

class PendingNews extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            post:  [],
        }
    }
    componentDidMount() {
        this.getData();
    }

    componentDidUpdate(prevProps) {
        if (this.props.newsId !== prevProps.newsId) {
            this.getData();
        }
    }

    async getData(){
        const newsId = this.props.newsId;
        const viewNews = await fetch('/news/'+newsId);
        const body = await viewNews.json();
        console.log(newsId);
        this.setState({
            loading: false,
            post: body,
        });
    }

    render() {
        const {loading, post} = this.state;
        if (loading) {
               return (
                   <p>Loading...</p>
               );
        } else {
            return (
                <div className="contentNew">
                   <div className="viewBox" >
                        <h3>{post.title}</h3>
                        <img className="newimage" src={post.image} alt="" />
                        {ReactHtmlParser(post.content)}
                    </div>
                </div>
            );
        }
    }
   
}

export default PendingNews;