import React from 'react';
import { Helmet } from 'react-helmet';
import Album from './component/Album';
 
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
                    <div className="container">
                        <h1>Albums List</h1>
                        <table className="table table-responsive">
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Title</th>
                                    <th>detail</th>
                                </tr>
                            </thead>
                            <tbody>
                                { !this.state.status && <tr><td colSpan="4">Loading...</td></tr> }
                                { Albums }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
};