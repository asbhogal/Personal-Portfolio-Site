import { useEffect, useState } from "react";

import Footer from "./Footer";
import Navbar from "./Header";
import kmcLogo from "../assets/images/logos/KMC_Birmingham_Logo.svg";
import brandLogoBlack from "../assets/images/logos/brand-logo-black.svg";
import brandLogoWhite from "../assets/images/logos/brand-logo-white.svg";
import brandIconBlack from "../assets/images/logos/brand-icon-black.svg";
import brandIconWhite from "../assets/images/logos/brand-icon-white.svg";
import { TbChevronUpRight } from "react-icons/tb";

const Projects = () => {

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
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
            <Navbar />
            <div className="Projects">
                <div className="ProjectCover">
                    <h1>&#38;&#46;projects</h1>
                </div>
                {/* BRAND */}
                <div className="ProjectSection">
                    <div className="ProjectInfo">
                        <h2 className="ProjectTitle">
                            <div className="WordUnit">
                            <span className="FirstLetterAccent">B</span>
                            rand
                            </div>
                        </h2>
                        <span className="ProjectTimeDuration">Dec 2022 &#45; Feb 2023</span>
                        <span className="ProjectToolsAndTechStacks">
                            <span className="ProjectTools">Figma &#124; Webpack &#124; Vercel</span>
                            <span className="ProjectTechStacks">React &#124; JS &#124; SASS &#124;</span>
                        </span>
                        <p className="ProjectSummary">Brand is an interior design company. This project was developed from an initial crash course provided by Flux Academy on responsive design. Assets, including images, buttons and typography, were used to generate components and a series of five templates in auto-layout format for breakpoints 1440px+, 1440px, 1024px, 744px and 375px.</p>
                        <div className="DesignBrief">
                            <h3>Design Brief</h3>
                            <p className="DesignBriefSummary">The templates were kept consistent in design, aesthetic and layout. The clean, minimalistic ______ with attention to whitespacing, legibility and heirarchy was also respected. The decision was made outside of this course to then render these templates as a responsive SPA (Single Page Application) using React with SASS, Babel and Webpack and deploy using Vercel.</p>
                        </div>
                        <div className="Guides">
                            <div className="BrandGuideSection">
                                <h3>Brand Guide</h3>
                                <div id="BrandGuideInfo" className="BrandGuideInfo">
                                    <div className="LogoMarks">
                                        <img id="BrandLogoBlack" src={ brandLogoBlack }></img>
                                        <img id="BrandLogoWhite" src={ brandLogoWhite }></img>
                                        <div id="BrandIcons">
                                            <img id="BrandIconBlack" src={ brandIconBlack }></img>
                                            <img id="BrandIconWhite" src={ brandIconWhite }></img>
                                        </div>
                                    </div>
                                    <div className="Typography">
                                        <div className="TypographyInfo">
                                            <p>Font Family</p>
                                            <p>Inter</p>
                                            <p>Case</p>
                                            <p>Sentence</p>
                                        </div>
                                        <p>Weights</p>
                                        <ul className="KMCTypography TypographyList">
                                            <div className="TypographyWeightSet">
                                                <p id="BrandTypography-400" className="TypographyListItem-400">Regular</p>
                                                <p id="BrandTypography-500" className="TypographyListItem-500">Medium</p>
                                                <p id="BrandTypography-600" className="TypographyListItem-600">Semi Bold</p>
                                                <p id="BrandTypography-700" className="TypographyListItem-700">Bold</p>
                                                <p id="BrandTypography-900" className="TypographyListItem-900">Black</p>
                                            </div>
                                            <div className="TypographyFontSet">
                                                <li id="BrandTypography-400" className="TypographyListItem-400">ABC abc 123</li>
                                                <li id="BrandTypography-500" className="TypographyListItem-500">ABC abc 123</li>
                                                <li id="BrandTypography-600" className="TypographyListItem-600">ABC abc 123</li>
                                                <li id="BrandTypography-700" className="TypographyListItem-700">ABC abc 123</li>
                                                <li id="BrandTypography-900" className="TypographyListItem-900">ABC abc 123</li>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="StyleGuideSection">
                                <h3>Style Guide</h3>
                                <div className="ColorPalette">
                                    <div id="BrandColor1" className="Color-1">
                                        <div className="ColorTitle">
                                            <p>01</p>
                                            <p>black</p>
                                        </div>
                                        <div className="ColorInfo">
                                            <p><span>hex</span>&#58; &#35;000000</p>
                                            <p><span>rgb</span>&#58; 0, 0, 0</p>
                                        </div>
                                    </div>
                                    <div id="BrandColor2" className="Color-2">
                                    <div className="ColorTitle">
                                            <p>02</p>
                                            <p>anti-flash white</p>
                                        </div>
                                        <div className="ColorInfo">
                                            <p><span>hex</span>&#58; &#35;f3f3f3</p>
                                            <p><span>rgb</span>&#58; 243, 243, 243</p>
                                        </div>
                                    </div>
                                    <div id="BrandColor3" className="Color-3">
                                    <div className="ColorTitle">
                                            <p>03</p>
                                            <p>white</p>
                                        </div>
                                        <div className="ColorInfo">
                                            <p><span>hex</span>&#58; &#35;ffffff</p>
                                            <p><span>rgb</span>&#58; 255, 255, 255</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ProjectLinks">
                        <button className="ViewFiles">
                            <a target="_blank" href="https://www.figma.com/community/file/1187868244670810561">templates</a>
                            <TbChevronUpRight />
                        </button>
                        <button className="ViewFiles">
                            <a target="_blank" href="https://github.com/asbhogal/React-Brand-Responsive-Web-Page">code</a>
                            <TbChevronUpRight />
                        </button>
                        <button className="ViewFiles">
                            <a target="_blank" href="https://brand-responsive-web-page.vercel.app">site</a>
                            <TbChevronUpRight />
                        </button>
                        </div>
                    </div>
                </div>
                <div className="VerticalDivider"></div>
                {/* KADAMPA MEDITATION CENTRE BIRMINGHAM */}
                <div className="ProjectSection">
                    <div className="ProjectInfo">
                        <h2 className="ProjectTitle">
                            <div className="WordUnit">
                            <span className="FirstLetterAccent">K</span>
                            adampa
                            </div>
                            <div className="WordUnit">
                            <span className="FirstLetterAccent">M</span>
                            editation
                            </div>
                            <div className="WordUnit">
                            <span className="FirstLetterAccent">C</span>
                            entre 
                            </div>
                            <div className="WordUnit">
                            <span className="FirstLetterAccent">B</span>
                            irmingham
                            </div>

                        </h2>
                        <span className="ProjectTimeDuration">May 2020 &#45; Feb 2021</span>
                        <span className="ProjectToolsAndTechStacks">
                            <span className="ProjectTools">WordPress &#124; Astra Pro &#124; Elementor Pro &#124; WooCommerce &#124; Stripe</span>
                            <span className="ProjectTechStacks">HTML5 &#124; CSS3 &#124; JS &#124; PHP</span>
                        </span>
                        <p className="ProjectSummary">Kadampa Meditation Centre is part of a nonprofit organisation which delivers a modern form of Buddhism to their local community. When the pandemic started, their centre closed and they required a revamp of their current site to allow class and course bookings and membership subscriptions. The site was designed and developed using Astra Pro and Elementor Pro with WooCommerce and Stripe.</p>
                        <div className="DesignBrief">
                            <h3>Design Brief</h3>
                            <p className="DesignBriefSummary">The client required a site which provided a ‘window’ to the center for people; making class and course sessions accessible for everyone. Information provided was used to populate the pages. An alternative version of the logo was located within the archives and chosen for it’s rounded vectors and soothing appearance. Accents derived from this dictated the color scheme. Montserrat was chosen for its clean, harmonious look which renders well across different devices and offers versatility in its weighting, kernel spacing and _____.</p>
                        </div>
                        <div className="Guides">
                            <div className="BrandGuideSection">
                                <h3>Brand Guide</h3>
                                <div className="BrandGuideInfo">
                                    <div className="LogoMarks">
                                        <img src={ kmcLogo }></img>
                                    </div>
                                    <div className="Typography">
                                        <div className="TypographyInfo">
                                            <p>Font Family</p>
                                            <p>Montserrat</p>
                                            <p>Case</p>
                                            <p>lowercase</p>
                                        </div>
                                        <p>Weights</p>
                                        <ul className="KMCTypography TypographyList">
                                            <div className="TypographyWeightSet">
                                                <p id="KMCTypography-300" className="KMCTypography TypographyListItem-300">Light</p>
                                                <p id="KMCTypography-400" className="KMCTypography TypographyListItem-400">Regular</p>
                                                <p id="KMCTypography-500" className="KMCTypography TypographyListItem-500">Medium</p>
                                            </div>
                                            <div className="TypographyFontSet">
                                                <li id="KMCTypography-300" className="KMCTypography TypographyListItem-300">abc 123</li>
                                                <li id="KMCTypography-400" className="KMCTypography TypographyListItem-400">abc 123</li>
                                                <li id="KMCTypography-500" className="KMCTypography TypographyListItem-500">abc 123</li>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="StyleGuideSection">
                                <h3>Style Guide</h3>
                                <div className="ColorPalette">
                                    <div id="KMCColor1" className="Color-1">
                                        <div className="ColorTitle">
                                            <p>01</p>
                                            <p>chinese violet</p>
                                        </div>
                                        <div className="ColorInfo">
                                            <p><span>hex</span>&#58; 856187</p>
                                            <p><span>rgb</span>&#58; 133, 97, 135</p>
                                        </div>
                                    </div>
                                    <div id="KMCColor2" className="Color-2">
                                    <div className="ColorTitle">
                                            <p>02</p>
                                            <p>mountbatten pink</p>
                                        </div>
                                        <div className="ColorInfo">
                                            <p><span>hex</span>&#58; 98719D</p>
                                            <p><span>rgb</span>&#58; 152, 113, 157</p>
                                        </div>
                                    </div>
                                    <div id="KMCColor3" className="Color-3">
                                    <div className="ColorTitle">
                                            <p>03</p>
                                            <p>african violet</p>
                                        </div>
                                        <div className="ColorInfo">
                                            <p><span>hex</span>&#58; B594C3</p>
                                            <p><span>rgb</span>&#58; 181, 148, 195</p>
                                        </div>
                                    </div>
                                    <div id="KMCColor4" className="Color-4">
                                    <div className="ColorTitle">
                                            <p>04</p>
                                            <p>thistle</p>
                                        </div>
                                        <div className="ColorInfo">
                                            <p><span>hex</span>&#58; D0BDDB</p>
                                            <p><span>rgb</span>&#58; 208, 189, 219</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ProjectLinks">
                        <button className="ViewFiles">
                            <a href="https://www.dropbox.com/sh/t6j0d882l18ajel/AAAuAl1ML0kWPePpuiCvudkma?dl=0">view screens</a>
                            <TbChevronUpRight />
                        </button>
                        </div>
                    </div>
                </div>
                <div className="VerticalDivider"></div>
                {/* OCEANICA */}
                <div className="ProjectSection">
                    <div className="ProjectInfo">
                        <h2 className="ProjectTitle">
                            <div className="WordUnit">
                            <span className="FirstLetterAccent">K</span>
                            adampa
                            </div>
                            <div className="WordUnit">
                            <span className="FirstLetterAccent">M</span>
                            editation
                            </div>
                            <div className="WordUnit">
                            <span className="FirstLetterAccent">C</span>
                            entre 
                            </div>
                            <div className="WordUnit">
                            <span className="FirstLetterAccent">B</span>
                            irmingham
                            </div>

                        </h2>
                        <span className="ProjectTimeDuration">May 2020 - Feb 2021</span>
                        <span className="ProjectToolsAndTechStacks">
                            <span className="ProjectTools">WordPress &#124; Astra Pro &#124; Elementor Pro &#124; WooCommerce &#124; Stripe</span>
                            <span className="ProjectTechStacks">HTML5 &#124; CSS3 &#124; JS &#124; PHP</span>
                        </span>
                        <p className="ProjectSummary">Kadampa Meditation Centre is part of a nonprofit organisation which delivers a modern form of Buddhism to their local community. When the pandemic started, their centre closed and they required a revamp of their current site to allow class and course bookings and membership subscriptions. The site was designed and developed using Astra Pro and Elementor Pro with WooCommerce and Stripe.</p>
                        <div className="DesignBrief">
                            <h3>Design Brief</h3>
                            <p className="DesignBriefSummary">"The Resident Teacher required a site which provided a ‘window’ to the center for people; making class and course sessions accessible for everyone. Information provided was used to populate the pages. An alternative version of the logo was located within the archives and chosen for it’s rounded vectors and soothing appearance. Accents derived from this dictated the color scheme. Montserrat was chosen for its clean, harmonious look which renders well across different devices and offers versatility in its weighting, kernel spacing and _____.</p>
                        </div>
                        <div className="Guides">
                            <div className="BrandGuideSection">
                                <h3>Brand Guide</h3>
                                <div className="BrandGuideInfo">
                                    <div className="LogoMarks">
                                        <img src={ kmcLogo }></img>
                                    </div>
                                    <div className="Typography">
                                        <div className="TypographyInfo">
                                            <p>Font Family</p>
                                            <p>Montserrat</p>
                                            <p>Case</p>
                                            <p>lowercase</p>
                                        </div>
                                        <p>Weights</p>
                                        <ul className="KMCTypography TypographyList">
                                            <div className="TypographyWeightSet">
                                                <p className="KMCTypography TypographyListItem-300">Light</p>
                                                <p className="KMCTypography TypographyListItem-400">Regular</p>
                                                <p className="KMCTypography TypographyListItem-500">Medium</p>
                                            </div>
                                            <div className="TypographyFontSet">
                                                <li className="KMCTypography TypographyListItem-300">abc 123</li>
                                                <li className="KMCTypography TypographyListItem-400">abc 123</li>
                                                <li className="KMCTypography TypographyListItem-500">abc 123</li>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="StyleGuideSection">
                                <h3>Style Guide</h3>
                                <div className="ColorPalette">
                                    <div className="Color-1">
                                        <div className="ColorTitle">
                                            <p>01</p>
                                            <p>chinese violet</p>
                                        </div>
                                        <div className="ColorInfo">
                                            <p><span>hex</span>&#58; 856187</p>
                                            <p><span>rgb</span>&#58; 133, 97, 135</p>
                                        </div>
                                    </div>
                                    <div className="Color-2">
                                    <div className="ColorTitle">
                                            <p>02</p>
                                            <p>mountbatten pink</p>
                                        </div>
                                        <div className="ColorInfo">
                                            <p><span>hex</span>&#58; 98719D</p>
                                            <p><span>rgb</span>&#58; 152, 113, 157</p>
                                        </div>
                                    </div>
                                    <div className="Color-3">
                                    <div className="ColorTitle">
                                            <p>03</p>
                                            <p>african violet</p>
                                        </div>
                                        <div className="ColorInfo">
                                            <p><span>hex</span>&#58; B594C3</p>
                                            <p><span>rgb</span>&#58; 181, 148, 195</p>
                                        </div>
                                    </div>
                                    <div className="Color-4">
                                    <div className="ColorTitle">
                                            <p>04</p>
                                            <p>thistle</p>
                                        </div>
                                        <div className="ColorInfo">
                                            <p><span>hex</span>&#58; D0BDDB</p>
                                            <p><span>rgb</span>&#58; 208, 189, 219</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ProjectLinks">
                        <button className="ViewFiles">
                            <a href="https://www.dropbox.com/sh/t6j0d882l18ajel/AAAuAl1ML0kWPePpuiCvudkma?dl=0">view screens</a>
                            <TbChevronUpRight />
                        </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

            { showButton && (
                <button onClick={ scrollToTop } className="ScrollToTop">
                    &#8593;
                </button>
            ) }

        </>
    )
};

export default Projects;