gsap.registerPlugin(ScrollTrigger);

const timeLine = gsap.timeline({defaults: {duration: 1}})

timeLine.to('.pre-loader > .overlay-preloader', {top: '75%'})
timeLine.to('.pre-loader > .overlay-preloader', {top: '50%', delay: 0.2})
timeLine.to('.pre-loader > .overlay-preloader', {top: '25%', delay: 0.2})
timeLine.to('.pre-loader > .overlay-preloader', {top: '0', delay: 0.2})
timeLine.to(".overlay-preloader", {autoAlpha: "0", delay: 0})
timeLine.to(".pre-loader", {autoAlpha: "0", delay: 0})


gsap.from(".content-child", {
    scrollTrigger: {
      trigger: ".content-child",
      start: "top 75%", // start when top of the element is 75% from the top of the viewport
      end: "bottom bottom", // end when bottom of the element is at the bottom of the viewport
      scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    },
    opacity: 0, // start at 0 opacity
    duration: 1, // duration of 1 second
  });
