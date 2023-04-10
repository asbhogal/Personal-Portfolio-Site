import { useEffect, useState } from "react";
import brandImages from "../assets/images/BRAND/BrandImages.png";
import brandLogoBlack from "../assets/images/logos/brand-logo-black.svg";
import brandLogoWhite from "../assets/images/logos/brand-logo-white.svg";
import brandComponents from "../assets/images/BRAND/BrandComponents.svg";
import brandColorPalette from "../assets/images/BRAND/BrandColorPalette.svg";
import Header from "./Header";
import Footer from "./Footer";
import cryptoverseHeroImg from "../assets/images/Cryptoverse/mockups/cryptoverseHeroImg.png";
import brandMockups from "../assets/images/BRAND/mockups/BrandMockups.png";
import brandiPhoneToggleImage from "../assets/images/BRAND/mockups/Brand-iPhoneToggleMockup.png";
import brandiMacImage from "../assets/images/BRAND/mockups/Brand-iMacMockup.png";
import brandMacBookImage from "../assets/images/BRAND/mockups/Brand-MacBookMockup.png";
import brandiPadImage from "../assets/images/BRAND/mockups/Brand-iPadMockup.png";
import brandiPad2Image from "../assets/images/BRAND/mockups/Brand-iPad2Mockup.png";

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
                    <img src={ cryptoverseHeroImg }/>
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
                        <span>March 2023 - Present</span>
                    </div>
                    <div className="ProjectLozenges">
                        <span className="ProjectLozenge">Design</span>
                        <span className="ProjectLozenge">Development</span>
                    </div>
                    <div className="ProjectStacksAndTools">
                        <span>Figma | UI Prototyping | Auto Layouts | Components</span>
                        <span>REACT | JS | BABEL | SASS | WEBPACK | GIT | VERCEL</span>
                    </div>
                    <p className="ProjectAboutContent">Cryptoverse is a conceptualised company which offers data on different cryptocurrencies, including market capitalisation, exchanges and current news. The application was built using Next.js and leveraged Redux RTK Query to manage API calls from Coinranking, Coin Gecko and Bing News Search. The app was also styled using SCSS, compiled as a production build using Webpack and shipped via Vercel.</p>
                </section>
                <section className="ProjectTypefaces">
                    <h2>Typeface</h2>
                    <div className="ProjectTypefaceInfo">
                        <span id="CryptoverseTypeface">Noto Sans</span>
                        <div id="CryptoverseTypeface" className="TypefaceWeights">
                            <span>Singular</span>
                            <ul className="TypefaceWeightsList">
                                <li className="Weight-200">02 Extra Light</li>
                                ⋅ 
                                <li id="Weight-300">03 Light</li>
                                ⋅ 
                                <li id="Weight-400">07 Bold</li>
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