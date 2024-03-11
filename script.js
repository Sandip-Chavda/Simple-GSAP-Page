// gsap.to("#box", {
//   x: 900,
//   y: 300,
//   rotate: 360,
//   backgroundColor: "orange",
//   duration: 2,
//   delay: 1,
// });

// gsap.from("#box", {
//   x: 900,
//   y: 300,
//   rotate: 360,
//   backgroundColor: "orange",
//   duration: 3,
//   delay: 1,
// });

////////TIMELINE///////

// var tl = gsap.timeline();

// tl.to("#box1", {
//   x: 900,
//   rotate: 360,
//   scale: 0.5,
//   duration: 2,
// });

// tl.to("#box2", {
//   x: 700,
//   rotate: 360,
//   scale: 0.4,
//   duration: 2,
// });

// tl.to("#box3", {
//   x: 500,
//   rotate: 360,
//   scale: 0.3,
//   duration: 2,
// });

gsap.from("#nav a", {
  y: -50,
  opacity: 0,
  delay: 0.5,
  stagger: 0.2,
  duration: 1,
});

gsap.from("#main h1", {
  x: -500,
  opacity: 0,
  delay: 0.5,
  stagger: 0.7,
  duration: 2,
});

gsap.from("#links a", {
  y: 800,
  opacity: 0,
  duration: 2.5,
});
