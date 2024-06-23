import React, { useRef } from "react";
import "./Contact.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Contact = () => {
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
      right: "-200px",
    });
  });
  const img = useRef(null);
  useGSAP(() => {
    gsap.from(img.current, {
      scrollTrigger: {
        trigger: img.current,
        start: "0px bottom",
        end: "bottom+=400px bottom",
        scrub: true,
      },
      opacity: 0,
      left: "-200px",
    });
  });
  return (
    <div className="contactPage" >
      <div className="contactText" ref={text}>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
        unde fugit. Nobis aspernatur, nam dolorum est rem ipsam nisi, ex enim
        nulla, nostrum laudantium commodi. Asperiores error nulla optio saepe.</p>
       
      </div>
      <div className="profil" ref={img}>
        <img src="https://picsum.photos/600/600?random=30" alt="" />
        <div className="profilText">
          <h1>Ömer K.</h1>
          <h3>Frontend Dev.</h3>
          <p>Kocaeli Üni</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
