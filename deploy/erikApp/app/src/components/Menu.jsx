import Header from "./Header"
import "./Menu.css"

function Menu(){

    const handleNavHome = () => {
        console.log("handleNavHome")
    }

    const handleNavSkills = () => {
        console.log("nav to skills")
    }

    const handleNavPortfolio = () => {
        console.log("nav to portfolio")
    }

    const handleNavContact = () => {
        console.log("nav to contact")
    }

    return <nav>
        <ul className="list">
            <li className="list-item"><a href="#home" onClick={handleNavHome}>Home</a></li>
            <li className="list-item"><a href="#about">About</a></li>
            <li className="list-item"><a href="#skills" onClick={handleNavSkills}>Skills</a></li>
            <li className="list-item"><a href="#portfolio" onClick={handleNavPortfolio}>Portfolio</a></li>
            <li className="list-item"><a href="#contact" onClick={handleNavContact}>Contact</a></li>
        </ul>
    </nav>
}

export default Menu