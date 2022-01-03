import React from "react"
import "./left-content-footer.css"
import person1 from "./images/person1.jpg"
import person2 from "./images/person2.jpg"
import person3 from "./images/person3.jpg"

class LeftFooter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <main>
                    <div className="suggestions">
                        <h4>Suggestions</h4>
                        <i className="fas fa-ellipsis-v"></i>
                    </div>

                    <div className="left-content-footer">
                        <div className="sug-person-wrapper">
                            <img className="person-img" src={person1} alt="error"/>
                        <div className="name-wrapper">
                            <a href="#" className="footer-name">Jessica William</a>
                            <p className="job">Graphic Designer</p>
                        </div>
                        <div className="icon-border">
                            <i className="fas fa-plus footer-plus-icon"></i>
                        </div>
                    </div>

                    <div className="sug-person-wrapper">
                        <img className="person-img" src={person2} alt="" />
                        <div className="name-wrapper">
                            <a href="#" className="footer-name">John Doe</a>
                            <p className="job">PHP Developer</p>
                        </div>
                        <div className="icon-border">
                            <i className="fas fa-plus footer-plus-icon"></i>
                        </div>
                    </div>

                    <div className="sug-person-wrapper">
                        <img className="person-img" src={person3} alt=""/>
                        <div className="name-wrapper">
                            <a href="#" className="footer-name">Poonam</a>
                            <p className="job">Wordpress Developer</p>
                        </div>
                        <div className="icon-border">
                            <i className="fas fa-plus footer-plus-icon"></i>
                        </div>
                    </div>

                    <div className="sug-person-wrapper">
                        <img className="person-img" src={person1} alt=""/>
                        <div className="name-wrapper">
                            <a href="#" className="footer-name">Bill Gates</a>
                            <p className="job">C & C++ Developer</p>
                        </div>
                        <div className="icon-border">
                            <i className="fas fa-plus footer-plus-icon"></i>
                        </div>
                    </div>

                    <div className="sug-person-wrapper">
                        <img className="person-img" src={person2} alt=""/>
                        <div className="name-wrapper">
                            <a href="#" className="footer-name">Jessica William</a>
                            <p className="job">Graphic Designer</p>
                        </div>
                        <div className="icon-border">
                            <i className="fas fa-plus footer-plus-icon"></i>
                        </div>
                    </div>

                    <div className="sug-person-wrapper">
                        <img className="person-img" src={person3} alt=""/>
                        <div className="name-wrapper">
                            <a href="#" className="footer-name">John Doe</a>
                            <p className="job">Graphic Designer</p>
                        </div>
                        <div className="icon-border">
                            <i className="fas fa-plus footer-plus-icon"></i>
                        </div>
                    </div>
                    <a href="#" className="viewmore">View More</a>
                </div>
            </main>
        )
    }
}


export default LeftFooter