import React from 'react';
import { NavLink } from 'react-router-dom';

const Post = (props) => (
    <tr>
        <td>{props.count}</td>
        <td>{props.data.title}</td>
        <td>{props.data.body}</td>
        <td><NavLink to={"/postdetail/" + props.data.id + "/comments"}>view</NavLink></td>
        <td><button>Edit</button></td>
        <td><button>Delete</button></td>
    </tr>
);

export default Post;