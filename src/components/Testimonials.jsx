import Footer from "./Footer";
import Navbar from "./Header";
import "../scss/index.scss";

import TestimonialsCard from "./TestimonialsCard";

const Testimonials = () => {
    return (
        <>
            <Navbar />
            <section className="TestimonialsCover">
                <h1 className="PageHeaderTitle">&#38;&#46;testimonials</h1>
            </section>
            <section className="TestimonialsSection">
                <TestimonialsCard />
            </section>
            <Footer />
        </>
    )
};

export default Testimonials;