import "../scss/index.scss";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Brand from "./Brand";
import LiteLife from "./LiteLife";
import Oceanica from "./Oceanica";
import Cryptoverse from "./Cryptoverse";
import ErrorPage from "./404";
import AdditionalServices from "./AdditionalServices";
import Testimonials from "./Testimonials";
import FreeResources from "./FreeResources";

import Cursor from "./Cursor";
import ScrollRestoration from "./ScrollRestoration";

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
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/brand" element={<Brand />} />
        <Route path="/projects/litelife" element={<LiteLife />} />
        <Route path="/projects/oceanica" element={<Oceanica />} />
        <Route path="/projects/cryptoverse" element={<Cryptoverse />} />
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
