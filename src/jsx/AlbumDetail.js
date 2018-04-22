import React from 'react';
import { Helmet } from 'react-helmet';
import Photo from './component/Photo';
 
export default class Posts extends React.Component {
    state = {
        photos: [],
        status: false
    }
  
    componentDidMount() {
        this.getPosts();
    }

    getPosts = () => {
        const id = this.props.match.params.id;
        const postsUrl = `https://jsonplaceholder.typicode.com/photos?albumId=${id}`;

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
                this.setState({photos: jsonResponse, status: true});
            }
        });
    }
      
    render() {
        const Photos = this.state.photos.map((photo, index) => 
            <Photo data={photo} key={index} count={index + 1}/>
        );

        return (
            <div>
                <Helmet>
                    <title>Photos</title>
                </Helmet>

                <div className="container-fluid">
                    <div className="container">
                        <h1>Photos</h1>
                        <ul className="photos-list">
                            { !this.state.status && <li colSpan="4">Loading...</li> }
                            { Photos }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
};