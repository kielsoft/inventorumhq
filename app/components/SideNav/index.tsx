import React from "react";
import Link from "next/link";

import "./style.scss"

export default class SideNav extends React.Component {

    render() {
        return (
            <React.Fragment>
                <ul id="slide-out" className="sidenav sidenav-fixed">
                    <li className="">
                        <Link href="/">
                            <a className="logo" href="#"><img src="/static/images/inventorum_logo.png" /></a>
                        </Link>
                    </li>
                    <li className="">
                        <Link href="/pos">
                            <a className="">
                                <i className="material-icons">computer</i>Point of sales
                            </a>
                        </Link>
                    </li>
                    <li className="">
                        <Link href="/invoice_returns">
                            <a className="">
                                <i className="material-icons">insert_drive_file</i>Invoice &amp; returns 
                            </a>
                        </Link>
                    </li>
                    <li className="">
                        <Link href="/users">
                            <a className="">
                                <i className="material-icons">person</i>Contacts 
                            </a>
                        </Link>
                    </li>
                    <li className="">
                        <Link href="/inventory">
                            <a className="">
                                <i className="material-icons">assignment</i>Inventory 
                            </a>
                        </Link>
                    </li>
                    <li className="">
                        <Link href="/reports">
                            <a className="">
                                <i className="material-icons">receipt</i>Reports 
                            </a>
                        </Link>
                    </li>
                    <li className="">
                        <Link href="/settings">
                            <a className="">
                                <i className="material-icons">settings</i>Settings 
                            </a>
                        </Link>
                    </li>
                    <li className="">
                        <Link href="/imprint">
                            <a className="">
                                <i className="material-icons">security</i>Imprint 
                            </a>
                        </Link>
                    </li>
                </ul>
            </React.Fragment>
        );
    }
}
