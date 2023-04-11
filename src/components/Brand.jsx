import { useEffect, useState } from "react";
import brandImages from "../assets/images/BRAND/BrandImages.png";
import brandLogoBlack from "../assets/images/logos/brand-logo-black.svg";
import brandLogoWhite from "../assets/images/logos/brand-logo-white.svg";
import brandComponents from "../assets/images/BRAND/BrandComponents.svg";
import brandColorPalette from "../assets/images/BRAND/BrandColorPalette.svg";
import Header from "./Header";
import Footer from "./Footer";
import brandHeroImg from "../assets/images/BRAND/mockups/optimised/BrandHeroImg.jpeg";
import brandMockups from "../assets/images/BRAND/mockups/optimised/BrandMockups.jpeg";
import brandiPhoneToggleImage from "../assets/images/BRAND/mockups/optimised/Brand-iPhoneToggleMockup.jpeg";
import brandiMacImage from "../assets/images/BRAND/mockups/optimised/Brand-iMacMockup.jpeg";
import brandMacBookImage from "../assets/images/BRAND/mockups/optimised/Brand-MacBookMockup.jpeg";
import brandiPadImage from "../assets/images/BRAND/mockups/optimised/Brand-iPadMockup.jpeg";
import brandiPad2Image from "../assets/images/BRAND/mockups/optimised/Brand-iPad2Mockup.jpg";
import CTA from "./CTA";

const Brand = () => {

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {

        document.title = 'Brand | Aman Singh Bhogal';

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
                    <img src={ brandHeroImg }/>
                </section>
                <section className="ProjectLinks">
                    <a target="_blank" href="https://www.figma.com/community/file/1187868244670810561/" className="ProjectButton">
                        templates
                    </a>
                    <a target="_blank" href="https://github.com/asbhogal/React-Brand-Responsive-Web-Page" className="ProjectButton">
                        code
                    </a>
                    <a target="_blank" href="https://brand-tm.vercel.app/" className="ProjectButton">
                        site
                    </a>
                </section>
                <section className="ProjectAbout">
                    <h2>About</h2>
                    <div className="ProjectDateAndType">
                        <span>Project Type: Personal</span>
                        <span>Dec 2022 - Jan 2023</span>
                    </div>
                    <div className="ProjectLozenges">
                        <span className="ProjectLozenge">Design</span>
                        <span className="ProjectLozenge">Development</span>
                    </div>
                    <div id="SingleRowStacksAndTools" className="ProjectStacksAndTools">
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
                    <p className="ProjectAboutContent">Brand is a conceptualised company which offers minimalistic interior decorating options inspired by Milanese design. Logos and assets were provided and from these, five responsive templates (for 5 breakpoints) were created using Figma. A responsive Web page from these was then built using React with SCSS, Babel and JS, compiled as a production build using Webpack and then shipped using Vercel.</p>
                </section>

                <section className="DesignDecisions">
                    <h2>Design Decisions</h2>
                    <p className="ProjectAboutContent">The templates were kept consistent in design, aesthetic and layout. The clean, minimalistic structure with attention to whitespacing, legibility and heirarchy was also respected, paralleling the affluence communicated by the brand. The logo itself is assured, sharp and rigid, to emphasise the nature and quality of their products. The anti-flash white provides a medium through which the two extremes of black and white fuse in different elements at play and merge across various content typesets, yet still manage to become two distinct entities in their own right, emboldened by the contrasting logos used.</p>
                </section>

                <section className="ProjectTypefaces">
                    <h2>Typeface</h2>
                    <div className="ProjectTypefaceInfo">
                        <span id="BrandTypeface">Inter</span>
                        <div id="BrandTypeface" className="TypefaceWeights">
                            <span>Singular</span>
                            <ul id="BrandTypeface" className="TypefaceWeightsList">
                                <li className="Weight-400">04 Regular</li>
                                ⋅ 
                                <li id="Weight-500">05 Medium</li>
                                ⋅ 
                                <li id="Weight-600">06 Semi Bold</li>
                                ⋅ 
                                <li id="Weight-700">07 Bold</li>
                                ⋅ 
                                <li id="Weight-900">09 Black</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="ProjectAssetsAndBranding">
                    <h2>Branding & Assets</h2>
                    <div className="ProjectAssetsAndBrandingContainer">
                        <div className="AssetsAndBranding">
                            <img src={ brandImages } />
                            <img src={ brandLogoBlack } />
                            <img src={ brandLogoWhite } />
                        </div>
                        <div className="AssetsAndBranding">
                            <img src={ brandComponents } />
                        </div>
                        <div className="AssetsAndBranding">
                            <img src={ brandColorPalette } />
                        </div>
                    </div>
                </section>

                <section className="ProjectMockups">
                    <h2>Mockups</h2>
                    <img src={ brandMockups } />
                </section>
                <section className="ProjectScreens">
                    <h2>Screens</h2>
                    <img src={ brandiPhoneToggleImage } />
                    <img src={ brandiMacImage } />
                    <img src={ brandMacBookImage } />
                    <img src={ brandiPadImage } />
                    <img src={ brandiPad2Image } />
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