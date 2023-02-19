import "../scss/index.scss";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import ErrorPage from "./404";
import AdditionalServices from "./AdditionalServices";
import Testimonials from "./Testimonials";
import FreeResources from "./FreeResources";

import Cursor from "./Cursor"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { AnimatePresence } from "framer-motion";

const App = (router) => {

    return (
        <>
            <Analytics />
            <Router>
                <Cursor />
                <Routes>
                    <Route path='/' element={ 
                                                    <AnimatePresence>
                                                        <Home key={ router.pathname } /> 
                                                    </AnimatePresence> } 
                    />
                    <Route path='/about' element={ 
                                                    <AnimatePresence>
                                                        <About key={ router.pathname } />
                                                    </AnimatePresence> } 
                    />
                    <Route path='/projects' element={ 
                                                    <AnimatePresence>
                                                        <Projects key={ router.pathname } /> 
                                                    </AnimatePresence> } 
                    />
                    <Route path='/AmanSinghBhogal-Brand-Manifesto.png' element={
                                                    <FreeResources /> }
                    />
                    <Route path='/testimonials' element={ 
                                                    <AnimatePresence>
                                                        <Testimonials key={ router.pathname } />
                                                    </AnimatePresence> } 
                    />
                    <Route path='/additionalservices' element={ 
                                                    <AnimatePresence>
                                                        <AdditionalServices key={ router.pathname } />
                                                    </AnimatePresence> } 
                    />
                    <Route path='/freeresources' element={
                                                    <AnimatePresence>
                                                        <FreeResources key={ router.pathname } />
                                                    </AnimatePresence> }
                    />
                    <Route path='*' element={ <ErrorPage /> } />
                </Routes>
                </Router>
        </>
    )
};

export default App;