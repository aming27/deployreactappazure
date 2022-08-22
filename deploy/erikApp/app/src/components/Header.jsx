import "./Header.css"
import Menu from "./Menu"
import hamMenu from "../img/hamMenu.svg"

function Header({onNavHome}) {

    const handleNavHome = () => {
        console.log("handleNavHome")
    }

    const handleOpenMenu = () => {
        console.log("handleNavMenu");
        <Menu onNavHome={onNavHome}/>
    }

    return <div className="header">
        <a target="_blank" href="http://preview.themeforest.net/item/alison-portfolio-html-template/full_screen_preview/23151102"><img className="logo" src="" alt="Erik Asensio - Full Stack Dev" onClick={handleNavHome} /></a>
        <img className="hamburgerMenu" src={hamMenu} alt="" onClick={handleOpenMenu} />
    </div>
}

export default Header