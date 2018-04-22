import React from 'react';
import { Helmet } from 'react-helmet';
import Comment from './component/Comment';
 
export default class PostDetail extends React.Component {
    state = {
        posts: [],
        comments: [],
        status: false
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        const urls = [`https://jsonplaceholder.typicode.com/posts/${id}`, `https://jsonplaceholder.typicode.com/posts/${id}/comments`];

        Promise.all(urls.map(url =>
            fetch(url).then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Request failed!');
            }, networkError => {
                console.log(networkError.message);
            })
        )).then(jsonResponse => {
            if(jsonResponse != null) {
                this.setState({posts: jsonResponse[0], comments: jsonResponse[1], status: true});
            }
        })
    }
    render() {

        const Comments = this.state.comments.map((comment, index) => 
            <Comment data={comment} key={index} count={index + 1}/>
        );

        return (
            <div>
                <Helmet>
                    <title>Post Detail</title>
                </Helmet>

                <div className="container-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="comment-post">
                                    <div className="col-xs-2">
                                        <span>Title :</span>
                                    </div>
                                    <div className="col-xs-10">
                                        <h1>{this.state.posts.title}</h1>
                                    </div>
                                    <div className="col-xs-2">
                                        <span>Body :</span>
                                    </div>
                                    <div className="col-xs-10">
                                        <p>{this.state.posts.body}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="comment-list">
                                    <h2>Comments</h2>

                                    <table className="table table-responsive">
                                        <thead>
                                            <tr>
                                                <th>No.</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Body</th>
                                                <th colSpan="2"><button>Add New Comment</button></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            { !this.state.status && <tr><td colSpan="4">Loading...</td></tr> }
                                            { Comments }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};