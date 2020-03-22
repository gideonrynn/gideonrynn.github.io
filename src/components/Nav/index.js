import React from 'react'
import "./style.css";

function Nav() {
    return (
        <div>
            <nav className="navbar p-0 justify-content-around navbar-light" role="navigation">

                <a className="navbar-brand p-sm-3 p-md-3 p-lg-3 px-5 py-3" href="index.html"><h1>Sarah Dillard</h1></a>

                {/* <!-- Start main navigation links --> */}
                <div className="navbar">
                    <a className="nav-link" href="index.html">About</a> 
                    <a className="nav-link" href="test.html">|</a>
                    <a className="nav-link" href="portfolio.html">Portfolio</a><a class="nav-link" href="test.html">|</a>
                    <a className="nav-link" href="contact.html">Contact</a>

                </div>
                {/* <!-- End main navigation links-->     */}

            </nav> 
        </div>
    )
}

export default Nav;