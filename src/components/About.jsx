import "../scss/index.scss";
import Header from "./Header";
import Footer from "./Footer";

const About = () => {
    return (
        <>
            <Header />
                <section className="AboutSection">
                    <h1 className="PageHeaderTitle">&#38;&#46;about</h1>
                    <div className="HorizontalDivider"></div>
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
                    <p className="AboutText"><span className="AboutName">AMAN SINGH BHOGAL</span> is a UI Engineer with 2 1/2 years of client side experience in Front End Development. His work covers designing, building and optimising CMS-based websites (WordPress and Hubspot) and static applications using vanilla HTML5, CSS3, SASS and JavaScript. Throughout the years, he has built a rapport with clients by establishing trust, maintaining transparent, consistent communication and translating and communicating brands with both clarity and creativity.
                    <br></br>
                    <br></br>
                    He now works with international clients across a broad spectrum of web design and development services and creates interfaces using Adobe CC, Figma and React from existing and new design briefs, as well as offering consultancies and mentoring for junior developers.</p>
                </div>
                </section>
            <Footer />
        </>
    )
}

export default About;