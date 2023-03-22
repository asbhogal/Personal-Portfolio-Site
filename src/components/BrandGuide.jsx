import React from 'react';
import brandLogoBlack from "../assets/images/logos/brand-logo-black.svg";
import brandLogoWhite from "../assets/images/logos/brand-logo-white.svg";
import brandIconBlack from "../assets/images/logos/brand-icon-black.svg";
import brandIconWhite from "../assets/images/logos/brand-icon-white.svg";

const BrandGuide = () => {
  return (
    <div className="BrandGuideSection">
    <div id="BrandGuideInfo" className="BrandGuideInfo">
        <div id="BrandProjectLogoMarks" className="LogoMarks">
            <img className="BrandProjectLogo" src={ brandLogoBlack }></img>
            <img className="BrandProjectIcon" src={ brandLogoWhite }></img>
            <div id="BrandIcons">
                <img id="BrandIconBlack" src={ brandIconBlack }></img>
                <img id="BrandIconWhite" src={ brandIconWhite }></img>
            </div>
        </div>
        <div className="Typography">
            <div className="TypographyInfo">
                <p>Font Family</p>
                <p>Inter</p>
                <p>Case</p>
                <p>Sentence</p>
            </div>
            <div className="TypographyStyles">
                <p className="WeightsTitle">Weights</p>
                <ul className="BrandProjectTypography TypographyList">
                    <div className="TypographyWeightSet">
                        <p id="BrandTypography-400" className="BrandProjectTypography TypographyListItem-400">Regular</p>
                        <p id="BrandTypography-500" className="BrandProjectTypography TypographyListItem-500">Medium</p>
                        <p id="BrandTypography-600" className="BrandProjectTypography TypographyListItem-600">Semi Bold</p>
                        <p id="BrandTypography-700" className="BrandProjectTypography TypographyListItem-700">Bold</p>
                        <p id="BrandTypography-900" className="BrandProjectTypography TypographyListItem-900">Black</p>
                    </div>
                    <div className="TypographyFontSet">
                        <li id="BrandTypography-400" className="BrandProjectTypography TypographyListItem-400">ABC abc 123</li>
                        <li id="BrandTypography-500" className="BrandProjectTypography TypographyListItem-500">ABC abc 123</li>
                        <li id="BrandTypography-600" className="BrandProjectTypography TypographyListItem-600">ABC abc 123</li>
                        <li id="BrandTypography-700" className="BrandProjectTypography TypographyListItem-700">ABC abc 123</li>
                        <li id="BrandTypography-900" className="BrandProjectTypography TypographyListItem-900">ABC abc 123</li>
                    </div>
                </ul>
            </div>
        </div>
    </div>
</div>
  )
}

export default BrandGuide;