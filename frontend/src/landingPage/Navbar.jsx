import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg border-bottom">
            <div className="container">
                <Link to="/">
                    <img
                    src="media/images/logo.svg"
                    alt="Stonksy Logo"
                    style={{ height: '40px' }}
                    className="me-2"
                />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {/* Empty div to push nav links to right */}
                    <div className="me-auto"></div>

                    {/* Navigation Links - now aligned right */}
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link active mx-3" style={{
                                color: '#393b3dff',
                                fontWeight: '600'
                            }} aria-current="page" to="/signup">
                                Signup
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link mx-3" style={{
                                color: '#393b3dff',
                                fontWeight: '600'
                            }} to="/about">
                                About
                            </Link>
                        </li>
                        <li className="nav-item active mx-3">
                            <Link className="nav-link" style={{
                                color: '#393b3dff',
                                fontWeight: '600'
                            }} to="/product">
                                Product
                            </Link>
                        </li>
                        <li className="nav-item active mx-3">
                            <Link className="nav-link" style={{
                                color: '#393b3dff',
                                fontWeight: '600'
                            }} to="/pricing">
                                Pricing
                            </Link>
                        </li>
                        <li className="nav-item active mx-3">
                            <Link className="nav-link" style={{
                                color: '#393b3dff',
                                fontWeight: '600'
                            }} to="/support">
                                Support
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;