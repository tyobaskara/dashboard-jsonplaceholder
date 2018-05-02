import React from 'react';
import { NavLink } from 'react-router-dom';
import EditPost from './EditPost';
import DeletePost from './DeletePost';
import { Table } from 'semantic-ui-react';

const Post = (props) => (
    <Table.Row id={'postListRow-' + props.data.id}>
        <Table.Cell>{props.count}</Table.Cell>
        <Table.Cell>{props.data.title}</Table.Cell>
        <Table.Cell>{props.data.body}</Table.Cell>
        <Table.Cell><NavLink to={"/postdetail/" + props.data.id + "/comments"}>Detail</NavLink></Table.Cell>
        <Table.Cell><EditPost data={props.data.id} /></Table.Cell>
        <Table.Cell><DeletePost data={props.data.id}/></Table.Cell>
    </Table.Row>
);

export default Post;