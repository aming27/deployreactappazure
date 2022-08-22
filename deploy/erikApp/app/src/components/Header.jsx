import "./Header.css"
import Menu from "./Menu"
import hamMenu from "../img/hamMenu.svg"

function Header() {

    const handleNavHome = () => {
        console.log("handleNavHome")
    }

    const handleOpenMenu = () => {
        console.log("handleNavMenu");
        <Menu />
    }

    return <div className="header">
        <a className="logo" target="_blank" rel="noreferrer" href="http://preview.themeforest.net/item/alison-portfolio-html-template/full_screen_preview/23151102" onClick={handleNavHome}>Erik Asensio - Full Stack Dev</a>
        <img className="hamburgerMenu" src={hamMenu} alt="" onClick={handleOpenMenu} />
    </div>
}

export default Header