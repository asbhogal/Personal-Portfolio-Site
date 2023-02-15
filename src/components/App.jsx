import "../scss/index.scss";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import ErrorPage from "./404";
import AdditionalServices from "./AdditionalServices";
import Testimonials from "./Testimonials";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
    return (
        <>
            <Analytics />
            <Router>
                <Routes>
                    <Route path='/' element={ <Home /> } />
                    <Route path='/about' element={ <About /> } />
                    <Route path='/projects' element={ <Projects /> } />
                    <Route path='/testimonials' element={ <Testimonials/> } />
                    <Route path='/additionalservices' element={ <AdditionalServices /> } />
                    <Route path='*' element={ <ErrorPage /> } />
                </Routes>
            </Router>
        </>
    )
};

export default App;