import "./Portfolio.css"
import Project1 from "./Project1"
import Project2 from "./Project2"
import Project3 from "./Project3"
import Project4 from "./Project4"
import Project5 from "./Project5"
import Project6 from "./Project6"


function Portfolio() {

    return <div className="bgPortfolio">
        <div className="portfolioSection">
            <h1 className="portfolioTitle">PORTFOLIO PANEL</h1>
            <p className="portfolioText">I try to be a succesful developer, I make your thinks work I guess... ¡There you have some of my tries!</p>
            <button className="portfolioButton">SEE ALL MY WORKS</button>
        </div>
        <div className="portfolioProjects">
            <div className="portfolioProject1">
                <Project1 />
            </div>
            <div className="portfolioProject2">
                <Project2 />
            </div>
            <div className="portfolioProject3">
                <Project3 />
            </div>
            <div className="portfolioProject4">
                <Project4 />
            </div>
            <div className="portfolioProject5">
                <Project5 />
            </div>
            <div className="portfolioProject6">
                <Project6 />
            </div>
        </div>
    </div>
}

export default Portfolio