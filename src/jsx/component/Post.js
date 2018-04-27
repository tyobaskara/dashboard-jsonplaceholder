import React from 'react';
import { NavLink } from 'react-router-dom';
import EditModal from './EditModal';
import { Table } from 'semantic-ui-react'

const Post = (props) => (
    <Table.Row>
        <Table.Cell>{props.count}</Table.Cell>
        <Table.Cell>{props.data.title}</Table.Cell>
        <Table.Cell>{props.data.body}</Table.Cell>
        <Table.Cell><NavLink to={"/postdetail/" + props.data.id + "/comments"}>view</NavLink></Table.Cell>
        <Table.Cell><EditModal /></Table.Cell>
        <Table.Cell><button>Delete</button></Table.Cell>
    </Table.Row>
);

export default Post;