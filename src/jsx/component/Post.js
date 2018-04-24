import React from 'react';
import { NavLink } from 'react-router-dom';
import EditModal from './EditModal';

const Post = (props) => (
    <tr>
        <td>{props.count}</td>
        <td>{props.data.title}</td>
        <td>{props.data.body}</td>
        <td><NavLink to={"/postdetail/" + props.data.id + "/comments"}>view</NavLink></td>
        <td><EditModal /></td>
        <td><button>Delete</button></td>
    </tr>
);

export default Post;