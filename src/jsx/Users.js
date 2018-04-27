import React from 'react';
import { Helmet } from 'react-helmet';
import UserList from './component/UserList';
import { Container } from 'semantic-ui-react';

const Users = () => (
    <div>
        <Helmet>
            <title>Home - Prasetya Aji Baskara</title>
        </Helmet>

        <div className="container-fluid">
            <Container>
                <h1 className="table-title">Users List</h1>
                <UserList />
            </Container>
        </div>
    </div>
)

export default Users;