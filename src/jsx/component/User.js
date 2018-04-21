import React from 'react';

const User = (props) => (
    <tr key={props.data.id}>
        <td>{props.data.id}</td>
        <td>{props.data.name}</td>
        <td>{props.data.username}</td>
        <td>{props.data.email}</td>
        <td>{props.data.phone}</td>
        <td><a href="#">view</a></td>
        <td><a href="#">view</a></td>
    </tr>
);

export default User;