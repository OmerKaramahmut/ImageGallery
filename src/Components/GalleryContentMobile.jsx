import React, { useRef } from "react";
import "./GalleryContentMobile.css";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);
const GalleryContentMobile = () => {
  const text = useRef(null);
  useGSAP(() => {
    gsap.from(text.current, {
      scrollTrigger: {
        trigger: text.current,
        start: "0px bottom",
        end: "bottom+=400px bottom",
        scrub: true,
      },
      x:-200,
      opacity: 0,
      left: "-200px",
    });
  });
  
  useGSAP(() => {
    gsap.from(".panelTwo", {
      scrollTrigger: {
        trigger: ".panelTwo",
        start: "0px bottom",
        end: "bottom+=400px bottom",
        scrub: true,
      },
      x:-200,
      opacity: 0,
     
    });
  });
  const text2 = useRef(null);
  useGSAP(() => {
    gsap.from(text2.current, {
      scrollTrigger: {
        trigger: text2.current,
        start: "0px bottom",
        end: "bottom+=400px bottom",
        scrub: true,
      },
      x:-200,
      opacity: 0,
     
    });
  });
  return (
    <div className="GalleryContentMobilePage">
      <div className="mobileContainer">
        <div className="mobilePanel panelOne" ref={text}>
          <div className="mobilePanelText"  >
            <div className="tittle" >
              <h2>
                <span>Estetik Dokunuşlar:</span> Resim Müzesiyle Keşfedin!
              </h2>
            </div>
            <div className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              ratione qui amet nulla nihil ipsum architecto placeat minima
              voluptatem, soluta id, ducimus modi. Delectus quod, dolorum quasi
              eos facere accusantium?
            </div>
          </div>

          <div>
            <div></div>
            <div className="mobilePanelImg">
              <img
                className="panelImgg-1"
                src="https://picsum.photos/600/600?random=20"
                alt=""
              />
              <img
                className="panelImgg-2"
                src="https://picsum.photos/600/600?random=21"
                alt=""
              />
              <img
                className="panelImgg-3"
                src="https://picsum.photos/600/600?random=22"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="mobilePanel panelTwo" >
          <div className="mobilePanelText"  >
            <div className="tittle">
              <h2>
                <span>Estetik Dokunuşlar:</span> Resim Müzesiyle Keşfedin!
              </h2>
            </div>
            <div className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              ratione qui amet nulla nihil ipsum architecto placeat minima
              voluptatem, soluta id, ducimus modi. Delectus quod, dolorum quasi
              eos facere accusantium?
            </div>
          </div>

          <div>
            <div></div>
            <div className="mobilePanelImg">
              <img
                className="panelImgg-4"
                src="https://picsum.photos/600/600?random=20"
                alt=""
              />
              <img
                className="panelImgg-5"
                src="https://picsum.photos/600/600?random=21"
                alt=""
              />
              <img
                className="panelImgg-6"
                src="https://picsum.photos/600/600?random=22"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="mobilePanel" ref={text2}>
          <div className="mobilePanelText"  >
            <div className="tittle">
              <h2>
                <span>Estetik Dokunuşlar:</span> Resim Müzesiyle Keşfedin!
              </h2>
            </div>
            <div className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              ratione qui amet nulla nihil ipsum architecto placeat minima
              voluptatem, soluta id, ducimus modi. Delectus quod, dolorum quasi
              eos facere accusantium?
            </div>
          </div>

          <div>
            <div></div>
            <div className="mobilePanelImg panelThree">
              <img
                className="panelImgg-7"
                src="https://picsum.photos/600/600?random=20"
                alt=""
              />
              <img
                className="panelImgg-8"
                src="https://picsum.photos/600/600?random=21"
                alt=""
              />
              <img
                className="panelImgg-9"
                src="https://picsum.photos/600/600?random=22"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryContentMobile;
