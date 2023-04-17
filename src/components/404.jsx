import Header from "./Header";
import Footer from "./Footer";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";

const errorPage = () => {

    useEffect(() => {
        document.title = 'Error 404 | Aman Singh Bhogal';
    }, [])

    return (
        <>
            <Header />
                <m.section 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }} className="ErrorPage">
                    <h1 className="PageHeaderTitle">404</h1>
                    <div className="ErrorPageContainer">
                        <h2>The Page you're looking for does not exist</h2>
                        <p>Click below to return home</p>
                        <Link to='/' className="ReturnHomeButton">home</Link>
                    </div>
                </m.section>
            <Footer />
        </>
    )
};

export default errorPage;