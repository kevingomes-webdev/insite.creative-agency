gsap.registerPlugin(ScrollTrigger);

const timeLine = gsap.timeline({defaults: {duration: 1}})

timeLine.to('.pre-loader > .overlay-preloader', {top: '75%'})
timeLine.to('.pre-loader > .overlay-preloader', {top: '50%', delay: 0.2})
timeLine.to('.pre-loader > .overlay-preloader', {top: '25%', delay: 0.2})
timeLine.to('.pre-loader > .overlay-preloader', {top: '0', delay: 0.2})
timeLine.to(".overlay-preloader", {autoAlpha: "0", delay: 0})
timeLine.to(".pre-loader", {autoAlpha: "0", delay: 0})





let element = $(".content-background").first();

gsap.from(element, {
    x: -100,
    autoAlpha: 0,
    duration: 1,
});

let elements = $(".content-background");

elements.each(function() {
  gsap.from(this, {
      scrollTrigger: {
          trigger: this,
          start: "top 75%",
          end: "bottom bottom",
          scrub: 2,
      },
      x: -100,
      autoAlpha: 0,
      duration: 1,
  });
});