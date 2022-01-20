import React from "react"
import "./left-content-top.css"

class LeftContentTop extends React.Component {
    render() {
        return (
            <div className="left-content">
                <button className="follow-button">
                    <i className="fas fa-plus plus-icon"></i>
                    follow
                </button>

                <div className="followers-wrapper">
                    <div className="following">
                        <p className="following-text">following</p>
                        <p className="following-number">34</p>
                    </div>
                    <div className="followers">
                        <p className="following-text">followers</p>
                        <p className="following-number">155</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default LeftContentTop