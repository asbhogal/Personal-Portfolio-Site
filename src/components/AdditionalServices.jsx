import Footer from "./Footer";
import Header from "./Header"

const AdditionalServices = () => {
    return (
        <>
            <Header />
                <main className="AdditionalServices">
                    <section className="AdditionalServicesCover">
                        <h1>additional services</h1>
                    </section>
                    <section className="AdditionalServicesSection">
                        <div className="AdditionalServicesContent">
                            <div className="WordPressDesignSection">
                                <h2>WordPress Design</h2>
                                <ul className="WordPressDesignList">
                                    <li className="WordPressDesignListItem">Elementor Pro</li>
                                    <li className="WordPressDesignListItem">Astra Pro</li>
                                    <li className="WordPressDesignListItem">Gutenberg</li>
                                    <li className="WordPressDesignListItem">Custom Theme Changes</li>
                                    <li className="WordPressDesignListItem">Additional CSS</li>
                                </ul>
                            </div>
                            <div className="WordPressDevelopmentSection">
                                <h2>WordPress Development</h2>
                                <ul className="WordPressDesignList">
                                    <li className="WordPressDesignListItem">WooCommerce</li>
                                    <li className="WordPressDesignListItem">Child Themes</li>
                                    <li className="WordPressDesignListItem">Site Optimisation</li>
                                    <li className="WordPressDesignListItem">Core File Changes</li>
                                </ul>
                            </div>
                            <div className="WebHostingManagementSection">
                                <h2>Web Hosting, Security & Optimisation</h2>
                                <ul className="WebHostingList">
                                    <li className="WebHostingListItem">DNS Records</li>
                                    <li className="WordPressDesignListItem">Domain Management</li>
                                    <li className="WordPressDesignListItem">Security Headers</li>
                                    <li className="WordPressDesignListItem">SSL & TLS</li>
                                    <li className="WordPressDesignListItem">Hotlink Protection</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </main>
            <Footer />
        </>
    )
};

export default AdditionalServices;