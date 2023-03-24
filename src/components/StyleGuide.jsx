import brandColor1 from "../assets/images/BRAND/Brand-DesignPalette1.svg";
import brandColor2 from "../assets/images/BRAND/Brand-DesignPalette2.svg";
import brandColor3 from "../assets/images/BRAND/Brand-DesignPalette3.svg";

const StyleGuide = () => {
  return (
    <div className="StyleGuideSection">
        <div className="ColorPalette">
            <div id="BrandColor1" className="ColorPalette">
                <img className="ColorPalette" src={ brandColor1 } />
            </div>
            <div id="BrandColor2" className="ColorPalette">
                <img className="ColorPalette" src={ brandColor2 } />
            </div>
            <div id="BrandColor3" className="ColorPalette">
                <img className="ColorPalette" src={ brandColor3 } />
        </div>
    </div>
</div>
  )
}

export default StyleGuide;