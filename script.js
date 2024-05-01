const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

gsap.from(".nkink", {
    stagger: .1,
    y: 10,
duration: 2,
ease: Power2,
opacity:0
})