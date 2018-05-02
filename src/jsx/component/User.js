import React from 'react';
import { NavLink } from 'react-router-dom';
import { Table } from 'semantic-ui-react'

const User = (props) => (
    <Table.Row>
        <Table.Cell>{props.data.id}</Table.Cell>
        <Table.Cell>{props.data.name}</Table.Cell>
        <Table.Cell>{props.data.username}</Table.Cell>
        <Table.Cell>{props.data.email}</Table.Cell>
        <Table.Cell>{props.data.phone}</Table.Cell>
        <Table.Cell><NavLink to={"/posts/" + props.data.username + "/" + props.data.id}>Posts</NavLink></Table.Cell>
        <Table.Cell><NavLink to={"/albums/" + props.data.username + "/" + props.data.id}>Albums</NavLink></Table.Cell>
    </Table.Row>
);

export default User;