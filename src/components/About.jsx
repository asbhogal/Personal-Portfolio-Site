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
                        <p className="AboutText">Aman Singh Bhogal is a UI Engineer with 3 years of client side experience in Front End Development. His work covers designing, building and optimising CMS-based websites (WordPress and Hubspot) and static applications using vanilla HTML5, CSS3, SASS and JavaScript. 
                        <br></br>
                        <br></br>
                        He now works with international clients across a broad spectrum of web design and development services and creates interfaces using Adobe CC, Figma, React and Next.js from existing and new design briefs, as well as offering consultancies and mentoring for junior developers.
                        </p>
                        <div className="AboutExperience">
                        <h3>Professional Experience</h3>
                            <div className="ExperienceContainer">
                                <div className="ExperienceSection">
                                    <span className="ExperienceTitle">WordPress Designer & Developer</span>
                                    <span className="ExperienceDate">May 2020 - Feb 2021</span>
                                    <span className="ExperienceInfo">
                                        <ul>
                                            <li>Designed & developed using Astra Pro, Elementor Pro, WooCommerce and Stripe</li>
                                            <li>Established branding which was used across the site and social media content</li>
                                            <li>Created beta group testing forms and discussed feedback with stakeholders</li>
                                            <li>Negotiated 10% off the annual subscription price for Securi Platform</li>
                                            <li>Led the handover meeting with stakeholders and internal team</li>
                                        </ul>
                                    </span>
                                    <div className="ExperienceSkills">
                                        <span>WordPress</span>
                                        <span>Elementor</span>
                                        <span>Astra</span>
                                        <span>WooCommerce</span>
                                        <span>Stripe</span>
                                        <span>YoastSEO</span>
                                        <span>Optimisation</span>
                                        <span>HTML5</span>
                                        <span>CSS3</span>
                                    </div>
                                </div>
                                <div className="ExperienceSection">
                                    <span className="ExperienceTitle">Web Designer & Developer</span>
                                    <span className="ExperienceDate">Feb 2021 - Oct 2022</span>
                                    <span className="ExperienceInfo">
                                        <ul>
                                            <li>Leveraged HTML5, CSS3, SCSS, JavaScript (ES6), PHP, RESTful APIs, npm & Git for vanilla builds</li>
                                            <li>Managed and deployed multiple applications on DigitalOcean via Cloudways hosting</li>
                                            <li>Created bespoke WordPress themes and modifying off-the-shelf themes and plugins</li>
                                            <li>Designed & developed a joint-client website on WordPress</li>
                                            <li>Performing domain management, DNS record changes and propagation tests</li>
                                        </ul>
                                    </span>
                                    <div className="ExperienceSkills">
                                        <span>HTML5</span>
                                        <span>CSS3</span>
                                        <span>JS</span>
                                        <span>jquery</span>
                                        <span>PHP</span>
                                        <span>WordPress</span>
                                        <span>Astra</span>
                                        <span>Gutenberg</span>
                                        <span>CUSTOM THEMES</span>
                                        <span>SEO</span>
                                        <span>Hubspot</span>
                                        <span>RWD</span>
                                        <span>PHP</span>
                                    </div>
                                </div>
                                <div className="ExperienceSection">
                                    <span className="ExperienceTitle">Front End Developer & UI Engineer</span>
                                    <span className="ExperienceDate">Oct 2022 - Present</span>
                                    <span className="ExperienceInfo">
                                        <ul>
                                            <li>Creating responsive, interactive prototypes, components and high-fidelity wireframes/mockups in Figma</li>
                                            <li>Establishing branding, logos, typography, brand boards & UI mockups using Figma & Adobe CC</li>
                                            <li>Translating designs and wireframes into high-quality, responsive builds using Next.js, Redux, React & SCSS</li>
                                            <li>Consuming multiple RESTful APIs through GET requests across Next.js, React and JavaScript builds</li>
                                            <li>Leveraging Redux (Toolkit & RTK), npm, Git, Babel, Webpack, Vite and Vercel (CI/CD)</li>
                                            <li>Providing freelance designer/developer services and advice to international clientele</li>
                                        </ul>
                                    </span>
                                    <div className="ExperienceSkills">
                                        <span>Figma</span>
                                        <span>Adobe Illustrator</span>
                                        <span>Adobe Photoshop</span>
                                        <span>Adobe XD</span>
                                        <span>React</span>
                                        <span>Next.js</span>
                                        <span>Redux</span>
                                        <span>Toolkit/RTK</span>
                                        <span>SASS (SCSS)</span>
                                        <span>API</span>
                                        <span>Webpack</span>
                                        <span>Parcel</span>
                                        <span>Git</span>
                                        <span>NPM</span>
                                        <span>CI/CD</span>
                                        <span>HTML5</span>
                                        <span>CSS3</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            <Footer />
        </>
    )
}

export default About;