import React from "react"
import "./center-top-content.css"

class CenterTop extends React.Component {
    render() {
        return (
            <div className="center-top-content">
                <h2 className="facebookinc">Facebook Inc.</h2>
                <div className="stars-wrapper">
                    <h4 className="established">Established Since 2009</h4>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>

                <div className="feed-info-portfolio-icons">
                    <div className="feed-wrapper">
                        <i className="red far fa-comment-alt"></i>
                        <p className="feed feed-red">Feed</p>
                    </div>
                    <div className="feed-wrapper">
                        <i className="fas fa-info-circle center-top-icon"></i>
                        <p className="feed">Info</p>
                    </div>
                    <div className="feed-wrapper">
                        <i className="fas fa-puzzle-piece center-top-icon"></i>
                        <p className="feed">Portfolio</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default CenterTop