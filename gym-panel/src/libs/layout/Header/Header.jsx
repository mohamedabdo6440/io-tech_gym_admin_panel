import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="header_section">
            <section className=" slider_section position-relative">
                <div className="container">
                    <div className="custom_nav2">
                        <nav className="navbar navbar-expand-lg custom_nav-container ">

                            <div className="d-flex  flex-column flex-lg-row">
                                <ul className="navbar-nav  ">
                                    <li className="nav-item active">
                                        <Link to="/" className="nav-link">Home </Link>
                                    </li>
                                    <li className="nav-item">

                                        <Link to="/classes" className="nav-link">Classes </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/clients" className="nav-link">Clients </Link>
                                    </li>

                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="slider_container">
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-7 offset-md-6 offset-md-5">
                                            <div className="detail-box">
                                                <h2>
                                                    Get Your Body
                                                </h2>
                                                <h1>
                                                    Fitness Here
                                                </h1>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Ut enim ad minim veniam
                                                </p>
                                                <div className="btn-box">
                                                    <Link to="/classes" className="btn-1">
                                                        Classes
                                                    </Link>
                                                    <Link to="/clients" className="btn-2">
                                                        Clients
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </header>
    )
}

export default Header
