import React, { useEffect } from "react";
import gsap from "gsap";
import NavBar from "../components/NavBar";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Aos from "aos";
gsap.registerPlugin(ScrollTrigger);

export default function Homes() {
  useEffect(() => {
    console.log(window.screen.width);
    if (window.screen.width > 1000) {
      let skills = gsap.timeline({
        scrollTrigger: {
          trigger: "#creative img",
          start: "0%",
          end: "80%",
          scrub: 1,
        },
      });

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

      skills.fromTo("h1#skills", { x: 0 }, { x: 600 });
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

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className='Home'>
        <NavBar />
        <h3 className='name'>ChromaTech</h3>
        <div className='square'></div>
      </div>
      <section id='presentation'>
        <div className='img-wrapper' id='creative'>
          <img
            src='https://chromatechfr.github.io/portfolio/img/2.png'
            alt=''
          />
        </div>
        <h2 id='creative'>creatif</h2>
        <div className='img-wrapper' id='curieux'>
          <img
            src='https://chromatechfr.github.io/portfolio/img/1.png'
            alt=''
          />
        </div>
        <div className='text-wrapper'>
          <div id='neil'>Hey i'm Neil,</div>
          <div id='age'>18 years old student </div>
          <div id='passion'>
            love learning and improving in everything i do.
          </div>
        </div>
      </section>
      <section id='skills'>
        <h1 id='skills'>My skills</h1>
        <h1>Language</h1>
        <div className='skills-wrapper'>
          <div className='card'>
            <p>TypeScript</p>
            <div className='img-wrapper'>
              <img
                src='https://chromatechfr.github.io/portfolio/img/ts.png'
                alt=''
              />
            </div>
          </div>
          <div className='card'>
            <p>JavaScript</p>
            <div className='img-wrapper'>
              <img
                src='https://chromatechfr.github.io/portfolio/img/js.png'
                alt=''
              />
            </div>
          </div>
        </div>
        <h1>FrameWorks</h1>
        <div className='skills-wrapper'>
          <div className='card'>
            <p>React</p>
            <div className='img-wrapper'>
              <img
                src='https://chromatechfr.github.io/portfolio/img/react.png'
                alt=''
              />
            </div>
          </div>
          <div className='card'>
            <p>socket.io</p>
            <div className='img-wrapper'>
              <img
                src='https://chromatechfr.github.io/portfolio/img/socket.png'
                alt=''
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
