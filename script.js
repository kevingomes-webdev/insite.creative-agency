gsap.registerPlugin(ScrollTrigger);

// Use a more mobile-friendly event like "wheel" or "touchstart"
ScrollTrigger.addEventListener("touchstart", ScrollTrigger.update); 

const preloaderTimeline = gsap.timeline({ defaults: { duration: 1 } });

preloaderTimeline
  .fromTo('.pre-loader > .overlay-preloader', { top: '100%' }, { top: '0%', ease: 'power2.out', duration: 5 })
  .to([".overlay-preloader", ".pre-loader"], { autoAlpha: 0 })
  .to(".first-animation", { from: { x: -100 }, to: { x: 0 }, ease: 'power2.out', duration: 3});

const animatedElements = $(".animation");

animatedElements.each(function() {
  gsap.from(this, {
    scrollTrigger: {
      trigger: this,
      start: "top 80%",
      end: "bottom bottom",
      scrub: 1,
      // Add passive event listener:
      useCapture: true
    },
    x: -100,
    autoAlpha: 0,
    duration: 1,
  });
});
