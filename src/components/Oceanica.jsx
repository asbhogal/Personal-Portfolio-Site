import { useEffect, useState } from "react";

import Header from "./Header";
import Footer from "./Footer";
import oceanicaLogo from "../assets/images/Oceanica/assets/Logo.svg";
import oceanicaColorPalette from "../assets/images/Oceanica/assets/OceanicaColorPalette.svg";
import oceanicaTestimonialCard from "../assets/images/Oceanica/assets/TestimonialCard.svg";
import oceanicaPackagesCard from "../assets/images/Oceanica/assets/PackagesCard.svg";
import oceanicaHeroImg from "../assets/images/Oceanica/mockups/oceanicaHeroImg.jpg";
import oceanicaMockups from "../assets/images/Oceanica/mockups/OceanicaTemplates.png";
import oceanicaPrototypes from "../assets/images/Oceanica/OceanicaPrototypes.png";
import oceanicaiPhoneMockup from "../assets/images/Oceanica/mockups/iPhoneMockup.jpg";
import oceanicaiPadMockup from "../assets/images/Oceanica/mockups/iPadMockup.jpg";
import oceanicaMacbookMockup from "../assets/images/Oceanica/mockups/MacbookMockup.jpg";
import CTA from "./CTA";

const Brand = () => {

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
            <Header />
            <div className="Project">
                <section className="ProjectHero">
                    <img src={ oceanicaHeroImg }/>
                </section>
                <section className="ProjectLinks">
                    <a target="_blank" href="https://www.figma.com/community/file/1190467806509137896/" className="ProjectButton">
                        templates
                    </a>
                    <a target="_blank" href="https://github.com/asbhogal/React-Oceanica-Responsive-Web-Page" className="ProjectButton">
                        code
                    </a>
                    <a target="_blank" href="https://oceanica.vercel.app/" className="ProjectButton">
                        site
                    </a>
                </section>
                <section className="ProjectAbout">
                    <h2>About</h2>
                    <div className="ProjectDateAndType">
                        <span>Project Type: Personal</span>
                        <span>Dec 2022 - Feb 2023</span>
                    </div>
                    <div className="ProjectLozenges">
                        <span className="ProjectLozenge">Design</span>
                        <span className="ProjectLozenge">Development</span>
                    </div>
                    <div className="ProjectStacksAndTools">
                        <span>
                            <span className="StackToolLozenge">Figma</span>
                            <span className="StackToolLozenge">UI Prototyping</span>
                            <span className="StackToolLozenge">Auto Layouts</span>
                            <span className="StackToolLozenge">Components</span>
                        </span>
                        <span>
                            <span className="StackToolLozenge">React</span>
                            <span className="StackToolLozenge">JS</span>
                            <span className="StackToolLozenge">Babel</span>
                            <span className="StackToolLozenge">SASS</span>
                            <span className="StackToolLozenge">Webpack</span>
                            <span className="StackToolLozenge">Git</span>
                            <span className="StackToolLozenge">Vercel</span>
                        </span>
                    </div>
                    <p className="ProjectAboutContent">Oceanica is a conceptualised company which offers luxury travel resorts and activities around the world. Logos, assets and responsive templates (for 5 breakpoints) were created using Figma, including prototypes to simulate a booking screen. A responsive Web page from these was then built using React with SCSS, Babel and JS, compiled as a production build using Webpack and then shipped using Vercel.</p>
                </section>

                <section className="DesignDecisions">
                    <h2>Design Decisions</h2>
                    <p className="ProjectAboutContent">Luxury and allure were key factors behind the message of this brand. The font used symbolises the nature of the sea and open waters; vast and spacious yet defined and affirmed, further reinforced by the semi bold and bold weightings, broad shoulders and wide leading. The logo of a wave is simplistic and therefore easily memorable; it's character parallels that of the typography leveraged and against the rich black backdrop rings true the message of style and class, with its elliptical nature replicating that of the shape of the Earth and the wave line flowing into the brand name. The background calligraphic words carry this theme throughout the page with its swashes leaning on an axis akin to the Earth's own orbit, as the user is enveloped in this magnetism during their journey.</p>
                </section>

                <section className="ProjectTypefaces">
                    <h2>Typeface</h2>
                    <div className="ProjectTypefaceInfo">
                        <span id="OceanicaTypeface">manrope</span>
                        <div id="OceanicaTypeface" className="TypefaceWeights">
                            <span>Singular</span>
                            <ul id="OceanicaTypeface" className="TypefaceWeightsList">
                                <li className="Weight-400">04 Regular</li>
                                ⋅ 
                                <li id="Weight-500">05 Medium</li>
                                ⋅ 
                                <li id="Weight-600">06 Semi Bold</li>
                                ⋅ 
                                <li id="Weight-700">07 Bold</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="ProjectAssetsAndBranding">
                    <h2>Branding & Assets</h2>
                    <div id="OceanicaAssetsAndBrandingContainer" className="ProjectAssetsAndBrandingContainer">
                        <div className="AssetsAndBranding">
                            <img src={ oceanicaLogo } />
                        </div>
                        <div className="AssetsAndBranding">
                            <img src={ oceanicaTestimonialCard } />
                            <img src={ oceanicaPackagesCard } />
                        </div>
                        <div className="AssetsAndBranding">
                            <img src={ oceanicaColorPalette } />
                        </div>
                    </div>
                </section>

                <section className="ProjectMockups">
                    <h2>Mockups</h2>
                    <img src={ oceanicaMockups } />
                </section>

                <section className="ProjectPrototypes">
                    <h2>Prototypes</h2>
                    <img src={ oceanicaPrototypes } />
                </section>

                <section className="ProjectScreens">
                    <h2>Screens</h2>
                    <img src={ oceanicaiPhoneMockup } />
                    <img src={ oceanicaiPadMockup } />
                    <img src={ oceanicaMacbookMockup } />
                </section>
                <CTA />
            </div>

            <Footer />

            { showButton && (
                <button onClick={ scrollToTop } className="ScrollToTop">
                    &#8593;
                </button>
            ) }
        </>
    )
}

export default Brand;