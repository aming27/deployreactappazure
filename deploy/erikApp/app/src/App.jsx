import "./App.css"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {

    return <div className="app">
        <div className="appHeader">
            <Header />
            <Hero />
            <About />
            <Skills />
            <Portfolio />
            <Contact />
            <Footer />
        </div>
    </div>

}

export default App
