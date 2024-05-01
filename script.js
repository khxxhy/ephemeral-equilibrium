const scroll = new LocomotiveScroll({
    el: document.querySelector('#main-div'),
    smooth: true,
});

gsap.from(".nlink", {
    stagger: .2,
    y: 10,
duration: 1,
ease: Power3,
opacity:0
})

Shery.textAnimate("#headings h1", {
  style: 2,
  y: 10,
  delay: 0.3,
  duration: 4,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});

gsap.from(".anim2", {
    y: 50,
duration: 2,
ease: Expo,
opacity:0,
stagger: .3,
})