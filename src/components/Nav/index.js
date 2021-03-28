import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'
import "./style.css";

function Nav() {
    return (
        <div>
            <Navbar  bg="dark" className="navbar p-0 justify-content-right" role="navigation">

                {/* <!-- Start main navigation links --> */}
                <div className="navbar">
                    <Link className="nav-link" to="/home">Home</Link> 
                    <Link className="nav-link" to="/home">|</Link>
                    <Link className="nav-link" to="/portfolio">Portfolio</Link><Link className="nav-link" to="/contact">|</Link>
                    <Link className="nav-link" to="/contact">Contact</Link>

                </div>
                {/* <!-- End main navigation links-->     */}

            </Navbar> 
        </div>
    )
}

export default Nav;