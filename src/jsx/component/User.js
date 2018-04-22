import React from 'react';
import { NavLink } from 'react-router-dom';

const User = (props) => (
    <tr>
        <td>{props.data.id}</td>
        <td>{props.data.name}</td>
        <td>{props.data.username}</td>
        <td>{props.data.email}</td>
        <td>{props.data.phone}</td>
        <td><NavLink to={"/posts/" + props.data.username + "/" + props.data.id}>view</NavLink></td>
        <td><NavLink to={"/albums/" + props.data.username + "/" + props.data.id}>view</NavLink></td>
    </tr>
);

export default User;