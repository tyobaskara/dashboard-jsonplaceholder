import React from 'react';
import { Helmet } from 'react-helmet';
import Album from './component/Album';
import { Container } from 'semantic-ui-react';
import { Table } from 'semantic-ui-react';
 
export default class Albums extends React.Component {
    state = {
        albums: [],
        status: false
    }
  
    componentDidMount() {
        this.getPosts();
    }

    getPosts = () => {
        const id = this.props.match.params.id;
        const albumUrl = `https://jsonplaceholder.typicode.com/albums?userId=${id}`;

        fetch(albumUrl).then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Request failed!');
        }, networkError => {
            console.log(networkError.message);
        }
        ).then(jsonResponse => {
            if(jsonResponse != null) {
                this.setState({albums: jsonResponse, status: true});
            }
        });
    }
      
    render() {
        const metaTitle = this.props.match.params.username;

        const Albums = this.state.albums.map((album, index) => 
            <Album data={album} key={index} count={index + 1} username={this.props.match.params.username}/>
        );

        return (
            <div>
                <Helmet>
                    <title>Albums - {metaTitle}</title>
                    <meta name="title" content={metaTitle} />
                </Helmet>

                <div className="container-fluid">
                    <Container>
                        <h1 className="table-title">Albums List</h1>
                        <Table striped>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>No.</Table.HeaderCell>
                                    <Table.HeaderCell>Title</Table.HeaderCell>
                                    <Table.HeaderCell>detail</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                { !this.state.status && <Table.Row><Table.Cell colSpan="3">Loading...</Table.Cell></Table.Row> }
                                { Albums }
                            </Table.Body>
                        </Table>
                    </Container>
                </div>
            </div>
        )
    }
};