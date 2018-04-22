import React from 'react';

const Comment = (props) => (
    <tr>
        <td>{props.count}</td>
        <td>{props.data.name}</td>
        <td>{props.data.email}</td>
        <td>{props.data.body}</td>
        <td><button>Edit</button></td>
        <td><button>Delete</button></td>
    </tr>
);

export default Comment;