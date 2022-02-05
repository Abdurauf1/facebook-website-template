import React from "react"
import "./navbar.css"
import navPhoto from "./images/nav-about-img.jpg"

class Navbar extends React.Component {
    render() {
        return (
            <>
                {/* <button className="show-nav-btn"></button> */}
                <nav>
                    <div className="container">
                        <i className="fab fa-wordpress-simple logo"></i>
                        <div className="input-icon-wrapper">
                            <input type="text" className="nav-input" placeholder="Search..." />
                            <div className="search-icon-wrapper">
                                <i className="fas fa-search search-icon"></i>
                            </div>
                        </div>

                        <div className="nav-list-wrapper">
                            <a href="/" className="nav-list-item">
                                <i className="fas fa-home nav-list-icon"></i>
                                <p className="nav-list-text">home</p>
                            </a>
                            <a href="/" className="nav-list-item">
                                <i className="fas fa-building nav-list-icon"></i>
                                <p className="nav-list-text">companies</p>
                            </a>
                            <a href="/" className="nav-list-item">
                                <i className="fas fa-puzzle-piece nav-list-icon"></i>
                                <p className="nav-list-text">projects</p>
                            </a>
                            <a href="/" className="nav-list-item">
                                <i className="fas fa-user-friends nav-list-icon"></i>
                                <p className="nav-list-text">profiles</p>
                            </a>
                            <a href="/" className="nav-list-item">
                                <i className="fas fa-briefcase nav-list-icon"></i>
                                <p className="nav-list-text">jobs</p>
                            </a>
                            <a href="/" className="nav-list-item">
                                <i className="fas fa-envelope nav-list-icon"></i>
                                <p className="nav-list-text">messages</p>
                            </a>
                            <a href="/" className="nav-list-item">
                                <i className="fas fa-bolt nav-list-icon"></i>
                                <p className="nav-list-text">notifications</p>
                            </a>
                        </div>

                        <div className="nav-about">
                            <img src={navPhoto} alt="error" className="nav-about-img" />
                            <p className="nav-about-name">john</p>
                            <button className="drop-down">
                                <i className="fas fa-angle-down nav-about-down-icon"></i>
                            </button>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}

export default Navbar