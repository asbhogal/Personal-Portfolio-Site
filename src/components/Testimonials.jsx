import Footer from "./Footer";
import Header from "./Header";
import "../scss/index.scss";

import { motion as m } from "framer-motion";
import { useEffect, useState } from "react";

import TestimonialsCard from "./TestimonialsCard";

const Testimonials = () => {

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {

        document.title = 'Testimonials | Aman Singh Bhogal';

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
                className="TestimonialsCover">
                <h1 className="TestimonialsPageTitle">testimonials</h1>
            </m.section>
            <m.section initial={{opacity: 0}} animate={{opacity: 1}} className="TestimonialsSection">
                <TestimonialsCard />
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

export default Testimonials;