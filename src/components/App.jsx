import "../scss/index.scss";
import HomePage from "./Home";
import AboutPage from "./About";
import ProjectsPage from "./Projects";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={ <HomePage /> } />
                <Route path='/about' element={ <AboutPage /> } />
                <Route path='/projects' element={ <ProjectsPage /> } />
            </Routes>
        </Router>
    )
}

export default App;