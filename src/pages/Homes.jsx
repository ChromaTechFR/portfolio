import React, { useEffect } from "react";
import gsap from "gsap";
import NavBar from "../components/NavBar";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Homes() {
  useEffect(() => {
    console.log(window.screen.width);
    if (window.screen.width > 1000) {
      let slogan = gsap.timeline({
        scrollTrigger: {
          trigger: ".Home",
          start: "0%",
          end: "80%",
          scrub: 1,
        },
      });

      let chroma = gsap.timeline({
        scrollTrigger: {
          trigger: ".Home",
          start: "0%",
          end: "100%",
          scrub: 1,
        },
      });

      let square = gsap.timeline({
        scrollTrigger: {
          trigger: ".Home",
          start: "0%",
          end: "80%",
          scrub: 1,
        },
      });

      let nav = gsap.timeline({
        scrollTrigger: {
          trigger: ".Home",
          start: "0%",
          end: "800%",
          scrub: 1,
          pin: true,
          pinSpacing: false,
        },
      });

      slogan.fromTo(".slogan-container", { y: 0 }, { y: -400 });

      chroma.fromTo(
        ".name",
        { scale: 9 },
        {
          scale: 1,
          top: "20px",
          left: "50px",
          x: "50%",
          y: "50%",
          fontSize: "1.20em",
        }
      );

      square.fromTo(
        ".square",
        { left: "80%" },
        { left: "100%", opacity: "0", rotation: 90 }
      );
    } else if (window.screen.width > 414) {
      let slogan_mobile2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".Home",
          start: "0%",
          end: "80%",
          scrub: 1,
        },
      });

      let chroma_mobile2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".Home",
          start: "0%",
          end: "100%",
          scrub: 1,
        },
      });

      let square_mobile2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".Home",
          start: "0%",
          end: "65%",
          scrub: 1,
        },
      });

      let nav_mobile2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".Home",
          start: "0%",
          end: "800%",
          scrub: 1,
          pin: true,
          pinSpacing: false,
        },
      });

      slogan_mobile2.fromTo(".slogan-container", { y: 0 }, { y: -400 });

      chroma_mobile2.fromTo(
        ".name",
        { scale: 2.5, left: "55%", transform: "translateX(-60%)" },
        {
          scale: 1,
          top: "-50px",
          left: "-10px",
          fontSize: "15px",
          x: "50%",
          y: "50%",
        }
      );

      square_mobile2.fromTo(
        ".square",
        { left: "80%", top: "80%" },
        { left: "100%", opacity: "0", rotation: 90 }
      );
    } else {
      let slogan_mobile = gsap.timeline({
        scrollTrigger: {
          trigger: ".Home",
          start: "0%",
          end: "80%",
          scrub: 1,
        },
      });

      let chroma_mobile = gsap.timeline({
        scrollTrigger: {
          trigger: ".Home",
          start: "0%",
          end: "100%",
          scrub: 1,
        },
      });

      let square_mobile = gsap.timeline({
        scrollTrigger: {
          trigger: ".Home",
          start: "0%",
          end: "80%",
          scrub: 1,
        },
      });

      let nav_mobile = gsap.timeline({
        scrollTrigger: {
          trigger: ".Home",
          start: "0%",
          end: "800%",
          scrub: 1,
          pin: true,
          pinSpacing: false,
        },
      });

      slogan_mobile.fromTo(".slogan-container", { y: 0 }, { y: -400 });

      chroma_mobile.fromTo(
        ".name",
        { scale: 2.5, transform: "translateX(-60%)" },
        {
          scale: 1,
          top: "-50px",
          left: "-10px",
          fontSize: "15px",
          x: "50%",
          y: "50%",
        }
      );

      square_mobile.fromTo(
        ".square",
        { left: "80%", top: "80%" },
        { left: "100%", opacity: "0", rotation: 90 }
      );
    }
  }, []);

  return (
    <>
      <div className='Home'>
        <NavBar />
        <h3 className='name'>ChromaTech</h3>
        <div className='square'></div>
      </div>
      <section id='presentation'>
        <img
          id='creative'
          src='https://chromatechfr.github.io/portfolio/img/Screenshot.png'
          alt=''
        />
        <p id='creative'>
          Ce site a pour but de regrouper toute mes compétences j'espères qu'il
          vou plaira
        </p>
        <img
          src='https://chromatechfr.github.io/portfolio/img/1.png'
          alt=''
          id='curieux'
        />
      </section>
      <section id='skills'>
        <p>voila mes compétences</p>
        <img
          id='skills'
          src='https://chromatechfr.github.io/portfolio/img/Screenshot.png'
          alt=''
        />
      </section>
    </>
  );
}
