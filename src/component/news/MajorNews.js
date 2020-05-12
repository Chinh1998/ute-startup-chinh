import React, {Component} from 'react';
import PostNews from '../news/PostNews';
import './majornews.css'

class MajorNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            posts: [],
        }
    }

    componentDidMount() {
        this.getData();
    }

    componentDidUpdate(prevProps) {
        if (this.props.majorId !== prevProps.majorId) {
            this.getData();
        }
    }

    async getData() {
        const majorId = this.props.majorId;
        const viewNews = await fetch('/major/'+majorId+"/news");
        const body = await viewNews.json();
        this.setState({
            loading: false,
            posts: body,
        });
    }

    render(){
        const { posts } = this.state;
        return (
            <div className="major-news">
                {posts.map(post =>
                        <PostNews key={post.id} post={post}/>
                    )}

            </div>
        );
    }
    

}

export default MajorNews;