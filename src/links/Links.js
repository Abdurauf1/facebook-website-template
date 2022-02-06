import React from "react"
import "./links.css"

class Links extends React.Component {
    render() {
        return (
            <div className="links-wrapper">
                <div className="link">
                    <i className="fas fa-globe-americas"></i>
                    <a href="/" className="link-text">www.example.com</a>
                </div>
                <div className="link">
                    <i className="fab fa-facebook-square"></i>
                    <a href="/" className="link-text">Https://www.facebook.com/joh...</a>
                </div>
                <div className="link">
                    <i className="fab fa-twitter"></i>
                    <a href="/" className="link-text">Https://www.Twitter.com/john...</a>
                </div>
                <div className="link">
                    <i className="fab fa-google-plus-square"></i>
                    <a href="/" className="link-text">Https://www.googleplus.com/j...</a>
                </div>
                <div className="link">
                    <i className="fab fa-behance-square"></i>
                    <a href="/" className="link-text">Https://www.behance.com/joh...</a>
                </div>
                <div className="link">
                    <i className="fab fa-pinterest"></i>
                    <a href="/" className="link-text">Https://www.pinterest.com/joh...</a>
                </div>
                <div className="link">
                    <i className="fab fa-instagram"></i>
                    <a href="/" className="link-text">Https://www.instagram.com/jo...</a>
                </div>
                <div className="link">
                    <i className="fab fa-youtube-square"></i>
                    <a href="/" className="link-text">Https://www.youtube.com/john...</a>
                </div>
            </div>
        )
    }
}

export default Links