import { useEffect, useState } from "react";
import { motion as m } from "framer-motion";
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
                <m.section 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="ProjectHero">
                    <m.img 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        src={ brandHeroImg }
                        alt="A series of iPhones face-down, with one in the middle faced-up, showing a website page"
                        />
                </m.section>

                <m.section 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="ProjectLinks">
                    <a target="_blank" href="https://www.figma.com/community/file/1187868244670810561/" className="ProjectButton">
                        templates
                    </a>
                    <a target="_blank" href="https://github.com/asbhogal/React-Brand-Responsive-Web-Page" className="ProjectButton">
                        code
                    </a>
                    <a target="_blank" href="https://brand-tm.vercel.app/" className="ProjectButton">
                        site
                    </a>
                </m.section>

                <m.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="ProjectAbout">
                    <m.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}>
                        About</m.h2>
                    <m.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="ProjectDateAndType">
                        <m.span 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}>Project Type: Personal</m.span>
                        <m.span 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}>Dec 2022 - Jan 2023</m.span>
                    </m.div>
                    <m.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }} className="ProjectLozenges">
                        <m.span 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }} className="ProjectLozenge">Design</m.span>
                        <m.span 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="ProjectLozenge">Development</m.span>
                    </m.div>
                    <m.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        id="SingleRowStacksAndTools" className="ProjectStacksAndTools">
                        <m.span 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}>
                            <span className="StackToolLozenge">Figma</span>
                            <span className="StackToolLozenge">UI Prototyping</span>
                            <span className="StackToolLozenge">Auto Layouts</span>
                            <span className="StackToolLozenge">Components</span>
                        </m.span>
                        <m.span 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}>
                            <span className="StackToolLozenge">React</span>
                            <span className="StackToolLozenge">JS</span>
                            <span className="StackToolLozenge">Babel</span>
                            <span className="StackToolLozenge">SASS</span>
                            <span className="StackToolLozenge">Webpack</span>
                            <span className="StackToolLozenge">Git</span>
                            <span className="StackToolLozenge">Vercel</span>
                        </m.span>
                    </m.div>
                    <m.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="ProjectAboutContent">
                        Brand is a conceptualised company which offers minimalistic interior decorating options inspired by Milanese design. Logos and assets were provided and from these, five responsive templates (for 5 breakpoints) were created using Figma. A responsive Web page from these was then built using React with SCSS, Babel and JS, compiled as a production build using Webpack and then shipped using Vercel.</m.p>
                </m.section>

                <m.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="DesignDecisions">
                    <m.h2 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}>
                        Design Decisions</m.h2>
                    <m.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="ProjectAboutContent">
                        The templates were kept consistent in design, aesthetic and layout. The clean, minimalistic structure with attention to whitespacing, legibility and heirarchy was also respected, paralleling the affluence communicated by the brand. The logo itself is assured, sharp and rigid, to emphasise the nature and quality of their products. The anti-flash white provides a medium through which the two extremes of black and white fuse in different elements at play and merge across various content typesets, yet still manage to become two distinct entities in their own right, emboldened by the contrasting logos used.</m.p>
                </m.section>

                <m.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="ProjectTypefaces">
                    <m.h2 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}>
                        Typeface</m.h2>
                    <m.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="ProjectTypefaceInfo">
                        <m.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            id="BrandTypeface">
                            Inter</m.span>
                        <m.div 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            id="BrandTypeface" className="TypefaceWeights">
                            <m.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}>Singular</m.span>
                            <m.ul 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                id="BrandTypeface" className="TypefaceWeightsList">
                                <li className="Weight-400">04 Regular</li>
                                ⋅ 
                                <li id="Weight-500">05 Medium</li>
                                ⋅ 
                                <li id="Weight-600">06 Semi Bold</li>
                                ⋅ 
                                <li id="Weight-700">07 Bold</li>
                                ⋅ 
                                <li id="Weight-900">09 Black</li>
                            </m.ul>
                        </m.div>
                    </m.div>
                </m.section>

                <m.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="ProjectAssetsAndBranding">
                    <m.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}>
                        Branding & Assets</m.h2>
                    <m.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="ProjectAssetsAndBrandingContainer">
                        <m.div 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="AssetsAndBranding">
                            <m.img 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }} 
                                src={ brandImages }
                                alt="Images of Milanese-designed furniture" />
                            <m.img 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                src={ brandLogoBlack }
                                alt="The word BRAND in bold, black lettering" />
                            <m.img 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                src={ brandLogoWhite }
                                alt="The word BRAND in bold, white lettering" />
                        </m.div>
                        <m.div 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="AssetsAndBranding">
                            <m.img src={ brandComponents } />
                        </m.div>
                        <m.div 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="AssetsAndBranding">
                            <m.img 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                src={ brandColorPalette }
                                alt="A color palette"
                                />
                        </m.div>
                    </m.div>
                </m.section>

                <m.section 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="ProjectMockups">
                    <m.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}>
                    Mockups</m.h2>
                    <m.img 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        src={ brandMockups } />
                </m.section>

                <m.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="ProjectScreens">
                    <m.h2 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}>
                        Screens</m.h2>
                    <m.img 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }} 
                        src={ brandiPhoneToggleImage } />
                    <m.img 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }} 
                        src={ brandiMacImage } />
                    <m.img 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }} 
                        src={ brandMacBookImage } />
                    <m.img 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }} 
                        src={ brandiPadImage } />
                    <m.img 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }} 
                        src={ brandiPad2Image } />
                </m.section>

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