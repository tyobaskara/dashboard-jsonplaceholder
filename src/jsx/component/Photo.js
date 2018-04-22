import React from 'react';

const Photo = (props) => (
    <li>
        <img src={props.data.thumbnailUrl} alt={props.data.title}/>
    </li>
);

export default Photo;