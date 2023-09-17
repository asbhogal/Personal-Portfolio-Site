import "./scss/index.scss";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Brand from "./pages/Brand";
import LiteLife from "./pages/LiteLife";
import Oceanica from "./pages/Oceanica";
import Calculator from "./pages/Calculator";
import Cryptoverse from "./pages/Cryptoverse";
import LeDimanche from "./pages/LeDimanche";
import ErrorPage from "./pages/404";
import AdditionalServices from "./pages/AdditionalServices";
import Testimonials from "./pages/Testimonials";
import FreeResources from "./pages/FreeResources";

import Cursor from "./components/Cursor";
import ScrollRestoration from "./components/ScrollRestoration";

import { Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

/* function Home() {
    useDocumentTitle('Aman Singh Bhogal | Front End Developer')
}

function About() {
    useDocumentTitle('About | Aman Singh Bhogal')
} */

const App = () => {
  return (
    <>
      <Analytics />
      <Cursor />
      <ScrollRestoration />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/brand" element={<Brand />} />
        <Route path="/portfolio/calculator" element={<Calculator />} />
        <Route path="/portfolio/litelife" element={<LiteLife />} />
        <Route path="/portfolio/oceanica" element={<Oceanica />} />
        <Route path="/portfolio/cryptoverse" element={<Cryptoverse />} />
        <Route path="/portfolio/ledimanche" element={<LeDimanche />} />
        <Route
          path="/AmanSinghBhogal-Brand-Manifesto.png"
          element={<FreeResources />}
        />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/additionalservices" element={<AdditionalServices />} />
        <Route path="/freeresources" element={<FreeResources />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default App;