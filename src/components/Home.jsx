import "../scss/index.scss";
import Navbar from "./Header";
import Footer from "../components/Footer"
import { TbChevronUpRight } from "react-icons/tb";
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";

const Home = () => {
    return (
        <>
            <Navbar />
            <m.section 
                initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                className="HomePageSection">
                <h1 className="MainHomeTitle">Creating bold, elegant &#38; humanistic interfaces <br></br>&#124; est. 2020</h1>
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
            <Footer />
        </>
    )
}

export default Home;