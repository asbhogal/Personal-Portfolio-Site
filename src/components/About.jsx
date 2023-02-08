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
                    <p className="AboutText">A MAN SINGH BHOGAL is a UI Engineer with 2 1/2 years of client side experience in Front End Development. His work covers building CMS-based websites (WordPress and Hubspot) and static applications using vanilla HTML5, CSS3, SASS and JavaScript. He now works with international clients to design and develop interfaces using Adobe CC, Figma and React from existing and new design briefs, as well as offering consultancies.</p>
                </div>
                </section>
            <Footer />
        </>
    )
}

export default About;