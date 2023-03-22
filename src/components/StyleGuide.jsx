import React from 'react';

const StyleGuide = () => {
  return (
    <div className="StyleGuideSection">
        <div className="ColorPalette">
            <div id="BrandColor1" className="Color-1">
                <div className="ColorTitle">
                    <p>01</p>
                    <p>black</p>
                </div>
                <div className="ColorInfo">
                    <p><span>hex</span>&#58; &#35;000000</p>
                    <p><span>rgb</span>&#58; 0, 0, 0</p>
                </div>
            </div>
            <div id="BrandColor2" className="Color-2">
            <div className="ColorTitle">
                    <p>02</p>
                    <p>anti-flash white</p>
                </div>
                <div className="ColorInfo">
                    <p><span>hex</span>&#58; &#35;f3f3f3</p>
                    <p><span>rgb</span>&#58; 243, 243, 243</p>
                </div>
            </div>
            <div id="BrandColor3" className="Color-3">
            <div className="ColorTitle">
                <p>03</p>
                <p>white</p>
            </div>
            <div className="ColorInfo">
                <p><span>hex</span>&#58; &#35;ffffff</p>
                <p><span>rgb</span>&#58; 255, 255, 255</p>
            </div>
        </div>
    </div>
</div>
  )
}

export default StyleGuide;