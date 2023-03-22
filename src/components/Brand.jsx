import Header from "./Header";
import Footer from "./Footer";
import brandProjectCover from "../assets/Brand Website Cover.png";
import StyleGuide from "./StyleGuide";
import BrandGuide from "./BrandGuide";

const Brand = () => {
  return (
    <>
        <div className="BrandProject">
        <Header
            HeaderPosition="HeaderPosition"
         />
            <div className="BrandProjectCover">
                <div className="CoverLayer"></div>
                <img src={ brandProjectCover } />
            </div>

            <section className="BrandContentSection">

                <div className="About">
                    <h2 className="AboutHeadline">
                        About
                    </h2>
                    <div className="AboutRightContent">
                        <h3 className="AboutSubLine">
                            Project Type: Personal
                        </h3>
                        <p className="ProjectTimeline">
                            Dec 2022 - Dec 2023
                        </p>
                        <p className="AboutSummary">
                        Brand is an interior design company. This project was developed from an initial crash course provided by Flux Academy on responsive design. Assets, including images, buttons, copy and typography, were used to generate components and a series of five templates in auto-layout format for breakpoints 1440px+, 1440px, 1024px, 744px and 375px. The decision was made to keep to the styling and transfer this across the different templates. These were then rendered in the form of a SPA (Single Page Application) using React with SASS, Babel and Webpack and deployed using Vercel.
                        </p>
                    </div>
                </div>

                <div className="StacksAndTools">
                    <h2 className="StacksAndToolsHeadline">
                        Stacks
                    </h2>
                    <p className="StacksAndToolsSummary">
                        React | JS | SCSS | Babel | Webpack | Git | npm | Vercel
                        <br />
                        <br />
                        Figma | Mockups | UI Prototyping | Components
                    </p>
                </div>

                <div className="Mockups">
                    <h2 className="MockupsHeadline">
                        Mockups
                    </h2>
                    <div className="MockupImage">

                    </div>
                </div>

                <div className="DesignApproach">
                    <h2 className="DesignHeadline">
                        design
                    </h2>
                    <p className="DesignSummary">
                    The templates were kept consistent in design, aesthetic and layout. The clean, minimalistic structure with attention to whitespacing, legibility and heirarchy was also respected, paralleling the affluence communicated by the brand. The logo itself is assured, sharp and rigid, to emphasise the nature and quality of their products. The anti-flash white provides a medium through which the two extremes of black and white fuse in different elements at play and merge across various content typesets, yet still manage to become two distinct entities in their own right, emboldened by the contrasting logos used.
                    </p>
                </div>

                <div className="Branding">
                    <h2 className="BrandingHeadline">
                        Branding
                    </h2>
                    <div className="BrandingRightContent">
                        <BrandGuide />
                        <StyleGuide />
                    </div>
                </div>
            </section>

        </div>
        <Footer />
    </>
  )
}

export default Brand;