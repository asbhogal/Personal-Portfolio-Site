import { useEffect, useState } from "react";

import Header from "./Header";
import Footer from "./Footer";
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
import StyleGuide from "./StyleGuide";
import BrandGuide from "./BrandGuide";

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
            <div className="BrandProject">
            <Header
                HeaderPosition="HeaderPosition"
            />
                <div className="BrandProjectCover">
                    {/* <div className="CoverLayer"></div> */}
                    <div className="BrandHeroLogo">
                        <img src={ brandHeroLogo }/>
                    </div>
                    <div className="BrandHeroMockup">
                        <img src={ brandHeroMockup } />
                    </div>
                </div>

                <section className="BrandContentSection">

                    <div className="About">
                        <h2 className="AboutHeadline">
                            About
                        </h2>
                        <div className="AboutRightContent">
                            <h3 className="AboutSubLine">
                                Project Type: Personal
                            </h3>
                            <p className="ProjectTimeline">
                                Dec 2023 - Dec 2023
                            </p>
                            <p className="AboutSummary">
                            Brand is an interior design company. This project was developed from an initial crash course provided by Flux Academy on responsive design. Assets, including images, buttons, copy and typography, were used to generate components and a series of five templates in auto-layout format for breakpoints 1440px+, 1440px, 1024px, 744px and 375px. The decision was made to keep to the styling and transfer this across the different templates. These were then rendered in the form of a SPA (Single Page Application) using React with SASS, Babel and Webpack and deployed using Vercel.
                            </p>
                        </div>
                    </div>

                    <div className="StacksAndTools">
                        <h2 className="StacksAndToolsHeadline">
                            Stacks
                        </h2>
                        <p className="StacksAndToolsSummary">
                            React | JS | SCSS | Babel | Webpack | Git | npm | Vercel
                            <br />
                            <br />
                            Figma | Mockups | UI Prototyping | Components
                        </p>
                    </div>

                    <div className="Grids">
                        <h2 className="GridsHeadline">
                            Grids
                        </h2>
                        <div className="GridContainer">
                            <div className="GridCol">
                                <p>Wide - 1440px+</p>
                                <img src={ brandGridWideImg } />
                            </div>
                            <div className="GridCol">
                                <p>Desktop - 1440px</p>
                                <img src={ brandGridDesktopImg } />
                            </div>
                            <div className="GridCol">
                                <p>Tablet - 1024px</p>
                                <img src={ brandGridTabletImg } />
                            </div>
                            <div className="GridCol">
                                <p>Tablet (Small) - 744px</p>
                                <img src={ brandGridTabletSmallImg } />
                            </div>
                            <div className="GridCol">
                                <p>Mobile - 375px</p>
                                <img src={ brandGridMobileImg } />
                            </div>
                        </div>
                    </div>

                    <div className="DesignApproach">
                        <h2 className="DesignHeadline">
                            design
                        </h2>
                        <p className="DesignSummary">
                        The templates were kept consistent in design, aesthetic and layout. The clean, minimalistic structure with attention to whitespacing, legibility and heirarchy was also respected, paralleling the affluence communicated by the brand. The logo itself is assured, sharp and rigid, to emphasise the nature and quality of their products. The anti-flash white provides a medium through which the two extremes of black and white fuse in different elements at play and merge across various content typesets, yet still manage to become two distinct entities in their own right, emboldened by the contrasting logos used.
                        </p>
                    </div>

                    <div className="Branding">
                        <h2 className="BrandingHeadline">
                            Branding
                        </h2>
                        <div className="BrandingRightContent">
                            <BrandGuide />
                            <StyleGuide />
                        </div>
                    </div>

                    <div className="Mockups">
                        <h2 className="MockupsHeadline">
                            Mockups
                        </h2>
                        <div className="MockupImages">
                            <div className="MockupTable">
                                <div className="MainMockupImage">
                                    <img src={ brandiMacImage } />
                                </div>
                                <div className="MockupImageRow">
                                    <div className="MockupImage">
                                        <img src={ brandMacBookImage } />
                                    </div>
                                    <div className="MockupImage">
                                        <img src={ brandiPhoneImage } />
                                    </div>
                                    <div className="MockupImage">
                                        <img src={ brandiPadImage } />
                                    </div>
                                    <div className="MockupImage">
                                        <img src={ brandiPad2Image } />
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                </section>

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