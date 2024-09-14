"use client";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
const Parallax = () => {
  const [background, setBackground] = useState(20);
  const parallaxRef = useRef(null);
  const mountain3 = useRef(null);
  const mountain2 = useRef(null);
  const mountain1 = useRef(null);
  const cloudsBottom = useRef(null);
  const cloudsLeft = useRef(null);
  const cloudsRight = useRef(null);
  const starts = useRef(null);
  const sun = useRef(null);
  const copy = useRef(null);
  const btn = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      var tl = gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: parallaxRef.current,
          start: "top top",
          end: "5000 bottom",
          scrub: true,
          pin: true,
          onUpdata: (self) => {
            setBackground(Math.ceil(self.progress * 100 + 20));
          },
        },
      });
      tl.to(mountain3.current, { y: "-=80" }, 0);
      tl.to(mountain2.current, { y: "-=30" }, 0);
      tl.to(mountain1.current, { y: "+=50" }, 0);
      tl.to(starts.current, { top: 0 }, 0.5);
      tl.to(cloudsBottom.current, { opacity: 0, duration: 0.5 }, 0);
      tl.to(cloudsLeft.current, { x: "-20%", opacity: 0 }, 0);
      tl.to(cloudsRight.current, { x: "20%", opacity: 0 }, 0);
      tl.to(sun.current, { y: "+=210" }, 0);
      tl.to(copy.current, { y: "-250%", opacity: 1 }, 0);
      tl.to(btn.current, { opacity: 1 }, 1.5);
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="parallax-outer">
      <div
        ref={parallaxRef}
        style={{
          background: `linear-gradient(#0f2b9c , #673d7d ${background}% , #a74a67 , #edfc54 )`,
        }}
        className="parallax"
      >
        <img
          ref={mountain3}
          className="mountain mountain-3"
          src="/parallax/mountain-3.svg"
        />
        <img
          ref={mountain2}
          className="mountain mountain-2"
          src="/parallax/mountain-2.svg"
        />
        <img
          ref={mountain1}
          className="mountain mountain-1"
          src="/parallax/mountain-1.svg"
        />
        <img ref={sun} className="sun" src="/parallax/sun.svg" />
        <img
          ref={cloudsBottom}
          className="clouds-bottom"
          src="/parallax/cloud-bottom.svg"
        />
        <img
          ref={cloudsLeft}
          className="clouds-left"
          src="/parallax/clouds-left.svg"
        />
        <img
          ref={cloudsRight}
          className="clouds-right"
          src="/parallax/clouds-right.svg"
        />
        <img ref={starts} className="stars" src="/parallax/stars.svg" />
        <div ref={copy} className="copy">
          <h1>some tests</h1>
          <span ref={btn}>Discover More</span>
        </div>
      </div>
    </div>
  );
};
export default Parallax;
// "use client";
// import { useState, useRef, useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// const Parallax = () => {
//   const [background, setBackground] = useState(20);
//   const parallaxRef = useRef(null);
//   const mountain3 = useRef(null);
//   const mountain2 = useRef(null);
//   const mountain1 = useRef(null);
//   const cloudsBottom = useRef(null);
//   const cloudsLeft = useRef(null);
//   const cloudsRight = useRef(null);
//   const stars = useRef(null); // Fixed typo here too (from starts to stars)
//   const sun = useRef(null);
//   const copy = useRef(null);
//   const btn = useRef(null);

//   useEffect(() => {
//     // Register ScrollTrigger
//     gsap.registerPlugin(ScrollTrigger);

//     let ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         defaults: { duration: 1 },
//         scrollTrigger: {
//           trigger: parallaxRef.current,
//           start: "top top",
//           end: "5000 bottom",
//           scrub: true,
//           pin: true,
//           onUpdate: (self) => {
//             setBackground(Math.ceil(self.progress * 100 + 20));
//           },
//         },
//       });

//       // Animations
//       tl.to(mountain3.current, { y: "-=80" }, 0);
//       tl.to(mountain2.current, { y: "-=30" }, 0);
//       tl.to(mountain1.current, { y: "+=50" }, 0);
//       tl.to(stars.current, { top: 0 }, 0.5); // Fixed typo from 'starts' to 'stars'
//       tl.to(cloudsBottom.current, { opacity: 0, duration: 0.5 }, 0);
//       tl.to(cloudsLeft.current, { x: "-20%", opacity: 0 }, 0);
//       tl.to(cloudsRight.current, { x: "20%", opacity: 0 }, 0);
//       tl.to(sun.current, { y: "+=210" }, 0);
//       tl.to(copy.current, { y: "-250%", opacity: 1 }, 0);
//       tl.to(btn.current, { opacity: 1 }, 1.5);
//     });

//     // Cleanup GSAP context on component unmount
//     return () => ctx.revert();
//   }, []);

//   return (
//     <div className="parallax-outer">
//       <div
//         ref={parallaxRef}
//         style={{
//           background: `linear-gradient(#0f2b9c , #673d7d ${background}%, #a74a67, #edfc54)`,
//         }}
//         className="parallax"
//       >
//         <img
//           ref={mountain3}
//           className="mountain mountain-3"
//           src="/parallax/mountain-3.svg"
//           alt="Mountain 3"
//         />
//         <img
//           ref={mountain2}
//           className="mountain mountain-2"
//           src="/parallax/mountain-2.svg"
//           alt="Mountain 2"
//         />
//         <img
//           ref={mountain1}
//           className="mountain mountain-1"
//           src="/parallax/mountain-1.svg"
//           alt="Mountain 1"
//         />
//         <img ref={sun} className="sun" src="/parallax/sun.svg" alt="Sun" />
//         <img
//           ref={cloudsBottom}
//           className="clouds-bottom"
//           src="/parallax/cloud-bottom.svg"
//           alt="Clouds Bottom"
//         />
//         <img
//           ref={cloudsLeft}
//           className="clouds-left"
//           src="/parallax/clouds-left.svg"
//           alt="Clouds Left"
//         />
//         <img
//           ref={cloudsRight}
//           className="clouds-right"
//           src="/parallax/clouds-right.svg"
//           alt="Clouds Right"
//         />
//         <img
//           ref={stars}
//           className="stars"
//           src="/parallax/stars.svg"
//           alt="Stars"
//         />
//         <div ref={copy} className="copy">
//           <h1>some tests</h1>
//           <span ref={btn}>Discover More</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Parallax;
