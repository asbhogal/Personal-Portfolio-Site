import { useEffect, useState } from "react";
import { motion as m } from "framer-motion";

import Footer from "./Footer";
import Navbar from "./Header";
import kmcLogo from "../assets/images/logos/KMC_Birmingham_Logo.svg";
import brandLogoBlack from "../assets/images/logos/brand-logo-black.svg";
import brandLogoWhite from "../assets/images/logos/brand-logo-white.svg";
import brandIconBlack from "../assets/images/logos/brand-icon-black.svg";
import brandIconWhite from "../assets/images/logos/brand-icon-white.svg";
import oceanicaLogo from "../assets/images/logos/Oceanica-Logo.svg";
import oceanicaIcon from "../assets/images/logos/Oceanica-Icon.svg";
import liteLifeLogo from "../assets/images/logos/LiteLife-Logo.svg";
import kryptoLogo from "../assets/images/logos/Krypto-Logo.svg";
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
            <m.div 
                initial={ { opacity: 0 } } 
                animate={ { opacity: 1 } } 
                className="Projects">
                <div className="ProjectCover">
                    <h1>projects</h1>
                </div>
                {/* KRYPTO */}
                <div className="ProjectSection">
                    <div className="ProjectInfo">
                        <h2 className="ProjectTitle">
                            <div className="WordUnit">
                            <span className="FirstLetterAccent">K</span>
                            rypto
                            </div>
                        </h2>
                        <span className="ProjectTimeDuration">Dec 2022 - Feb 2023</span>
                        <span className="ProjectToolsAndTechStacks">
                            <span className="ProjectTools">Figma &#124; Webpack &#124; Vercel</span>
                            <span className="ProjectTools">High-Fidelity Mockups &#124; Components &#124; UI Prototyping</span>
                            <span className="ProjectTechStacks">React &#124; JS &#124; SASS</span>
                        </span>
                        <p className="ProjectSummary">KRYPTO is a cryptocurrency marketplace company that allows investors to buy and sell various crypto assets, monitor and track their financial behaviour. Wealth, assurity and trust were essential emotions and themes that were to be conveyed with this product. As the user follows the journey, a brief snapshot of each feature is meant to be shown in a way that is easy to digest and minimal in jargon. In a technical field such as asset investments, making this accessible to the everyday individual to bring newcomers on board was important. The designs were first rendered as high-fidelity templates in Figma, using UI Prototyping and components to emulate the typical flow of a user navigation. The single page template was created in 5 responsive versions at breakpoints 1440px+, 1440px, 1024px, 744px and 375px. This was then rendered using React, Babel and Vite and deployed using Vercel.</p>
                        <div className="DesignBrief">
                            <h3>Design Brief</h3>
                            <p className="DesignBriefSummary">The logo itself symbolises power, assurity and confidence with its bold presence, minimal kerning and rigid baseline and capline. This represents structure and rigidness, evoking a sense that the company has a strict, regulatory approach; everything is contained, carefully monitored and built. The use of sans-serif brings the brand to the modern age which is essential for the market it operates in. This also gives a sense of sleekness and youthfulness. The logos of companies the marketplace has featured on placed in the hero section becomes one of the very first elements the user sees, thereby reinforcing trust. The deep blue undertones adds a sense of status, mystery and power, as well as calmness. The deep and mid purple symbolise wealth and evokes a sense of trust- two psychological factors here in the marketing of the product. If people are to part with their money and invest in a relatively new type of financial market, trust is to be garnered. <br></br><br></br>The minimal use of light shades - limited to the text and accents, create a spacious canvas that is soothing to the eyes, complemented further by the background blur/gradient objects. The animated CTA button in the header also draws attention to purchasing NFTs and creates a dynamic sense of motion, of progression, yet in a patient manner, akin to a heartbeat, or pulse. This gives the message of 'purchase in your own time, yet activity is always happening.' Some words are elevated in light blue/green accents to create a sense of empowerment and motivation. These are used sparingly to draw greater attention to them through their limited, targetted and intentional usage, particularly 'next big thing' - signifying the advent of a new age of the internet as Web 3.0 is ushered in. The overarching message here is - "something big is coming, and you could gain something from being part of it."
</p>
                        </div>
                        <div className="Guides">
                            <div className="BrandGuideSection">
                                <h3>Brand Guide</h3>
                                <div id="#KryptoGuideInfo" className="BrandGuideInfo">
                                    <div id="KryptoLogoMarks" className="LogoMarks">
                                        <img className="KryptoLogo" src={ kryptoLogo }></img>                                    
                                    </div>
                                    <div className="Typography">
                                        <div className="KryptoTypographyInfo">
                                            <p id="KryptoFontFamily">Font Family</p>
                                            <div className="KryptoFontSet">
                                                <div className="KryptoFontFamily">
                                                    <p id="KryptoFamilyOutfitFont" className="KryptoTypographyFamily">Outfit</p>
                                                    <p id="KryptoFamilyOutfitFont" className="KryptoTypographyFamily">Outfit</p>
                                                    <p id="KryptoFamilyRobotoFont" className="KryptoTypographyFamily">Roboto</p>
                                                </div>
                                                <div className="KryptoFontHeirarchy">
                                                    <p id="KryptoFamilyOutfitFont" className="KryptoFontHeirarchy">Heading One</p>
                                                    <p id="KryptoFamilyOutfitFont" className="KryptoFontHeirarchy">Heading Two</p>
                                                    <p id="KryptoFamilyRobotoFont" className="KryptoFontHeirarchy">Paragraph</p>
                                                </div>
                                            </div>
                                            <p id="KryptoTypographyCase">Case</p>
                                            <p id="KryptoH1H2TypographyCase">lowercase</p>
                                            <p id="KryptoPTypographyCase">Sentence</p>
                                        </div>
                                        <p id="KryptoFontWeights">Weights</p>
                                        <ul className="KryptoTypography TypographyList">
                                            <div id="KryptoOutfitFontSet">
                                                <div className="Krypto TypographyWeightSet">
                                                    <p id="KryptoTypography-600" className="KryptoTypography TypographyListItem-600">Semi Bold</p>
                                                    <p id="KryptoTypography-700" className="KryptoTypography TypographyListItem-700">Bold</p>
                                                </div>
                                                <div className="Krypto TypographyFontSet">
                                                    <li id="KryptoTypography-600" className="KryptoTypography TypographyListItem-600">ABC abc 123</li>
                                                    <li id="KryptoTypography-700" className="KryptoTypography TypographyListItem-700">ABC abc 123</li>
                                                </div>
                                            </div>
                                            <div id="KryptoRobotoFontSet">
                                                <div className="Krpyto TypographyWeightSet">
                                                    <p id="KryptoTypography-400" className="KryptoTypography TypographyListItem-400">Regular</p>
                                                </div>
                                                <div className="Krypto TypographyFontSet">
                                                    <li id="KryptoTypography-400" className="KryptoTypography TypographyListItem-400">ABC abc 123</li>
                                                </div>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="StyleGuideSection">
                                <h3>Style Guide</h3>
                                <div className="ColorPalette">
                                    <div id="KryptoColor1" className="Color-1">
                                        <div className="ColorTitle">
                                            <p>01</p>
                                            <p>rich black</p>
                                        </div>
                                        <div className="ColorInfo">
                                            <p><span>hex</span>&#58; &#35;010922</p>
                                            <p><span>rgb</span>&#58; 1, 9, 34</p>
                                        </div>
                                    </div>
                                    <div id="KryptoColor2" className="Color-2">
                                        <div className="ColorTitle">
                                            <p>02</p>
                                            <p>cetacean blue</p>
                                        </div>
                                        <div className="ColorInfo">
                                            <p><span>hex</span>&#58; &#35;0b0f2f</p>
                                            <p><span>rgb</span>&#58; 11, 15, 47</p>
                                        </div>
                                    </div>
                                    <div id="KryptoColor3" className="Color-3">
                                        <div className="ColorTitle">
                                            <p>03</p>
                                            <p>deep koamaru</p>
                                        </div>
                                        <div className="ColorInfo">
                                            <p><span>hex</span>&#58; &#35;312964</p>
                                            <p><span>rgb</span>&#58; 49, 41, 100</p>
                                        </div>
                                    </div>
                                    <div id="KryptoColor4" className="Color-4">
                                        <div className="ColorTitle">
                                            <p>04</p>
                                            <p>ceil</p>
                                        </div>
                                        <div className="ColorInfo">
                                            <p><span>hex</span>&#58; &#35;8f8fdb</p>
                                            <p><span>rgb</span>&#58; 143, 143, 219</p>
                                        </div>
                                    </div>
                                    <div id="KryptoColor5" className="Color-5">
                                        <div className="ColorTitle">
                                            <p>05</p>
                                            <p>middle blue<br></br>green</p>
                                        </div>
                                        <div className="ColorInfo">
                                            <p><span>hex</span>&#58; &#35;86cfd0</p>
                                            <p><span>rgb</span>&#58; 134, 207, 208</p>
                                        </div>
                                    </div>
                                    <div id="KryptoColor6" className="Color-6">
                                        <div className="ColorTitle">
                                            <p>06</p>
                                            <p>crystal</p>
                                        </div>
                                        <div className="ColorInfo">
                                            <p><span>hex</span>&#58; &#35;aed4db</p>
                                            <p><span>rgb</span>&#58; 174, 212, 219</p>
                                        </div>
                                    </div>
                                    <div id="KryptoColor7" className="Color-7">
                                        <div className="ColorTitle">
                                            <p>07</p>
                                            <p>bright gray</p>
                                        </div>
                                        <div className="ColorInfo">
                                            <p><span>hex</span>&#58; &#35;ebebeb</p>
                                            <p><span>rgb</span>&#58; 235, 235, 235</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ProjectLinks">
                            <button className="ViewFiles">
                                <a target="_blank" href="https://www.figma.com/community/file/1188263961246625436">templates</a>
                                <TbChevronUpRight />
                            </button>
                            <button className="ViewFiles">
                                <a target="_blank" href="https://github.com/asbhogal/React-KRYPTO-Responsive-Web-Page">code</a>
                                <TbChevronUpRight />
                            </button>
                            <button className="ViewFiles">
                                <a target="_blank" href="https://krypto-site.vercel.app/">site</a>
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
                            <span className="FirstLetterAccent">O</span>
                            ceanica
                            </div>
                        </h2>
                        <span className="ProjectTimeDuration">Dec 2022 - Feb 2023</span>
                        <span className="ProjectToolsAndTechStacks">
                            <span className="ProjectTools">Figma &#124; Webpack &#124; Vercel</span>
                            <span className="ProjectTools">High-Fidelity Mockups &#124; Components &#124; UI Prototyping</span>
                            <span className="ProjectTechStacks">React &#124; JS &#124; SASS</span>
                        </span>
                        <p className="ProjectSummary">Oceanica is travel company which offers exclusive, luxury resorts across the globe. The designs were first rendered as high-fidelity wireframes in Figma, using UI Prototyping and components to emulate the typical flow of a user navigation. This single page template was created in 5 different responsive forms, each with auto-layout and at breakpoints 1440px+, 1440px, 1024px, 744px and 375px.  This was rendered using React, Babel and Webpack and deployed using Vercel.</p>
                        <div className="DesignBrief">
                            <h3>Design Brief</h3>
                            <p className="DesignBriefSummary">Luxury and allure were key factors behind the message of this brand. The font used symbolises the nature of the sea and open waters; vast and spacious yet defined and affirmed, further reinforced by the semi bold and bold weightings, broad shoulders and wide leading. The logo of a wave is simplistic and therefore easily memorable; it's character parallels that of the typography leveraged and against the rich black backdrop rings true the message of style and class, with its elliptical nature replicating that of the shape of the Earth and the wave line flowing into the brand name. The background calligraphic words carry this theme throughout the page with its swashes leaning on an axis akin to the Earth's own orbit, as the user is enveloped in this magnetism during their journey.</p>
                        </div>
                        <div className="Guides">
                            <div className="BrandGuideSection">
                                <h3>Brand Guide</h3>
                                <div id="#OceanicaGuideInfo" className="BrandGuideInfo">
                                    <div id="OceanicaLogoMarks" className="LogoMarks">
                                        <img className="OceanicaIcon" src={ oceanicaIcon }></img>
                                        <img className="OceanicaLogo" src={ oceanicaLogo }></img>                                    </div>
                                    <div className="Typography">
                                        <div className="TypographyInfo">
                                            <p>Font Family</p>
                                            <p id="OceanicaTypographyFamily">Manrope</p>
                                            <p >Case</p>
                                            <p id="OceanicaTypographyCase">Sentence</p>
                                        </div>
                                        <p>Weights</p>
                                        <ul className="KMCTypography TypographyList">
                                            <div className="TypographyWeightSet">
                                                <p id="OceanicaTypography-400" className="OceanicaTypography TypographyListItem-400">Regular</p>
                                                <p id="OceanicaTypography-500" className="OceanicaTypography TypographyListItem-500">Medium</p>
                                                <p id="OceanicaTypography-600" className="OceanicaTypography TypographyListItem-600">Semi Bold</p>
                                                <p id="OceanicaTypography-700" className="OceanicaTypography TypographyListItem-700">Bold</p>
                                            </div>
                                            <div className="TypographyFontSet">
                                                <li id="OceanicaTypography-400" className="OceanicaTypography TypographyListItem-400">ABC abc 123</li>
                                                <li id="OceanicaTypography-500" className="OceanicaTypography TypographyListItem-500">ABC abc 123</li>
                                                <li id="OceanicaTypography-600" className="OceanicaTypography TypographyListItem-600">ABC abc 123</li>
                                                <li id="OceanicaTypography-700" className="OceanicaTypography TypographyListItem-700">ABC abc 123</li>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="StyleGuideSection">
                                <h3>Style Guide</h3>
                                <div className="ColorPalette">
                                    <div id="OceanicaColor1" className="Color-1">
                                        <div className="ColorTitle">
                                            <p>01</p>
                                            <p>black</p>
                                        </div>
                                        <div className="ColorInfo">
                                            <p><span>hex</span>&#58; &#35;000000</p>
                                            <p><span>rgb</span>&#58; 0, 0, 0</p>
                                        </div>
                                    </div>
                                    <div id="OceanicaColor2" className="Color-2">
                                        <div className="ColorTitle">
                                            <p>02</p>
                                            <p>rich black</p>
                                        </div>
                                        <div className="ColorInfo">
                                            <p><span>hex</span>&#58; &#35;000408</p>
                                            <p><span>rgb</span>&#58; 0, 4, 8</p>
                                        </div>
                                    </div>
                                    <div id="OceanicaColor3" className="Color-3">
                                        <div className="ColorTitle">
                                            <p>03</p>
                                            <p>charleston green</p>
                                        </div>
                                        <div className="ColorInfo">
                                            <p><span>hex</span>&#58; &#35;262c31</p>
                                            <p><span>rgb</span>&#58; 38, 44, 49</p>
                                        </div>
                                    </div>
                                    <div id="OceanicaColor4" className="Color-4">
                                        <div className="ColorTitle">
                                            <p>04</p>
                                            <p>moonstone<br></br>blue</p>
                                        </div>
                                        <div className="ColorInfo">
                                            <p><span>hex</span>&#58; &#35;68B1C8</p>
                                            <p><span>rgb</span>&#58; 104, 177, 200</p>
                                        </div>
                                    </div>
                                    <div id="OceanicaColor5" className="Color-5">
                                        <div className="ColorTitle">
                                            <p>05</p>
                                            <p>roman silver</p>
                                        </div>
                                        <div className="ColorInfo">
                                            <p><span>hex</span>&#58; &#35;838D9B</p>
                                            <p><span>rgb</span>&#58; 131, 141, 155</p>
                                        </div>
                                    </div>
                                    <div id="OceanicaColor6" className="Color-6">
                                        <div className="ColorTitle">
                                            <p>06</p>
                                            <p>light silver</p>
                                        </div>
                                        <div className="ColorInfo">
                                            <p><span>hex</span>&#58; &#35;D9D9D9</p>
                                            <p><span>rgb</span>&#58; 217, 217, 217</p>
                                        </div>
                                    </div>
                                    <div id="OceanicaColor7" className="Color-7">
                                        <div className="ColorTitle">
                                            <p>07</p>
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
                                <a target="_blank" href="https://www.figma.com/community/file/1190467806509137896">templates</a>
                                <TbChevronUpRight />
                            </button>
                            <button className="ViewFiles">
                                <a target="_blank" href="https://github.com/asbhogal/React-Oceanica-Responsive-Web-Page">code</a>
                                <TbChevronUpRight />
                            </button>
                            <button className="ViewFiles">
                                <a target="_blank" href="https://oceanica.vercel.app/">site</a>
                                <TbChevronUpRight />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="VerticalDivider"></div>
                {/* LiteLife */}
                <div className="ProjectSection">
                    <div className="ProjectInfo">
                        <h2 className="ProjectTitle">
                            <div className="WordUnit">
                            <span className="FirstLetterAccent">L</span>
                            ite
                            <span className="FirstLetterAccent">L</span>
                            ife
                            </div>
                        </h2>
                        <span className="ProjectTimeDuration">Jan 2022 &#45; Feb 2023</span>
                        <span className="ProjectToolsAndTechStacks">
                            <span className="ProjectTools">Commerce&#46;js &#124; Material UI &#124; Stripe &#124; Vercel</span>
                            <span className="ProjectTechStacks">React &#124; React Router &#124; React Hook Form &#124; DOMPurify &#124; JS</span>
                        </span>
                        <p className="ProjectSummary">Lite Life is a minimalistic-focused online e-commerce store which sells a premium range of technological projects aimed towards the space-conscious individual looking to improve the quality of their working environment with simplistic, yet premium-quality products. The project was built using React with Commerce.js (a headless commerce system through API) with a Stripe gateway and styled using Material UI. React Router was configured for internal links, React Hook Form for the address and payment forms and DOMPurify for HTML content. This was rendered in the form of a SPA (Single Page Application) using Babel and Webpack and deployed using Vercel.</p>
                        <div className="DesignBrief">
                            <h3>Design Brief</h3>
                            <p className="DesignBriefSummary">Lite Life incorporates the simplistic tones of black, grey and white alongside the stark constrasts of red and violet-blue to consider both user immersion and ease-of-navigation during the checkout process (during the latter, distraction-free UX is incorporated to keep the customer on the pages until the transaction is complete.) The logo can be considered widely known and recognizable in this modern age. The stripped back, simple style reflects the design of the site, and the long branches complement the horizontal and vertical lines used in the UI. Roboto, by name, is synonymous with clean, modern technology, and this is in turn reflected through its short descenders and wide bowls, where the former aligns close to the baseline and keeps the space efficient and egonomic, akin to the technology Lite Life sells. The use of only one weight also reinforces consistency within simplicity. On the broader scale, this conveys two things: simple things can still be quality. And quality things can still be simple.</p>
                        </div>
                        <div className="Guides">
                            <div className="BrandGuideSection">
                                <h3>Brand Guide</h3>
                                <div id="LiteLifeProjectGuideInfo" className="BrandGuideInfo">
                                    <div id="LiteLifeProjectLogoMarks" className="LogoMarks">
                                        <img className="LiteLifeProjectLogo" src={ liteLifeLogo }></img>
                                    </div>
                                    <div className="Typography">
                                        <div className="TypographyInfo">
                                            <p>Font Family</p>
                                            <p id="LiteLifeTopgraphyFamily">Roboto</p>
                                            <p>Case</p>
                                            <p id="LiteLifeTypographyCase">Sentence</p>
                                        </div>
                                        <p>Weights</p>
                                        <ul className="BrandProjectTypography TypographyList">
                                            <div className="TypographyWeightSet">
                                                <p id="LiteLifeTypography-400" className="TypographyListItem-400">Regular</p>
                                            </div>
                                            <div className="TypographyFontSet">
                                                <li id="LiteLifeTypography-400" className="TypographyListItem-400">ABC abc 123</li>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="StyleGuideSection">
                                <h3>Style Guide</h3>
                                <div className="ColorPalette">
                                    <div id="LiteLifeColor1" className="Color-1">
                                        <div className="ColorTitle">
                                            <p>01</p>
                                            <p>black</p>
                                        </div>
                                        <div className="ColorInfo">
                                            <p><span>hex</span>&#58; &#35;000000</p>
                                            <p><span>rgb</span>&#58; 0, 0, 0</p>
                                        </div>
                                    </div>
                                    <div id="LiteLifeColor2" className="Color-2">
                                    <div className="ColorTitle">
                                            <p>02</p>
                                            <p>light gray</p>
                                        </div>
                                        <div className="ColorInfo">
                                            <p><span>hex</span>&#58; &#35;d2d2d2</p>
                                            <p><span>rgb</span>&#58; 210, 210, 210</p>
                                        </div>
                                        </div>
                                    <div id="LiteLifeColor3" className="Color-3">
                                        <div className="ColorTitle">
                                            <p>03</p>
                                            <p>lotion</p>
                                        </div>
                                        <div className="ColorInfo">
                                            <p><span>hex</span>&#58; &#35;fafafa</p>
                                            <p><span>rgb</span>&#58; 250, 250, 250</p>
                                        </div>
                                    </div>
                                    <div id="LiteLifeColor4" className="Color-4">
                                        <div className="ColorTitle">
                                            <p>04</p>
                                            <p>white</p>
                                        </div>
                                        <div className="ColorInfo">
                                            <p><span>hex</span>&#58; &#35;ffffff</p>
                                            <p><span>rgb</span>&#58; 255, 255, 255</p>
                                        </div>
                                    </div>
                                    {/* <div id="LiteLifeColor5" className="Color-5">
                                        <div className="ColorTitle">
                                            <p>05</p>
                                            <p>folly</p>
                                        </div>
                                        <div className="ColorInfo">
                                            <p><span>hex</span>&#58; &#35;F50057</p>
                                            <p><span>rgb</span>&#58; 245, 0, 87</p>
                                        </div>
                                    </div>
                                    <div id="LiteLifeColor6" className="Color-6">
                                        <div className="ColorTitle">
                                            <p>06</p>
                                            <p>violet-blue</p>
                                        </div>
                                        <div className="ColorInfo">
                                            <p><span>hex</span>&#58; &#35;3F51B5</p>
                                            <p><span>rgb</span>&#58; 63, 81, 181</p>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="ProjectLinks">
                            <button className="ViewFiles">
                                <a target="_blank" href="https://github.com/asbhogal/React-Tech-Commerce.Js-Site">code</a>
                                <TbChevronUpRight />
                            </button>
                            <button className="ViewFiles">
                                <a target="_blank" href="https://litelife.vercel.app">site</a>
                                <TbChevronUpRight />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="VerticalDivider"></div>
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
                            <span className="ProjectTools">High-Fidelity Mockups &#124; Components &#124; UI Prototyping</span>
                            <span className="ProjectTechStacks">React &#124; JS &#124; SASS</span>
                        </span>
                        <p className="ProjectSummary">Brand is an interior design company. This project was developed from an initial crash course provided by Flux Academy on responsive design. Assets, including images, buttons, copy and typography, were used to generate components and a series of five templates in auto-layout format for breakpoints 1440px+, 1440px, 1024px, 744px and 375px. The decision was made to keep to the styling and transfer this across the different templates. These were then rendered in the form of a SPA (Single Page Application) using React with SASS, Babel and Webpack and deployed using Vercel.</p>
                        <div className="DesignBrief">
                            <h3>Design Brief</h3>
                            <p className="DesignBriefSummary">The templates were kept consistent in design, aesthetic and layout. The clean, minimalistic structure with attention to whitespacing, legibility and heirarchy was also respected, paralleling the affluence communicated by the brand. The logo itself is assured, sharp and rigid, to emphasise the nature and quality of their products. The anti-flash white provides a medium through which the two extremes of black and white fuse in different elements at play and merge across various content typesets, yet still manage to become two distinct entities in their own right, emboldened by the contrasting logos used. </p>
                        </div>
                        <div className="Guides">
                            <div className="BrandGuideSection">
                                <h3>Brand Guide</h3>
                                <div id="BrandGuideInfo" className="BrandGuideInfo">
                                    <div id="BrandProjectLogoMarks" className="LogoMarks">
                                        <img className="BrandProjectLogo" src={ brandLogoBlack }></img>
                                        <img className="BrandProjectIcon" src={ brandLogoWhite }></img>
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
                                        <ul className="BrandProjectTypography TypographyList">
                                            <div className="TypographyWeightSet">
                                                <p id="BrandTypography-400" className="BrandProjectTypography TypographyListItem-400">Regular</p>
                                                <p id="BrandTypography-500" className="BrandProjectTypography TypographyListItem-500">Medium</p>
                                                <p id="BrandTypography-600" className="BrandProjectTypography TypographyListItem-600">Semi Bold</p>
                                                <p id="BrandTypography-700" className="BrandProjectTypography TypographyListItem-700">Bold</p>
                                                <p id="BrandTypography-900" className="BrandProjectTypography TypographyListItem-900">Black</p>
                                            </div>
                                            <div className="TypographyFontSet">
                                                <li id="BrandTypography-400" className="BrandProjectTypography TypographyListItem-400">ABC abc 123</li>
                                                <li id="BrandTypography-500" className="BrandProjectTypography TypographyListItem-500">ABC abc 123</li>
                                                <li id="BrandTypography-600" className="BrandProjectTypography TypographyListItem-600">ABC abc 123</li>
                                                <li id="BrandTypography-700" className="BrandProjectTypography TypographyListItem-700">ABC abc 123</li>
                                                <li id="BrandTypography-900" className="BrandProjectTypography TypographyListItem-900">ABC abc 123</li>
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
                        <p className="ProjectSummary">Kadampa Meditation Centre is part of a nonprofit organisation which delivers a modern form of Buddhism to their local community. As a result of the pandemic, their centre closed and they required a revamped site which offers class and course bookings and membership subscriptions. The site was designed and developed using Astra Pro and Elementor Pro with WooCommerce (incl. Memberships) and Stripe.</p>
                        <div className="DesignBrief">
                            <h3>Design Brief</h3>
                            <p className="DesignBriefSummary">The client required a site which provided a ‘window’ to the center for people; making class and course sessions accessible for everyone. Copy was provided and used to populate the necessary pages. An alternative version of the logo was located within the archives and chosen for it’s rounded vectors and soothing appearance, which works harmoniously with the ethos of the charity. Accents derived from this then dictated the color scheme. Montserrat was chosen for its clean, calming aesthetic which renders well across different devices and offers versatility in its weighting and white space was leveraged to ensure plenty of breathing space during the user's journey; emulating a key part of their teachings.</p>
                        </div>
                        <div className="Guides">
                            <div className="BrandGuideSection">
                                <h3>Brand Guide</h3>
                                <div id="KMCBrandGuideInfo" className="BrandGuideInfo">
                                    <div id="KMCLogoMarks" className="LogoMarks">
                                        <img className="KMCLogo" src={ kmcLogo }></img>
                                    </div>
                                    <div className="Typography">
                                        <div className="TypographyInfo">
                                            <p>Font Family</p>
                                            <p id="KMCTypographyFamily">Montserrat</p>
                                            <p>Case</p>
                                            <p id="KMCTypographyCase">lowercase</p>
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
                                            <p><span>hex</span>&#58; &#35;856187</p>
                                            <p><span>rgb</span>&#58; 133, 97, 135</p>
                                        </div>
                                    </div>
                                    <div id="KMCColor2" className="Color-2">
                                    <div className="ColorTitle">
                                            <p>02</p>
                                            <p>mountbatten pink</p>
                                        </div>
                                        <div className="ColorInfo">
                                            <p><span>hex</span>&#58; &#35;98719D</p>
                                            <p><span>rgb</span>&#58; 152, 113, 157</p>
                                        </div>
                                    </div>
                                    <div id="KMCColor3" className="Color-3">
                                    <div className="ColorTitle">
                                            <p>03</p>
                                            <p>african violet</p>
                                        </div>
                                        <div className="ColorInfo">
                                            <p><span>hex</span>&#58; &#35;B594C3</p>
                                            <p><span>rgb</span>&#58; 181, 148, 195</p>
                                        </div>
                                    </div>
                                    <div id="KMCColor4" className="Color-4">
                                    <div className="ColorTitle">
                                            <p>04</p>
                                            <p>thistle</p>
                                        </div>
                                        <div className="ColorInfo">
                                            <p><span>hex</span>&#58; &#35;D0BDDB</p>
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
            </m.div>
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