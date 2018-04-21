import React from 'react';
import { Helmet } from 'react-helmet';
import UserList from './component/UserList';

const Users = () => (
    <div>
        <Helmet>
            <title>Home - Prasetya Aji Baskara</title>
        </Helmet>

        <div className="container-fluid">
            <div className="container">
                <h1>Users</h1>
                <UserList />
            </div>
        </div>
    </div>
)

export default Users;