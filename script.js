gsap.registerPlugin(ScrollTrigger);

// Use a more mobile-friendly event like "wheel" or "touchstart"
ScrollTrigger.addEventListener("wheel", ScrollTrigger.update); 

const preloaderTimeline = gsap.timeline({ defaults: { duration: 1 } });

preloaderTimeline
  .fromTo('.pre-loader > .overlay-preloader', { top: '100%' }, { top: '0%', ease: 'power2.out', duration: 5 })
  .to([".overlay-preloader", ".pre-loader"], { autoAlpha: 0 })
  .fromTo(".first-animation", { x: -100, opacity: 0}, {x: 0, opacity: 1, duration: 1})

const animatedElements = $(".animation");

animatedElements.each(function() {
  gsap.from(this, {
    scrollTrigger: {
      trigger: this,
      start: "top 65%",
      end: "bottom bottom",
      scrub: true,
      // Add passive event listener:
      useCapture: true
    },
    x: -100,
    autoAlpha: 0,
    duration: 2,
  });
});
