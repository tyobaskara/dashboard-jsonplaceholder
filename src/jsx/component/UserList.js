import React from 'react';
import User from './User';

export default class UserList extends React.Component {
    state = {
        users: [],
        status: false
    }
  
    componentDidMount() {
      this.getUsers();
    }

    getUsers = () => {
        const usersUrl = 'https://jsonplaceholder.typicode.com/users';

        fetch(usersUrl).then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Request failed!');
        }, networkError => {
            console.log(networkError.message);
        }
        ).then(jsonResponse => {
            if(jsonResponse != null) {
                this.setState({users: jsonResponse, status: true});
            }
        });
    }
  
    render() {
        const Users = this.state.users.map((user, index) => 
            <User data={user} />
        );

        return (
            <div>
                { !this.state.status && 'Loading...' }
                <table>
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Name</td>
                            <td>Username</td>
                            <td>Email</td>
                            <td>Phone</td>
                            <td>Albums</td>
                            <td>Posts</td>
                        </tr>
                    </thead>
                    <tbody>
                        { Users }
                    </tbody>
                </table>
            </div>
        );
    }

  };