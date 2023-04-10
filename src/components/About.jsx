import "../scss/index.scss";
import Header from "./Header";
import Footer from "./Footer";

import { motion as m } from "framer-motion";

const About = () => {
    return (
        <>
            <Header />
                <section className="AboutSection">
                    <h1 className="PageHeaderTitle">about</h1>
                    <div className="AboutContent">
                        <div id="TechSkills" className="ExperienceList">
                            <p id="AboutPageTitle1" className="PageSubTitleText">  
                                Figma &#124; Adobe Ai &#124; Adobe PS &#124; Adobe xD
                            </p>
                            <p id="AboutPageTitle2" className="PageSubTitleText">
                                React &#124; SASS &#124; Git &#124; Webpack
                            </p>
                        </div>
                        <div id="DesignSkills" className="ExperienceList">
                            <p id="AboutPageTitle1" className="PageSubTitleText">  
                                Responsive Web Design &#124; Low & High-Fidelity Wireframing &#124; Components &#124; UI Prototyping
                            </p>
                        </div>
                        <p className="AboutText">AMAN SINGH BHOGAL is a UI Engineer with 3 years of client side experience in Front End Development. His work covers designing, building and optimising CMS-based websites (WordPress and Hubspot) and static applications using vanilla HTML5, CSS3, SASS and JavaScript. Throughout the years, he has built a rapport with clients by establishing trust, maintaining transparent, consistent communication and translating and communicating brands with both clarity and creativity.
                        <br></br>
                        <br></br>
                        He now works with international clients across a broad spectrum of web design and development services and creates interfaces using Adobe CC, Figma and React from existing and new design briefs, as well as offering consultancies and mentoring for junior developers.
                        </p>
                        <div className="AboutExperience">
                            <div className="ExperienceSection">
                                <span className="ExperienceLozenge">May 2020 - Feb 2021</span>
                            </div>
                            <div className="ExperienceSection">
                                <span className="ExperienceLozenge">Feb 2021 - Oct 2022</span>
                            </div>
                            <div className="ExperienceSection">
                                <span className="ExperienceLozenge">Oct 2022 - Present</span>
                            </div>
                        </div>
                    </div>
                </section>
            <Footer />
        </>
    )
}

export default About;