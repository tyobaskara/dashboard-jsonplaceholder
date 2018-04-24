import React from 'react';
import { Helmet } from 'react-helmet';
import Post from './component/Post';
import { Container } from 'semantic-ui-react';

export default class Posts extends React.Component {
    state = {
        posts: [],
        status: false
    }
  
    componentDidMount() {
        this.getPosts();
    }

    getPosts = () => {
        const id = this.props.match.params.id;
        const postsUrl = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;

        fetch(postsUrl).then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Request failed!');
        }, networkError => {
            console.log(networkError.message);
        }
        ).then(jsonResponse => {
            if(jsonResponse != null) {
                this.setState({posts: jsonResponse, status: true});
            }
        });
    }
      
    render() {
        const metaTitle = this.props.match.params.username;

        const Posts = this.state.posts.map((post, index) => 
            <Post data={post} key={index} count={index + 1} username={this.props.match.params.username}/>
        );

        return (
            <div>
                <Helmet>
                    <title>Posts - {metaTitle}</title>
                    <meta name="title" content={metaTitle} />
                </Helmet>

                <div className="container-fluid">
                    <Container>
                        <h1>Posts List</h1>
                        <table className="table table-responsive">
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Title</th>
                                    <th>Body</th>
                                    <th>Detail</th>
                                    <th colSpan="2"><button>Add New Post</button></th>
                                </tr>
                            </thead>
                            <tbody>
                                { !this.state.status && <tr><td colSpan="4">Loading...</td></tr> }
                                { Posts }
                            </tbody>
                        </table>
                    </Container>
                </div>
            </div>
        )
    }
};