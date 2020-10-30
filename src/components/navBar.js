import React from 'react'
import {Link} from "react-router-dom";

export default function navBar() {
    return (
        <nav>
            <navBar>
                <Link to="/">
                    Homepage
                </Link>
                <Link to="/contactPage">
                    Contact Us
                </Link>
            </navBar>
        </nav>
    )
}
