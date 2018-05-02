import React from 'react';
import { Helmet } from 'react-helmet';
import Post from './component/Post';
import { Container } from 'semantic-ui-react';
import { Table } from 'semantic-ui-react';
import AddPost from './component/AddPost';

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
                        <h1 className="table-title">Posts List</h1>
                        <Table id="post-list" striped>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>No.</Table.HeaderCell>
                                    <Table.HeaderCell>Title</Table.HeaderCell>
                                    <Table.HeaderCell>Body</Table.HeaderCell>
                                    <Table.HeaderCell></Table.HeaderCell>
                                    <Table.HeaderCell colSpan="2"><AddPost/></Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                { !this.state.status && <Table.Row><td colSpan="6">Loading...</td></Table.Row> }
                                { Posts }
                            </Table.Body>
                        </Table>
                    </Container>
                </div>
            </div>
        )
    }
};