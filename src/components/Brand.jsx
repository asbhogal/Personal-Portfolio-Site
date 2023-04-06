import { useEffect, useState } from "react";
import { BsGlobe2, BsCodeSlash, BsBrush } from "react-icons/bs";

import Header from "./Header";
import Footer from "./Footer";
import brandHeroImg from "../assets/images/BRAND/mockups/BrandHeroImg.png";
import brandMockups from "../assets/images/BRAND/mockups/BrandMockups.png";
import brandiPhoneToggleImage from "../assets/images/BRAND/mockups/Brand-iPhoneToggleMockup.png";
import brandHeroLogo from "../assets/images/BRAND/BrandHeroLogo.svg";
import brandHeroMockup from "../assets/images/BRAND/BrandHeroImage.png";
import brandiMacImage from "../assets/images/BRAND/mockups/Brand-iMacMockup.png";
import brandMacBookImage from "../assets/images/BRAND/mockups/Brand-MacBookMockup.png";
import brandiPhoneImage from "../assets/images/BRAND/mockups/Brand-iPhone14Mockup.png";
import brandiPadImage from "../assets/images/BRAND/mockups/Brand-iPadMockup.png";
import brandiPad2Image from "../assets/images/BRAND/mockups/Brand-iPad2Mockup.png";
import brandGridWideImg from "../assets/images/BRAND/GridWide.png";
import brandGridDesktopImg from "../assets/images/BRAND/GridDesktop.png";
import brandGridTabletImg from "../assets/images/BRAND/GridTablet(Large).png";
import brandGridTabletSmallImg from "../assets/images/BRAND/GridTablet(Small).png";
import brandGridMobileImg from "../assets/images/BRAND/GridMobile.png";
import brandMobileMenuToggle from "../assets/images/BRAND/BrandMobileMenu.png";
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
                    <img src={ brandHeroImg }/>
                </section>
                <section className="ProjectLinks">
                    <a target="_blank" href="#">
                        <button className="ProjectButton">templates</button>
                    </a>
                    <a target="_blank" href="#">
                        <button className="ProjectButton">code</button>
                    </a>
                    <a target="_blank" href="#">
                        <button className="ProjectButton">site</button>
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
                    <div className="ProjectStacksAndTools">
                        <span>Figma | UI Prototyping | Auto Layouts | Components</span>
                        <span>REACT | JS | BABEL | SASS | WEBPACK | GIT | VERCEL</span>
                    </div>
                    <p className="ProjectAboutContent">Merciful christian intentions philosophy marvelous. Mountains pious philosophy sea snare virtues faith faith eternal-return noble madness. Deceptions snare virtues victorious superiority free selfish enlightenment spirit self salvation. Philosophy gains prejudice holiest self eternal-return eternal-return law ocean faith grandeur.</p>
                </section>
                <section className="ProjectTypefaces">
                    <h2>Typeface</h2>
                    <div className="ProjectTypefaceInfo">
                        <span id="BrandTypeface">Inter</span>
                        <div id="BrandTypeface" className="TypefaceWeights">
                            <span>Singular</span>
                            <ul className="TypefaceWeightsList">
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