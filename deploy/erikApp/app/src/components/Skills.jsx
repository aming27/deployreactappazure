import "./Skills.css"
import ReactLogo from "../img/skills/ReactLogo.png"
import TDDLogo from "../img/skills/TDDLogo.png"
import NodeLogo from "../img/skills/NodeLogo.png"
import ExpressLogo from "../img/skills/ExpressLogo.png"
import MongoDBLogo from "../img/skills/MongoDBLogo.png"
import MongooseLogo from "../img/skills/MongooseLogo.png"
// import ReactNativeLogo from "../img/skills/ReactNativeLogo.png"
import JSLogo from "../img/skills/JSLogo.png"
import HTMLLogo from "../img/skills/HTMLLogo.png"
import CSSLogo from "../img/skills/CSSLogo.png"
import WordpressLogo from "../img/skills/WordpressLogo.png"


function Skills() {
    return <div className="bgSkills">
        <div className="skillsSection">
            <h2 className="skillsTitle">SKILLS</h2>
            <div className="skillsSkills">
                
                <div className="skillsContainer react">
                    <img className="skillsContainer-img" src={ReactLogo} alt="" />
                    <h3 className="skillsContainer-title">REACT JS</h3>
                    <p className="skillsContainer-text">React.js is my speciality I guess</p>
                </div>

                <div className="skillsContainer TDD">
                    <img className="skillsContainer-img" src={TDDLogo} alt="" />
                    <h3 className="skillsContainer-title">TDD</h3>
                    <p className="skillsContainer-text">Worked with TDD, specially with Mocha Chai, Jasmine and Jest</p>
                </div>

                <div className="skillsContainer nodeJS">
                    <img className="skillsContainer-img" src={NodeLogo} alt="" />
                    <h3 className="skillsContainer-title">NODE JS</h3>
                    <p className="skillsContainer-text">NodeJS for backend</p>
                </div>

                <div className="skillsContainer express">
                    <img className="skillsContainer-img" src={ExpressLogo} alt="" />
                    <h3 className="skillsContainer-title">EXPRESS JS</h3>
                    <p className="skillsContainer-text">ExpressJS is my most used NodeJS framework</p>
                </div>

                <div className="skillsContainer mongoDB">
                    <img className="skillsContainer-img" src={MongoDBLogo} alt="" />
                    <h3 className="skillsContainer-title">MONGO DB</h3>
                    <p className="skillsContainer-text">MongoDB as favourite databases services</p>
                </div>

                <div className="skillsContainer mongoose">
                    <img className="skillsContainer-img" src={MongooseLogo} alt="" />
                    <h3 className="skillsContainer-title">MONGOOSE</h3>
                    <p className="skillsContainer-text">Mongoose as favourite MongoDB framework</p>
                </div>

                {/* <div className="skillsContainer reactNative">
                    <img className="skillsContainer-img" src={ReactNativeLogo} alt="" />
                    <h3 className="skillsContainer-title">REACT NATIVE</h3>
                    <p className="skillsContainer-text">React Native used for Mobile App Development</p>
                </div> */}

                <div className="skillsContainer javascript">
                    <img className="skillsContainer-img" src={JSLogo} alt="" />
                    <h3 className="skillsContainer-title">JAVASCRIPT</h3>
                </div>
                
                <div className="skillsContainer html5">
                    <img className="skillsContainer-img" src={HTMLLogo} alt="" />
                    <h3 className="skillsContainer-title">HTML5</h3>
                </div>

                <div className="skillsContainer css3">
                    <img className="skillsContainer-img" src={CSSLogo} alt="" />
                    <h3 className="skillsContainer-title">CSS3</h3>
                </div>

                <div className="skillsContainer mongoose">
                    <img className="skillsContainer-img" src={WordpressLogo} alt="" />
                    <h3 className="skillsContainer-title">WORDPRESS</h3>
                    <p className="skillsContainer-text">3+ years as wordpress freelance web developer</p>
                </div>
            </div>
        </div>
    </div>
}

export default Skills