import "../scss/index.scss";
import Navbar from "./Header";
import Footer from "../components/Footer"
import { TbChevronUpRight } from "react-icons/tb";
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";
import brandProjectCoverLink from "../assets/images/ProjectCovers/iPhone B07.jpg";
import liteLifeProjectCoverLink from "../assets/images/ProjectCovers/LiteLife.jpg";
import oceanicaProjectCoverLink from "../assets/images/ProjectCovers/Oceanica.jpg";
import kryptoProjectCoverLink from "../assets/images/ProjectCovers/Krypto.jpg";
import metaverseMadnessProjectCoverLink from "../assets/images/ProjectCovers/MetaverseMadness.jpg";
import cryptoverseProjectCoverLink from "../assets/images/ProjectCovers/Cryptoverse.jpg";

const Home = () => {
    return (
        <>
            <Navbar />
            <m.section 
                initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                className="HomePageSection">
                <h1 className="MainHomeTitle">Creating bold, elegant &#38; humanistic interfaces &#124; est. 2020</h1>
                <aside className="CTAButtons">
                    <button className="ViewFiles">
                        <Link to='/projects'>
                            projects
                            <TbChevronUpRight />
                        </Link>
                    </button>
                    <button className="ViewFiles">
                        <a target="_blank" href="mailto:business@amansinghbhogal.com">contact</a>
                        <TbChevronUpRight />
                    </button>
                </aside>
                
            </m.section>
            <div className="ProjectsCarousel">
                    <div id="BrandProjectCarouselItem" className="ProjectCarouselItem">
                        <img src={ brandProjectCoverLink } />
                        <h3>Brand</h3>
                    </div>
                    <div id="LiteLifeProjectCarouselItem" className="ProjectCarouselItem">
                        <img src={ liteLifeProjectCoverLink } />
                        <h3>Lite Life</h3>
                    </div>
                    <div id="OceanicaProjectCarouselItem" className="ProjectCarouselItem">
                        <img src={ oceanicaProjectCoverLink } />
                        <h3>Brand</h3>
                    </div>
                    <div id="KryptoProjectCarouselItem" className="ProjectCarouselItem">
                    <img src={ oceanicaProjectCoverLink } />
                        <h3>Brand</h3>
                    </div>
                    <div id="MetaversusProjectCarouselItem" className="ProjectCarouselItem">
                        <img src={ oceanicaProjectCoverLink } />
                        <h3>Brand</h3>
                    </div>
                    <div id="CryptoverseProjectCarouselItem" className="ProjectCarouselItem">
                        <img src={ oceanicaProjectCoverLink } />
                        <h3>Brand</h3>
                    </div>
                </div>
            <Footer />
        </>
    )
}

export default Home;