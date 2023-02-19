import Header from "./Header";
import Footer from "./Footer";
import "../scss/index.scss";

import brandBoardCover from "../assets/images/brand-board-template-cover.jpg";
import responsiveWireframesCover from "../assets/images/responsive-wireframes-cover.jpg";

import { TbChevronUpRight } from "react-icons/tb";

import { useState, useEffect } from "react";
import { motion as m } from "framer-motion";

const FreeResources = () => {

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
            <m.section
                initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                className="FreeResourcesCover">
                <h1 className="PageHeaderTitle">free resources</h1>
            </m.section>
            <m.section initial={{opacity: 0}} animate={{opacity: 1}} className="FreeResourcesSection">
                    <div className="ResponsiveWireframesCard">
                    <div className="ResponsiveWireframesSnapshot ImageSnapshot">
                        <img src={ responsiveWireframesCover }></img>
                    </div>
                        <h2 className="ResponsiveWireframesHeading2 ResourcesTitle">
                            <span className="ResourceWord"><span className="FirstLetterAccent">R</span>esponsive</span>
                            <span className="ResourceWord"><span className="FirstLetterAccent">W</span>ireframes</span>
                        </h2>
                        <p>A set of responsive wireframes for a typical company home page to demonstrate Figma's auto layout capabilities across five common screen breakpoints (1440px+, 1440px, 1024px, 744px, 375px). Please note that these are for demonstrative purposes and user-centred research should always be carried out prior.</p>
                        <div className="ResourceLinks">
                            <button className="ViewFiles">
                                <a target="_blank" href="https://www.figma.com/community/file/1189223658475172983">download</a>
                                <TbChevronUpRight />
                            </button>
                        </div>
                    </div>
                    <div className="BrandBoardCard">
                        <div className="BrandBoardCardSnapshot ImageSnapshot">
                            <img src={ brandBoardCover }></img>
                        </div>
                        <h2 className="BrandBoardHeading2 ResourcesTitle">
                            <span className="ResourceWord"><span className="FirstLetterAccent">B</span>rand </span>
                            <span className="ResourceWord"><span className="FirstLetterAccent">B</span>oard </span>
                            <span className="ResourceWord"><span className="FirstLetterAccent">T</span>emplate</span>
                        </h2>
                        <p>A brand board template to help with company brand strategies, complete with a logo and alt logo section, nude color palette example, mood board section, brand concept section and typography set example. Please note these are for demonstrative purposes and user-centred research should always be carried out prior.</p>
                        <div className="ResourceLinks">
                            <button className="ViewFiles">
                                <a target="_blank" href="https://www.figma.com/community/file/1192459698727174432">download</a>
                                <TbChevronUpRight />
                            </button>
                        </div>
                    </div>
            </m.section>
            <Footer />

            { showButton && (
                <button onClick={ scrollToTop } className="ScrollToTop">
                    &#8593;
                </button>
            ) }

        </>
    )
};

export default FreeResources;