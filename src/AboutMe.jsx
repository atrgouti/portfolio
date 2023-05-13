import "./aboutSecStyles.css"
import React, { useRef, useEffect } from 'react';





export default function AboutMe(){
    const targetRef = useRef(null);
    const targetRef2 = useRef(null);

    const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add active class when the image is visible
        entry.target.classList.add('active');
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

    return (
        <div className="containerSec">
            <p className="aboutme" ref={targetRef}>AboutMe<span>()</span></p>
            <p className="paragraph" ref={targetRef2}>Hello, I'm Bilal Atrgouti, a full-stack developer from Morocco. I love creating websites and apps that work well and are easy to use. <br /><br />
            I'm good at solving problems and figuring out how things work. I enjoy learning new things and keeping up with the latest technology trends. It helps me build better and more exciting projects. <br /><br />
            I believe that teamwork is important. I like working with different people and listening to their ideas. By working together, we can create something amazing. <br /><br />
            I pay close attention to details and take pride in my work. I always try to do my best and finish projects on time. I'm always looking for ways to improve and learn more.</p>
        </div>
    )
}