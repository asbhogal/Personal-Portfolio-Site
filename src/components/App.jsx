import "../scss/index.scss";
import HomePage from "./Home";
import AboutPage from "./About";
import ProjectsPage from "./Projects";
import NavMenu from "./NavMenu";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdditionalServices from "./AdditionalServices";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={ <HomePage /> } />
                <Route path='/about' element={ <AboutPage /> } />
                <Route path='/projects' element={ <ProjectsPage /> } />
                <Route path='/navmenu' element={ <NavMenu /> } />
                <Route path='/additionalservices' element={ <AdditionalServices /> } />
            </Routes>
        </Router>
    )
}

export default App;