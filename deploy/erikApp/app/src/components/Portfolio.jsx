import "./Portfolio.css"
import Project1 from "./Project1"
import Project2 from "./Project2"
import Project3 from "./Project3"


function Portfolio() {

    return <div>
    <div className="bgPortfolio">
        <h1>PORTFOLIO PANEL</h1>
    </div>
    <Project1/>
    <Project2/>
    <Project3/>
    </div>
}

export default Portfolio