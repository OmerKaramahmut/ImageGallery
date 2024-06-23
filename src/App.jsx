import { useEffect, useState } from "react";
import "./App.css";
import Hero from "./Components/Hero";
import SplitTextPage from "./Components/SplitTextPage";
import Navbar from "./Components/Navbar";
import Imggallery from "./Components/Imggallery";
import GalleryContent from "./Components/GalleryContent";
import Container from "./Components/Container";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import GalleryContentMobile from "./Components/GalleryContentMobile";

function App() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />

      <div className="Gallery">
        <div>
          {" "}
          <SplitTextPage />
        </div>

        <div>
          {" "}
          <Imggallery />
        </div>
      </div>
      <Container />
      <GalleryContent />
      <GalleryContentMobile/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
