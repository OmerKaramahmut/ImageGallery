import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
import "./GalleryContent.css";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { SplitText } from "gsap-trial/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);
const GalleryContent = () => {
  const component = useRef();
  const slider = useRef();

  useGSAP(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + slider.current.offsetWidth,
        },
      });
    }, component);
    return () => ctx.revert();
  });

  useGSAP(() => {
    gsap.from(".panelOneText", {
      scrollTrigger: {
        trigger: ".panelOneText",
        start: "0px bottom",
        end: "bottom+=400px bottom",
        scrub: true,
      },
      opacity: 0,
      left: "-200px",
    });
  });

  useGSAP(() => {
    gsap.from(".panelImg", {
      scrollTrigger: {
        trigger: ".panelImg",
        start: "0px bottom",
        end: "bottom+=400px bottom",
        scrub: true,
      },
      opacity: 0,
      left: "-200px",
    });
  });

  return (
    <div className="GalleryContentPage" ref={component}>
      <div ref={slider} className="container">
        <div className="description panel panelOne">
          <div className="panelOneText">
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
            <div className="panelImg">
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
        <div className="panel panelOne">
          <div className="panelOneText">
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
            <div className="panelImg">
              <img
                className="panelImgg-1"
                src="https://picsum.photos/600/600?random=24"
                alt=""
              />
              <img
                className="panelImgg-2"
                src="https://picsum.photos/600/600?random=25"
                alt=""
              />
              <img
                className="panelImgg-3"
                src="https://picsum.photos/600/600?random=26"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="panel panelOne">
          <div className="panelOneText">
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
            <div className="panelImg">
              <img
                className="panelImgg-1"
                src="https://picsum.photos/600/600?random=27"
                alt=""
              />
              <img
                className="panelImgg-2"
                src="https://picsum.photos/600/600?random=28"
                alt=""
              />
              <img
                className="panelImgg-3"
                src="https://picsum.photos/600/600?random=29"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryContent;
