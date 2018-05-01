import React from 'react';
import User from './User';
import { Table } from 'semantic-ui-react'

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
                <Table striped>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Id</Table.HeaderCell>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Username</Table.HeaderCell>
                            <Table.HeaderCell>Email</Table.HeaderCell>
                            <Table.HeaderCell>Phone</Table.HeaderCell>
                            <Table.HeaderCell></Table.HeaderCell>
                            <Table.HeaderCell></Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        { !this.state.status && <Table.Row><Table.Cell colSpan="7">Loading...</Table.Cell></Table.Row> }
                        { Users }
                    </Table.Body>
                </Table>
            </div>
        );
    }

  };