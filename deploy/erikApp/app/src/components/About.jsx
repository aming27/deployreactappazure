import "./About.css"
import aboutPhoto from "../img/fotoaboutERIK.png"
import englishCV from "../files/ErikAsensioEnglishCV.pdf"
import spanishCV from "../files/ErikAsensioSpanishCV.pdf"
function About() {

    return <div className="bgAbout" id="#about">
        <div className="aboutContainer">
            <div className="aboutInfo">
                <h1 className="aboutTitle">¿WHO AM I?</h1>
                <p className="aboutText">Hello I'm Erik, I'm 18 years old and I consider myself constant and ambitious.
                <br/><br/>
                I've always worked 100% on my projects and I've prepared myself as a Full Stack Developer in the best way I could, I started being self-taught at 15 years old.
                <br/><br/>
                    I love team-working, I think that being able to explain and make others understand is the best way to lay down a concept.</p>
                <div className="aboutButtons">
                    <a href={englishCV} className="aboutButton">DOWNLOAD ENGLISH CV</a>
                    <a href={spanishCV} className="aboutButton">DOWNLOAD SPANISH CV</a>
                </div>
            </div>
            <div className="aboutBigImage">
                <img className="aboutImage" src={aboutPhoto} alt="ejemplo" />
            </div>
        </div>
    </div>
}

export default About