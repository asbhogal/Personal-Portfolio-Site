import "../scss/index.scss";
import Navbar from "./Header";
import Footer from "../components/Footer"
import { TbChevronUpRight } from "react-icons/tb";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <Navbar />
            <section className="HomePageSection">
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
            </section>
            <Footer />
        </>
    )
}

export default Home;