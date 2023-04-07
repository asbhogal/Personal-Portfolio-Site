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
import liteLifeHeroImg from "../assets/images/LiteLife/LiteLifeHeroImg.png";
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
                        <span>Material UI</span>
                        <span>REACT | JS | COMMERCE.JS | STRIPE | WEBPACK | GIT | VERCEL</span>
                    </div>
                    <p className="ProjectAboutContent">Merciful christian intentions philosophy marvelous. Mountains pious philosophy sea snare virtues faith faith eternal-return noble madness. Deceptions snare virtues victorious superiority free selfish enlightenment spirit self salvation. Philosophy gains prejudice holiest self eternal-return eternal-return law ocean faith grandeur.</p>
                </section>
                <section className="ProjectTypefaces">
                    <h2>Typeface</h2>
                    <div className="ProjectTypefaceInfo">
                        <span id="LiteLifeTypeface" className="Typeface">Roboto</span>
                        <div id="BrandTypeface" className="TypefaceWeights">
                            <span>Singular</span>
                            <ul className="TypefaceWeightsList">
                                <li className="Weight-400">04 Regular</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="ProjectAssetsAndBranding">
                    <h2>Branding & Assets</h2>
                    <div className="ProjectAssetsAndBrandingContainer">
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

                {/* <section className="ProjectMockups">
                    <h2>Mockups</h2>
                    <img src={ brandMockups } />
                </section> */}

                <section className="ProjectScreens">
                    <h2>Screens</h2>
                    <img src={ liteLifeGalaxyImage } />
                    <img src={ liteLifeMacbookAndIphoneImage } />
                    <img src={ liteLifeiPadImage } />
                    <img src={ liteLifeiMacImage } />
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