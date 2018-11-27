import React from 'react';

import { AppContext, AppMainContextConsumer } from '../../context';

import "./style.scss";

export default class TopNav extends React.Component {
    static contextType = AppContext;
    render(){
        return <AppMainContextConsumer>
            {(contextState:any)=>{
                return <nav className="white z-depth-0">
                <div className="nav-wrapper">
                    <a href="#" data-target="slide-out" className="sidenav-trigger button-collapse left"><i className="material-icons black-text">menu</i></a>
                    <a className="page-title left">{contextState.currentPageTitle}</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="sass.html">Sass</a></li>
                        <li><a href="badges.html">Components</a></li>
                        <li><a href="collapsible.html">JavaScript</a></li>
                    </ul>
                </div>
            </nav>
            }}
        </AppMainContextConsumer> 
    }
} 
