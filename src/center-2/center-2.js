import React from "react"
import "./center-2.css"
import facebookLogo from "./images2/facebook.png"
import img1 from "./images2/img1.jpg"
import person1 from "./images2/person1.jpg"
import person2 from "./images2/person2.jpg"
import person3 from "./images2/person3.jpg"


class Center2 extends React.Component {
    render() {
        return (
            <section class="center-content" style={{ position: "relative" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ display: "flex" }}>
                        <img className="facebooklogo" src={facebookLogo} alt="eroor" />
                        <div>
                            <h4>Facebook Inc.</h4>
                            <div style={{ display: "flex", marginTop: "5px" }}>
                                <i class="fas fa-clock"></i>
                                <p className="min">3 min ago</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className="bar-btn">
                            <i class="fas fa-ellipsis-v"></i>
                        </button>
                    </div>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "5px" }}>
                    <div style={{ display: "flex", marginTop: "10px" }}>
                        <div style={{ display: "flex" }}>
                            <i className="fas fa-border-all"></i>
                            <p className="epiccoder">Epic Coder</p>
                        </div>
                        <div style={{ display: "flex" }}>
                            <i className="fas fa-paper-plane"></i>
                            <p className="epiccoder">India</p>
                        </div>
                    </div>
                    <div style={{ marginTop: "5px", position: "absolute", top: "70px", left: "390px" }}>
                        <button className="green-btn">
                            <i class="far fa-bookmark"></i>
                        </button>
                        <button className="red-btn">
                            <i class="far fa-envelope"></i>
                        </button>
                    </div>
                </div>

                <p className="center-job">Senior UI / UX designer</p>

                <div style={{ display: "flex", marginTop: "10px", marginBottom: "18px" }}>
                    <button className="fulltime">Full Time</button>
                    <p style={{ color: "#6F6E6C", fontSize: "14px", fontWeight: "bold", marginTop: "4px" }}>$30 / hr</p>
                </div>

                <p className="about-text" >
                    Lorem ipsum dolor, sit amet consectetur  adipisicing elit. Ex repellendus
                </p>
                <p className="about-text">
                    mollitia vitae similique eos voluptatum, asperiores quam nostrum itaque...
                </p>

                <a href="/" className="viewmorebtn">view more</a>

                <div className="skillname-wrapper">
                    <button className="skill-btn">HTML</button>
                    <button className="skill-btn">PHP</button>
                    <button className="skill-btn">CSS</button>
                    <button className="skill-btn">JavaScript</button>
                    <button className="skill-btn">Wordpress</button>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ display: "flex" }}>
                        <i className="fas fa-heart"></i>
                        <p className="heart">Like</p>
                        <div className="photos-wrapper">
                            <img className="circle-img1" src={img1} alt="" />
                            <img className="circle-img2" src={person1} alt="" />
                            <img className="circle-img3" src={person2} alt="" />
                            <img className="circle-img4" src={person3} alt="" />
                            <div className="circle-img5">
                                <p className="num25">25</p>
                            </div>
                        </div>
                        <i className="fas fa-comment" style={{ fontSize: "14px" }}></i>
                        <p className="comments">Comments <span>15</span></p>
                    </div>
                    <div style={{ display: "flex" }}>
                        <i className="fas fa-eye" style={{ marginRight: "6px", color: "#6F6E6C", fontSize: "14px" }}></i>
                        <p style={{ color: "#6F6E6C", fontSize: "13px" }}>Views <span style={{ fontSize: "13px", color: "#6F6E6C" }}>50</span></p>
                    </div>
                </div>

            </section>
        )
    }
}

export default Center2