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
          end: "200%",
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
          end: "200%",
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
          end: "200%",
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
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum magni
        veniam quas, tenetur iure totam dolorem velit. Quasi ipsum iusto
        inventore atque error eum. Minima error corrupti ex enim deserunt. Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus ipsa
        dolore reprehenderit laboriosam voluptatum vero, illum facere tenetur,
        quas iure dicta aperiam quam necessitatibus itaque quo quis quod!
        Excepturi, laudantium. Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Natus, est perferendis, sequi qui assumenda, deserunt
        amet pariatur labore veniam corrupti tempora dolores at recusandae nemo
        et accusantium placeat totam iste.
      </p>
      <img
        src='https://chromatechfr.github.io/portfolio/img/Screenshot.png'
        alt=''
      />
    </>
  );
}
