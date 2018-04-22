import React from 'react';
import { NavLink } from 'react-router-dom';

const Album = (props) => (
    <tr>
        <td>{props.count}</td>
        <td>{props.data.title}</td>
        <td><NavLink to={"/photos/" + props.data.id}>view</NavLink></td>
    </tr>
);

export default Album;