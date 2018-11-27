import React from 'react'

import { AppContext } from '../../context';
import SideNav from '../../components/SideNav';
import TopNav from '../../components/TopNav';



import "./style.scss";

export default class LayoutDefault extends React.Component {
    static contextType = AppContext;

    componentDidMount = () => {
        const M = require("materialize-css");
        M.AutoInit();
    }

    componentDidUpdate(){
        document.title = this.context.currentPageTitle;
    }

    render() {
        return <React.Fragment>
        <SideNav />
        <header className="navbar-fixed">
            <TopNav />
        </header>
        <main>
            {this.props.children}
        </main>
        <footer>

        </footer>
    </React.Fragment>
    }
}




