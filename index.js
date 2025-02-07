//locomotive
const scroll = new LocomotiveScroll({
  el: document.querySelector('.main'),
  smooth: true
});




//shery.js

Shery.textAnimate(".text-target" /* Element to target.*/, {
  //Parameters are optional.
  style: 2,
  y: 10,
  delay: 0.1,
  duration: 2,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});

Shery.hoverWithMediaCircle(".hover-target" /* Element to target.*/, {
  images: ["bg2.png","mainbg-O.jpg"] /*OR*/,
  //videos: ["video1.mp4", "video2.mp4"],
});
