import { useEffect, useState } from "react";

import yamahaKeyboard from "../assets/images/LiteLife/assets/Yamaha.jpg";
import screwdriverBlack from "../assets/images/LiteLife/assets/Screwdriver.jpg";
import iMacWhite from "../assets/images/LiteLife/assets/iMacWhite.jpg";
import earphonesCase from "../assets/images/LiteLife/assets/Earphones.jpg";
import deskLamp from "../assets/images/LiteLife/assets/DeskLamp.jpg";
import cordDark from "../assets/images/LiteLife/assets/Cord.jpg";
import chargingBank from "../assets/images/LiteLife/assets/ChargingBank.jpg";
import blackMacBook from "../assets/images/LiteLife/assets/BlackMacbook.jpg";
import liteLifeColorPalette from "../assets/images/LiteLife/assets/LiteLifePalette.svg";
import Header from "./Header";
import Footer from "./Footer";
import liteLifeHeroImg from "../assets/images/LiteLife/LiteLifeHeroImg.jpg";
import liteLifeGalaxyImage from "../assets/images/LiteLife/mockups/GalaxyMockup.png";
import liteLifeMacbookAndIphoneImage from "../assets/images/LiteLife/mockups/MacbookAndiPhoneMockup.png";
import liteLifeiPadImage from "../assets/images/LiteLife/mockups/iPadMockup.png";
import liteLifeiMacImage from "../assets/images/LiteLife/mockups/iMacMockup.png";

import CTA from "./CTA";

const LiteLife = () => {

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
                    <img src={ liteLifeHeroImg }/>
                </section>
                <section className="ProjectLinks">
                    <a target="_blank" href="https://github.com/asbhogal/React-Tech-Commerce.Js-Site" className="ProjectButton">
                        code
                    </a>
                    <a target="_blank" href="https://litelife.vercel.app/" className="ProjectButton">
                        site
                    </a>
                </section>
                <section className="ProjectAbout">
                    <h2>About</h2>
                    <div className="ProjectDateAndType">
                        <span>Project Type: Personal</span>
                        <span>Jan 2023 - Feb 2023</span>
                    </div>
                    <div className="ProjectLozenges">
                        <span className="ProjectLozenge">Design</span>
                        <span className="ProjectLozenge">Development</span>
                    </div>
                    <div className="ProjectStacksAndTools">
                        <span>Material UI</span>
                        <span>REACT | JS | COMMERCE.JS | STRIPE | WEBPACK | GIT | VERCEL</span>
                    </div>
                    <p className="ProjectAboutContent">Lite Life is a conceptualised e-commerce company which specialises in selling high quality, simplistic technological products for minimalistic working environments. Design for this project was handled by Material UI. The project was built using React and Commerce.js (a headless CMS) to handle the project catologue, cart system and ordering. Stripe payment gateway was also configured to handle the checkout process and order confirmation. This project was compiled using Webpack then shipped for production via Vercel.</p>
                </section>
                <section className="ProjectTypefaces">
                    <h2>Typeface</h2>
                    <div className="ProjectTypefaceInfo">
                        <span id="LiteLifeTypeface" className="Typeface">Roboto</span>
                        <div id="LiteLifeTypeface" className="TypefaceWeights">
                            <span>Singular</span>
                            <ul id="LiteLifeTypeface" className="TypefaceWeightsList">
                                <li className="Weight-400">04 Regular</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="ProjectAssetsAndBranding">
                    <h2>Branding & Assets</h2>
                    <div id="LiteLiteAssetsAndBranding" className="ProjectAssetsAndBrandingContainer">
                        <div id="LiteLifeAssets" className="AssetsAndBranding">
                            <img src={ yamahaKeyboard } />
                            <img src={ screwdriverBlack } />
                            <img src={ cordDark } />
                            <img src={ deskLamp } />
                            <img src={ chargingBank } />
                            <img src={ iMacWhite } />
                            <img src={ blackMacBook } />
                            <img src={ earphonesCase } />
                        </div>
                        {/* <div className="AssetsAndBranding">
                            <img src={ brandComponents } />
                        </div> */}
                        <div className="AssetsAndBranding">
                            <img className="LiteLifeColorPalette" src={ liteLifeColorPalette } />
                        </div>
                    </div>
                </section>

                <section className="ProjectScreens">
                    <h2>Screens</h2>
                    <img src={ liteLifeGalaxyImage } />
                    <img src={ liteLifeMacbookAndIphoneImage } />
                    <img src={ liteLifeiMacImage } />
                    <img src={ liteLifeiPadImage } />
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

export default LiteLife;