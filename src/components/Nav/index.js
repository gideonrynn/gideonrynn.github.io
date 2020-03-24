import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css";

function Nav() {
    return (
        <div>
            <nav className="navbar p-0 justify-content-around" role="navigation">

                <Link className="navbar-brand p-sm-3 p-md-3 p-lg-3 px-5 py-3" to="/"><h1>Sarah Dillard</h1></Link>

                {/* <!-- Start main navigation links --> */}
                <div className="navbar">
                    <Link className="nav-link" to="/about">About</Link> 
                    <Link className="nav-link" to="/about">|</Link>
                    <Link className="nav-link" to="/portfolio">Portfolio</Link><Link className="nav-link" to="/contact">|</Link>
                    <Link className="nav-link" to="/contact">Contact</Link>

                </div>
                {/* <!-- End main navigation links-->     */}

            </nav> 
        </div>
    )
}

export default Nav;