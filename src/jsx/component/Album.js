import React from 'react';
import { NavLink } from 'react-router-dom';
import { Table } from 'semantic-ui-react';

const Album = (props) => (
    <Table.Row>
        <Table.Cell>{props.count}</Table.Cell>
        <Table.Cell>{props.data.title}</Table.Cell>
        <Table.Cell><NavLink to={"/photos/" + props.data.id}>Detail</NavLink></Table.Cell>
    </Table.Row>
);

export default Album;