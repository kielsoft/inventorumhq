import React from 'react'
import Link from 'next/link'
import { AppContext } from '../app/context';


export default class Index extends React.Component {
    static contextType = AppContext;

    componentDidMount() {
        this.context.setPageTitle("Welcome to InventorumHQ");
    }

    render() {
        return <React.Fragment>
            <h1>Welcome to Inventorum</h1>
            Goto{' '}<Link href="/users"><a>Users List</a></Link>
        </React.Fragment>
    }
}
