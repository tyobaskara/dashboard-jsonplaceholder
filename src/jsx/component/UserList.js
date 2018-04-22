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
            <User data={user} key={index}/>
        );

        return (
            <div className="users">
                <table className="table table-responsive">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Posts</th>
                            <th>Albums</th>
                        </tr>
                    </thead>
                    <tbody>
                        { !this.state.status && <tr><td colSpan="7">Loading...</td></tr> }
                        { Users }
                    </tbody>
                </table>
            </div>
        );
    }

  };