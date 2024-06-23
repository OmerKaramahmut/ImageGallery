import React, { useRef } from "react";
import "./Imggallery.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);
const Imggallery = () => {
 
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".skew",
        scrub: true,
        start: "top center",
        end: "bottom",
      },
    });
    
    timeline.to(".skew", { height: "500px" }, 0);
  }, []);


  return (
    <div>
      <div className="Gallery">
        <img src="https://picsum.photos/600/600?random=1" alt="" class="skew"  ></img>
        <img
          src="https://picsum.photos/600/600?random=2"
          alt=""
          class="skew"
         
        ></img>
        <img
          src="https://picsum.photos/600/600?random=3"
          alt=""
          class="skew"
       
        ></img>
        <img
          src="https://picsum.photos/600/600?random=4"
          alt=""
          class="skew"
         
        ></img>
      </div>
    </div>
  );
};

export default Imggallery;
