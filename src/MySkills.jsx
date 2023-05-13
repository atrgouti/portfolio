import "./mySkillsStyles.css"
import html from "../Photos/skillIcons/html.png"
import css from "../Photos/skillIcons/css.png"
import Bootstrap from "../Photos/skillIcons/Bootstrap.png"
import git from "../Photos/skillIcons/git.png"
import javascript from "../Photos/skillIcons/javascript.png"
import laravel from "../Photos/skillIcons/laravel.png"
import mysql from "../Photos/skillIcons/mysql.png"
import php from "../Photos/skillIcons/php.png"
import sass from "../Photos/skillIcons/sass.png"
import typescript from "../Photos/skillIcons/typescript.png"
import reactIcon from "../Photos/skillIcons/reactIcon.png"
import React, { useRef, useEffect } from 'react';




export default function MySkills(){


    const targetRef = useRef(null);
    const targetRef2 = useRef(null);
    const targetRef3 = useRef(null);

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
        const observer3 = new IntersectionObserver(handleIntersection, options);

        if (targetRef.current) {
          observer.observe(targetRef.current);
        }
        if (targetRef2.current) {
          observer2.observe(targetRef2.current);
        }
        if (targetRef3.current) {
          observer3.observe(targetRef3.current);
        }
    
        return () => {
          if (targetRef.current) {
            observer.unobserve(targetRef.current);
          }
          if (targetRef2.current) {
            observer2.unobserve(targetRef2.current);
          }
          if (targetRef3.current) {
            observer3.unobserve(targetRef3.current);
          }
        };
    }, []);

    return(
        <div className="containerSkills">
            <p className="aboutme" ref={targetRef}>Skills<span>()</span></p>
            <div className="wrapper">
                <div className="left" ref={targetRef2}>
                    <div className="box">
                        <img src={html} alt="" />
                    </div>
                    <div className="box">
                        <img src={css} alt="" />
                    </div>
                    <div className="box">
                        <img src={javascript} alt="" />
                    </div>
                    <div className="box">
                        <img src={Bootstrap} alt="" />
                    </div>
                    <div className="box">
                        <img src={git} alt="" />
                    </div>
                    <div className="box">
                        <img src={sass} alt="" />
                    </div>
                </div>
                <div className="right" ref={targetRef3}>
                    <div className="box">
                        <img src={reactIcon} alt="" />
                    </div>
                    <div className="box">
                        <img src={typescript} alt="" />
                    </div>
                    <div className="box">
                        <img src={laravel} alt="" />
                    </div>
                    <div className="box">
                        <img src={mysql} alt="" />
                    </div>
                    <div className="box">
                        <img src={javascript} alt="" />
                    </div>
                    <div className="box">
                        <img src={javascript} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}