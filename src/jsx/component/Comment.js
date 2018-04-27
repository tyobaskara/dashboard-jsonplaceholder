import React from 'react';
import { Table } from 'semantic-ui-react';

const Comment = (props) => (
    <Table.Row>
        <Table.Cell>{props.count}</Table.Cell>
        <Table.Cell>{props.data.name}</Table.Cell>
        <Table.Cell>{props.data.email}</Table.Cell>
        <Table.Cell>{props.data.body}</Table.Cell>
        <Table.Cell><button>Edit</button></Table.Cell>
        <Table.Cell><button>Delete</button></Table.Cell>
    </Table.Row>
);

export default Comment;