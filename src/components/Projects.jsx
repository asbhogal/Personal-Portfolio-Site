import Footer from "./Footer";
import Navbar from "./Header";

const Projects = () => {
    return (
        <>
            <Navbar />
            <div className="Projects">
                <div className="ProjectCover">
                    <h1>&#38;&#46;projects</h1>
                </div>
                <div className="ProjectSection">
                    <div className="ProjectInfo">
                        <h2>Kadampa <span className="FirstLetterAccent">M</span>editation <span className="FirstLetterAccent">C</span>entre <span className="FirstLetterAccent">B</span>irmingham</h2>
                        <span className="ProjectTimeDuration">May 2020 - Feb 2021</span>
                        <p className="ProjectSummary">Kadampa Meditation Centre is part of a nonprofit organisation which delivers a modern form of Buddhism to their local community. When the pandemic started, their centre closed and they required a revamp of their current site to allow class and course bookings and membership subscriptions. The site was designed and developed using Astra Pro and Elementor Pro with WooCommerce and Stripe.</p>
                        <div className="DesignBrief">
                            <h3>Design Brief</h3>
                            <p className="DesignBriefSummary">"The Resident Teacher required a site which provided a ‘window’ to the center for people; making class and course sessions accessible for everyone. Information provided was used to populate the pages. An alternative version of the logo was located within the archives and chosen for it’s rounded vectors and soothing appearance. Accents derived from this dictated the color scheme.</p>
                        </div>
                        <div className="Guides">
                            <div className="BrandGuideSection">
                                <h3>Brand Guide</h3>
                            </div>
                            <div className="StyleGuideSection">
                                <h3>Style Guide</h3>
                                <div className="ColorPalate">
                                    <div className="Color-1">
                                        <div className="ColorTitle">
                                            <p>01</p>
                                            <p>chinese violet</p>
                                        </div>
                                        <div className="ColorInfo">
                                            <p><span>hex</span>&#58; 856187</p>
                                            <p><span>rgb</span>&#58; 133, 97, 135</p>
                                        </div>
                                    </div>
                                    <div className="Color-2">
                                    <div className="ColorTitle">
                                            <p>02</p>
                                            <p>mountbatten pink</p>
                                        </div>
                                        <div className="ColorInfo">
                                            <p><span>hex</span>&#58; 98719D</p>
                                            <p><span>rgb</span>&#58; 152, 113, 157</p>
                                        </div>
                                    </div>
                                    <div className="Color-3">
                                    <div className="ColorTitle">
                                            <p>03</p>
                                            <p>african violet</p>
                                        </div>
                                        <div className="ColorInfo">
                                            <p><span>hex</span>&#58; B594C3</p>
                                            <p><span>rgb</span>&#58; 181, 148, 195</p>
                                        </div>
                                    </div>
                                    <div className="Color-4">
                                    <div className="ColorTitle">
                                            <p>04</p>
                                            <p>thistle</p>
                                        </div>
                                        <div className="ColorInfo">
                                            <p><span>hex</span>&#58; D0BDDB</p>
                                            <p><span>rgb</span>&#58; 208, 189, 219</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
};

export default Projects;