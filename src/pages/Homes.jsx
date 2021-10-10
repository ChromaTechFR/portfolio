import React, { useEffect } from "react";
import gsap from "gsap";
import NavBar from "../components/NavBar";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Homes() {
  useEffect(() => {
    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".Home",
        start: "0%",
        end: "80%",
        scrub: 1,
      },
    });

    let timeline2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".Home",
        start: "0%",
        end: "100%",
        scrub: 1,
      },
    });

    let timeline4 = gsap.timeline({
      scrollTrigger: {
        trigger: ".Home",
        start: "0%",
        end: "80%",
        scrub: 1,
      },
    });

    let timeline3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".Home",
        start: "0%",
        end: "200%",
        scrub: 1,
        pin: true,
        pinSpacing: false,
      },
    });

    timeline.fromTo(".slogan-container", { y: 0 }, { y: -400 });

    timeline2.fromTo(
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

    timeline4.fromTo(
      ".square",
      { left: "80%" },
      { left: "100%", opacity: "0", rotation: 90 }
    );
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
      <img src='/img/1.png' alt='' />
    </>
  );
}
