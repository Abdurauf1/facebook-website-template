import React from "react"
import "./right-content.css"
import img1 from "./images/img1.jpg"
import img2 from "./images/img2.jpg"
import img3 from "./images/img3.jpg"
import img4 from "./images/img4.jpg"

class CenterTop extends React.Component {
    render() {
        return (
            <div className="right-content-wrapper">
                <div className="right-top-content">
                    <button className="message-button">
                        <i style={{ marginRight: "5px" }} className="fas fa-envelope"></i>
                        message
                    </button>
                </div>

                <div className="right-content">
                    <div style={{ marginBottom: "35px", display: "flex", justifyContent: "space-between" }}>
                        <p style={{ fontSize: "15px", fontWeight: "bold" }}>Portfolio</p>
                        <i style={{ color: "#b2b2b2" }} className="fas fa-images"></i>
                    </div>
                    <div className="portfolio-card-wrapper">
                        <div className="portfolio">
                            <img className="portfolioimg" src={img1} alt="" />
                        </div>
                        <div className="portfolio">
                            <img className="portfolioimg" src={img2} alt="" />
                        </div>
                        <div className="portfolio">
                            <img className="portfolioimg" src={img4} alt="" />
                        </div>
                        <div className="portfolio">
                            <img className="portfolioimg" src={img1} alt="" />
                        </div>
                        <div className="portfolio">
                            <img className="portfolioimg" src={img3} alt="" />
                        </div>
                        <div className="portfolio">
                            <img className="portfolioimg" src={img1} alt="" />
                        </div>
                        <div className="portfolio">
                            <img className="portfolioimg" src={img4} alt="" />
                        </div>
                        <div className="portfolio">
                            <img className="portfolioimg" src={img2} alt="" />
                        </div>
                        <div className="portfolio">
                            <img className="portfolioimg" src={img3} alt="" />
                        </div>
                        <div className="portfolio">
                            <img className="portfolioimg" src={img4} alt="" />
                        </div>
                        <div className="portfolio">
                            <img className="portfolioimg" src={img3} alt="" />
                        </div>
                        <div className="portfolio">
                            <img className="portfolioimg" src={img2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CenterTop