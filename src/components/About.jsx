import "../scss/index.scss";
import Header from "./Header";
import Footer from "./Footer";
import CTAButtons from "./Buttons";

const About = () => {
    return (
        <>
            <Header />
            <main className="MainContainer">
                <div className="AboutCover">
                    <h1 className="PageHeaderTitle">&#38;&#46;about</h1>
                </div>
                <div className="AboutSection">
                    <p id="AboutPageTitle1" className="PageSubTitleText">  
                        figma &#47;
                        adobe ai &#47;
                        adobe ps &#47;
                        adobe xd &#47; 
                    </p>
                    <p id="AboutPageTitle2" className="PageSubTitleText">
                        react &#47;
                        sass &#47;
                        git &#47;
                        webpack
                    </p>
                    <p className="AboutText">AMAN SINGH BHOGAL is a UI Engineer with 2 1/2 years of client side experience in Front End Development. His work covers building CMS-based websites (WordPress and Hubspot) and static applications using vanilla HTML5, CSS3, SASS and JavaScript. He now works with international clients to design and develop interfaces using Adobe CC, Figma and React from existing and new design briefs, as well as offering consultancies.</p>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default About;