import "../scss/index.scss";
import Navbar from "./Header";
import Footer from "../components/Footer"
import { TbChevronUpRight } from "react-icons/tb";
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";
import brandLogo from "../assets/images/logos/brand-logo-white.svg";
import cryptoverseLogo from "../assets/images/logos/Cryptoverse-Logo.svg";
import oceanicaLogo from "../assets/images/logos/Oceanica-Logo.svg";
import metaversusLogo from "../assets/images/logos/Metaversus-Logo.svg";
import kryptoLogo from "../assets/images/logos/Krypto-Logo.svg";
import liteLifeLogo from "../assets/images/logos/LiteLife-Logo.svg";
import brandScreen from "../assets/images/Home/BrandScreen.png";
import liteLifeScreen from "../assets/images/Home/LiteLifeScreen.png";
import oceanicaScreen from "../assets/images/Home/OceanicaScreen.png";
import cryptoverseScreen from "../assets/images/Home/CryptoverseScreen.png";
import metaverseScreen from "../assets/images/Home/MetaverseScreen.png";
import CTA from "./CTA";

const Home = () => {
    return (
        <>
            <Navbar />
            <section className="HomePageSection">
                <h1 className="MainHomeTitle">
                    Creating <span className="HeadlineAccent">bold</span>, 
                    <span className="HeadlineAccent"> elegant </span> &#38;
                    <span className="HeadlineAccent"> humanistic </span>
                    interfaces 
                    <br /> 
                    <span className="HeadlineYear">- est. 2020-</span>
                </h1>
                <div className="HomePageProjectLogos">
                    <img src={ brandLogo } />
                    <img src={ cryptoverseLogo } />
                    <img src={ oceanicaLogo } />
                    <img src={ metaversusLogo } />
                    <img src={ kryptoLogo } />
                    <img src={ liteLifeLogo } />
                </div>
            </section>

            <section className="ProjectScreens">
                <img src={ brandScreen } />
                <img src={ liteLifeScreen } />
                <img src={ oceanicaScreen } />
                <img src={ cryptoverseScreen } />
                <img src={ metaverseScreen } />
            </section>

            <CTA />
            
            <Footer />
        </>
    )
}

export default Home;