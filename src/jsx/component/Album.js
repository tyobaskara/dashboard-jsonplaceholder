import React from 'react';
import { NavLink } from 'react-router-dom';

const Album = (props) => (
    <tr>
        <td>{props.count}</td>
        <td>{props.data.title}</td>
        <td><NavLink to={"/albums/" + props.username + "/" + props.data.id + "/detail"}>view</NavLink></td>
    </tr>
);

export default Album;