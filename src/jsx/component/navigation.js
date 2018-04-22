import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';

export class Navigation extends React.Component{
    state = {
        NavList: ['USERS'],
        burgerToggle: 'off'
    }

    componentWillUpdate() {
        window.scrollTo(0,0);
    }

    burgerToggle = () => {
        if(this.state.burgerToggle === 'off') {
            document.getElementsByClassName('nav')[0].classList.add("nav-open");
            this.setState({burgerToggle: 'on'});
        }
        else {
            document.getElementsByClassName('nav')[0].classList.remove("nav-open");
            this.setState({burgerToggle: 'off'});
        }
    }

    offBurgerToggle = () => {
        document.getElementsByClassName('nav')[0].classList.remove("nav-open");
        this.setState({burgerToggle: 'off'});   
    }

    render(){
        let NavList = this.state.NavList;
        let that = this;
        NavList = NavList.map( (item,index) => {
            return (
                <li 
                    key={index} 
                    onClick={that.offBurgerToggle}>
                        <NavLink
                            activeClassName= 'active'
                            exact={true}
                            id={item}
                            to={index == 0 ? '/' : '/'+item.toLowerCase() }
                        >{item}</NavLink>
                </li>
            );
        });

        return (
            <nav className="nav nav--fixed">
                <div className="nav-wrap">
                    <div className="nav__logo" onClick={this.offBurgerToggle}>
                        <NavLink to="/"><img src="/assets/images/logo.png" alt="tyobaskara"/></NavLink>
                    </div>
                    <ul className="nav__menu">
                        {NavList}
                    </ul>
                    <div className="hamburgerSlim" onClick={this.burgerToggle}>
                    </div>
                </div>
            </nav>
        );
    }

};