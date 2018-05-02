import React from 'react';
import { Table } from 'semantic-ui-react';
import EditComment from './EditComment';
import DeleteComment from './DeleteComment';

const Comment = (props) => (
    <Table.Row id={'comment-list-' + props.data.id}>
        <Table.Cell>{props.count}</Table.Cell>
        <Table.Cell>{props.data.name}</Table.Cell>
        <Table.Cell>{props.data.email}</Table.Cell>
        <Table.Cell>{props.data.body}</Table.Cell>
        <Table.Cell><EditComment data={props.data}/></Table.Cell>
        <Table.Cell><DeleteComment data={props.data}/></Table.Cell>
    </Table.Row>
);

export default Comment;