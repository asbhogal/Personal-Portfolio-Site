import "../scss/index.scss";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import ErrorPage from "./404";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdditionalServices from "./AdditionalServices";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={ <Home /> } />
                <Route path='/about' element={ <About /> } />
                <Route path='/projects' element={ <Projects /> } />
                <Route path='/additionalservices' element={ <AdditionalServices /> } />
                <Route path='*' element={ <ErrorPage /> } />
            </Routes>
        </Router>
    )
};

export default App;