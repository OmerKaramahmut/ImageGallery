import React, { useLayoutEffect, useRef } from "react";
import "./SplitText.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap-trial/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);
const SplitTextPage = () => {
  const text = useRef(null);
  useGSAP(() => {
    gsap.from(text.current, {
      scrollTrigger: {
        trigger: text.current,
        start: "0px bottom",
        end: "bottom+=400px bottom",
        scrub: true,
      },
      opacity: 0,
      left: "-200px",
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
      opacity: 0,
      left: "-200px",
    });
  });

  return (
    <div className="splitTextPage">
      <div className="splitText" ref={text}>
        <p className="textt">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos enim,
          ipsam eveniet adipisci soluta blanditiis!
        </p>
      </div>
      <div className="splitText" ref={text2}>
        <p className="textt">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          explicabo totam asperiores cupiditate praesentium porro?
        </p>
      </div>
    </div>
  );
};

export default SplitTextPage;
