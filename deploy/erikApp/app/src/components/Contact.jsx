import "./Contact.css"
import mailIcon from "../img/contact/EmailIcon.jpeg"

function Contact() {
    return <div className="bgContact">
        <h1 className="contactTitle">LET'S WORK TOGETHER PROJECTS<br/> JUST SEND ME AN EMAIL HERE</h1>
        <img className="contactMailIcon" src={mailIcon} alt="" />
        <a href="mailto:erikasensioperez@gmail.com" className="contactMail">erikasensioperez@gmail.com</a>
    </div>
}

export default Contact