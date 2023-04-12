import "../scss/index.scss";
import Header from "./Header";
import Footer from "./Footer";

import { useEffect, useState } from "react";
import { motion as m } from "framer-motion";

const About = () => {

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {

        document.title = 'About | Aman Singh Bhogal';

        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);

    const scrollToTop = () => {
        window.scrollTo ({
            top: 0,
            behaviour: "smooth"
        });
    };

    return (
        <>
            <Header />

                <m.section 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }} 
                    className="AboutSection">
                    <m.h1 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }} 
                        className="PageHeaderTitle">about</m.h1>
                    <m.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }} 
                        className="AboutContent">
                        <m.p 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}  
                            className="AboutText">Aman Singh Bhogal is a UI Engineer with 3 years of client side experience in Front End Development. His work covers designing, building and optimising CMS-based websites (WordPress and Hubspot) and static applications using vanilla HTML5, CSS3, SASS and JavaScript. 
                        <br></br>
                        <br></br>
                        He now works with international clients across a broad spectrum of web design and development services and creates interfaces using Adobe CC, Figma, React and Next.js from existing and new design briefs, as well as offering consultancies and mentoring for junior developers.
                        </m.p>
                        <m.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }} 
                            className="AboutExperience">
                        <m.h3 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }} >Professional Experience</m.h3>
                            <m.div 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className="ExperienceContainer">
                                <m.div 
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }} 
                                    className="ExperienceSection">
                                    <m.span 
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }} 
                                        className="ExperienceTitle">WordPress Designer & Developer</m.span>
                                    <m.span
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }} 
                                        className="ExperienceDate">May 2020 - Feb 2021</m.span>
                                    <m.span
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }} 
                                        className="ExperienceInfo">
                                        <m.ul initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} >
                                            <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} >Designed & developed using Astra Pro, Elementor Pro, WooCommerce and Stripe</m.li>
                                            <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} >Established branding which was used across the site and social media content</m.li>
                                            <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} >Created beta group testing forms and discussed feedback with stakeholders</m.li>
                                            <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} >Negotiated 10% off the annual subscription price for Securi Platform</m.li>
                                            <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} >Led the handover meeting with stakeholders and internal team</m.li>
                                        </m.ul>
                                    </m.span>
                                    <m.div 
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}  
                                        className="ExperienceSkills">
                                        <m.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} >WordPress</m.span>
                                        <m.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} >Elementor</m.span>
                                        <m.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} >Astra</m.span>
                                        <m.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} >WooCommerce</m.span>
                                        <m.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} >Stripe</m.span>
                                        <m.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} >YoastSEO</m.span>
                                        <m.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} >Optimisation</m.span>
                                        <m.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} >HTML5</m.span>
                                        <m.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} >CSS3</m.span>
                                        <m.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} >PHP</m.span>
                                        <m.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} >RWD</m.span>
                                    </m.div>
                                    <m.a initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} target="_blank" href="https://www.dropbox.com/sh/t6j0d882l18ajel/AAAuAl1ML0kWPePpuiCvudkma?dl=0" className="WorkLinks">work</m.a>
                                </m.div>
                                <m.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="ExperienceSection">
                                    <m.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="ExperienceTitle">Web Designer & Developer</m.span>
                                    <m.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="ExperienceDate">Feb 2021 - Oct 2022</m.span>
                                    <m.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="ExperienceInfo">
                                        <m.ul initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                                            <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>Leveraged HTML5, CSS3, SCSS, JavaScript (ES6), PHP, RESTful APIs, npm & Git for vanilla builds</m.li>
                                            <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>Managed and deployed multiple applications on DigitalOcean via Cloudways hosting</m.li>
                                            <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>Created bespoke WordPress themes and modifying off-the-shelf themes and plugins</m.li>
                                            <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>Designed & developed a joint-client website on WordPress</m.li>
                                            <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>Performing domain management, DNS record changes and propagation tests</m.li>
                                        </m.ul>
                                    </m.span>
                                    <m.div className="ExperienceSkills">
                                        <m.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>HTML5</m.span>
                                        <m.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>CSS3</m.span>
                                        <m.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>JS</m.span>
                                        <m.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>jquery</m.span>
                                        <m.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>PHP</m.span>
                                        <m.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>WordPress</m.span>
                                        <m.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>Astra</m.span>
                                        <m.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>Gutenberg</m.span>
                                        <m.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>CUSTOM THEMES</m.span>
                                        <m.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>SEO</m.span>
                                        <m.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>Hubspot</m.span>
                                        <m.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>RWD</m.span>
                                        <m.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>PHP</m.span>
                                    </m.div>
                                    <m.a initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} target="_blank" href="https://www.dropbox.com/sh/drm4vdxboqhbb2n/AAD5AsoPB_vGOP0DSywab0Sda?dl=0" className="WorkLinks">work</m.a>
                                </m.div>
                                <m.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="ExperienceSection">
                                    <m.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="ExperienceTitle">Front End Developer & UI Engineer</m.span>
                                    <m.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="ExperienceDate">Oct 2022 - Present</m.span>
                                    <m.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="ExperienceInfo">
                                        <m.ul initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                                            <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>Creating responsive, interactive prototypes, components and high-fidelity wireframes/mockups in Figma</m.li>
                                            <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>Establishing branding, logos, typography, brand boards & UI mockups using Figma & Adobe CC</m.li>
                                            <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>Translating designs and wireframes into high-quality, responsive builds using Next.js, Redux, React & SCSS</m.li>
                                            <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>Consuming multiple RESTful APIs through GET requests across Next.js, React and JavaScript builds</m.li>
                                            <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>Leveraging Redux (Toolkit & RTK), npm, Git, Babel, Webpack, Vite and Vercel (CI/CD)</m.li>
                                            <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>Providing freelance designer/developer services and advice to international clientele</m.li>
                                        </m.ul>
                                    </m.span>
                                    <m.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="ExperienceSkills">
                                        <m.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>Figma</m.span>
                                        <m.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>Adobe Illustrator</m.span>
                                        <m.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>Adobe Photoshop</m.span>
                                        <m.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>Adobe XD</m.span>
                                        <m.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>React</m.span>
                                        <m.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>Next.js</m.span>
                                        <m.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>Redux</m.span>
                                        <m.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>Toolkit/RTK</m.span>
                                        <m.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>SASS (SCSS)</m.span>
                                        <m.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>API</m.span>
                                        <m.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>Webpack</m.span>
                                        <m.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>Parcel</m.span>
                                        <m.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>Git</m.span>
                                        <m.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>NPM</m.span>
                                        <m.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>CI/CD</m.span>
                                        <m.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>HTML5</m.span>
                                        <m.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>CSS3</m.span>
                                    </m.div>
                                    <m.a initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} target="_blank" href="https://www.amansinghbhogal.com/projects" className="WorkLinks">work</m.a>
                                </m.div>
                            </m.div>
                        </m.div>
                    </m.div>
                </m.section>
            <Footer />

            { showButton && (
                <m.button 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }} 
                    onClick={ scrollToTop } className="ScrollToTop">
                    &#8593;
                </m.button>
            ) }

        </>
    )
}

export default About;