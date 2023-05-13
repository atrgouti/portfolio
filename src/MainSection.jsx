import "./MainSectionStyle.css"
import MyNameLogo from "../Photos/MyNameLogo.png"
import download from "../Photos/download.png"
import bilal from "../Photos/bilal.png"

import React, { useRef, useEffect } from 'react';




export default function MainSection(){

    const targetRef = useRef(null);
    const targetRef2 = useRef(null);

    const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add active class when the image is visible
        entry.target.classList.add('active');
      } else {
        // Remove active class when the image is not visible
        entry.target.classList.remove('active');
      }
    });
    };

    useEffect(() => {
        const options = {
          root: null, // Use the viewport as the root element
          rootMargin: '0px',
          threshold: 0.5 // Customize the threshold value as desired
        };

        const observer = new IntersectionObserver(handleIntersection, options);
        const observer2 = new IntersectionObserver(handleIntersection, options);

        if (targetRef.current) {
          observer.observe(targetRef.current);
        }
        if (targetRef2.current) {
          observer2.observe(targetRef2.current);
        }
    
        return () => {
          if (targetRef.current) {
            observer.unobserve(targetRef.current);
          }
          if (targetRef2.current) {
            observer2.unobserve(targetRef2.current);
          }
        };
    }, []);



    return(
        <>
        <div className="MainContainer">
            <div className="content" ref={targetRef2}>
                <h1>Hello, I am</h1>
                <img className="mynamelogo" src={MyNameLogo} alt="" />
                <h1 className="software">Software testo</h1>
                <span className="resume">
                    <a href=""><img src={download} alt="" /></a>
                    <a href=""><p>Resume</p></a>
                </span>
            </div>
            <div className="me" ref={targetRef}>
                <img src={bilal} alt="" />
            </div>
        </div>
        <div className="lineOrange"></div>
        </>
    )
}