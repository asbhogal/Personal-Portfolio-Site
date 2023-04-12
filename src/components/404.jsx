import Header from "./Header";
import Footer from "./Footer";
import { useEffect } from "react";

const errorPage = () => {

    useEffect(() => {
        document.title = 'Error 404 | Aman Singh Bhogal';
    }, [])

    return (
        <>
            <Header />
                <section className="ErrorPage">
                    <h1>404</h1>
                    <div className="HorizontalDivider"></div>
                    <h2>The Page you're looking for does not exist</h2>
                    <p>Click below to return home</p>
                </section>
            <Footer />
        </>
    )
};

export default errorPage;