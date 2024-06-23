import React, { useRef } from "react";
import "./Container.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);
const Container = () => {
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".image",
            scrub: true,
            start: "top 800px",
            end: "bottom",
          },
        });
        
        timeline.to(".image", { scale: 1.3 }, 0);
      }, []);

  return (
    <div className="containerPage">
      <div className="containerImg">
        <img
          className="image"
          src="https://picsum.photos/600/600?random=8"
          alt=""
        />
        <img
          className="image"
          src="https://picsum.photos/600/600?random=9"
          alt=""
        />
        <img
          className="imagezoom"
          src="https://picsum.photos/600/600?random=10"
          alt=""
        />
        <img
          className="image"
          src="https://picsum.photos/600/600?random=11"
          alt=""
        />
        <img
          className="image"
          src="https://picsum.photos/600/600?random=12"
          alt=""
        />
        <img
          className="image"
          src="https://picsum.photos/600/600?random=13"
          alt=""
        />
        <img
          className="image"
          src="https://picsum.photos/600/600?random=14"
          alt=""
        />
      </div>
    </div>
  );
};

export default Container;
