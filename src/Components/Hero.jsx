import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Hero.css";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  const background = useRef(null);
  const tableImg = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: true,
        start: "top",
        end: "+=500px",
      },
    });

    timeline
      .from(background.current, { clipPath: `inset(5%)` })
      .to(tableImg.current, { height: "200px" }, 0);
  }, []);
  return (
    <div className="heroPage" ref={background}>
      <div className="backgroundImg">
        <img src="/images/jungle.jpg" alt="" />
      </div>

      <div className="hero_Container">
        <div className="table">
          <div className="table-images">
            <div className="tableImg" ref={tableImg}>
              <img src="https://picsum.photos/600/600?random=5" id="t-1" alt="" />
              <div data-scroll data-scroll-speed=".1" className="info">
                <h1>Ömer Karamahmutoğlu</h1>
               
                <h2>Frontend Dev.</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
