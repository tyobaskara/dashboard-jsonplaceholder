import React from 'react';
import { NavLink } from 'react-router-dom';

const Post = (props) => (
    <tr>
        <td>{props.count}</td>
        <td>{props.data.title}</td>
        <td>{props.data.body}</td>
        <td><NavLink to={"/posts/" + props.username + "/" + props.data.id + "/detail"}>view</NavLink></td>
    </tr>
);

export default Post;