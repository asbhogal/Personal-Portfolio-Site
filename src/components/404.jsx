import Header from "./Header";
import Footer from "./Footer";

const errorPage = () => {
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