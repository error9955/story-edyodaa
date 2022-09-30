import React, { Component } from "react"
import "./footer.css"

class Footer extends Component {
    render() {
        return (
            <>
                <footer>

                    <div className="edyodaDetail">
                        <h3 className="heading">EDYODA</h3>
                        <a href="">About Us</a>
                        <a href="">Careers</a>
                        <a href="">Privacy Policy</a>
                        <a href="">Contact Us</a>
                        <a href="">Terms of Use</a>
                    </div>
                    <div className="edyodaDetail">
                        <h3 className="heading">RESOURCES</h3>
                        <a href="">Learning Paths</a>
                        <a href="">Courses</a>
                        <a href="">Learning Videos</a>
                        <a href="">Educators</a>
                        <a href="">EdYoda Stories</a>
                        <a href="">University</a>
                    </div>
                    
                    <div className="edyodaDetail">
                        <h3 className="heading">FOR ENTERPRISES</h3>
                        <a href="">Train Your Employess</a>

                        <h3 className="heading">Quick Links</h3>
                        <a href="">Learn and Earn</a>
                        <a href="">Become a Learning-Enabler</a>
                        <a href="">Tips for Learning-Enabler</a>
                        <a href="">Request New Topic</a>
                        <a href="">Certification</a>
                        <a href="">Affiliate Program</a>
                    </div>

                    <div className="edyodaDetail">
                        <h3 className="heading">CONNECT</h3>
                        <a href=""> 2nd Floor #188, Survey No. - 123/1, <br></br>Incubes Building Next to McDonalds,<br></br>ITPL Main Rd, Brookefield,<br></br>Bengaluru, Karnataka-560037,<br></br>India </a>
                        <a href="mailto:hello@edyoda.com" target="_blank" ><img src="/static/media/email-white.e7d51381.svg" alt="EdYoda Email Icon" class="Footer__ContactIcon__2TTbB"/>hello@edyoda.com</a>
                        <a>© 2022 <br></br>zekeLabs Technologies Private Limited</a>
                        

                    </div>


                </footer>
            </>
        )
    }
}

export default Footer