import React from 'react';
import ReactDOM from 'react-dom';
import Link from './Link';

export default class Navigation extends React.Component{
    render(){
        return (
            <nav className="navbar">
                <div className="container">
                    <ul className="nav navbar-nav">
                        <li><Link href="/" activeClassName="active"><a>Home</a></Link></li>
                        <li><Link href="/pageone" activeClassName="active"><a>Page 1</a></Link></li>
                    </ul>
                </div>
            </nav>
        );
    }

};