const titlecardpicture = document.querySelector(".title-card-picture");
const titlecardtext = document.querySelector(".title-card-text");
const educationcourses = document.querySelectorAll("#school-courses");


const t1 = new TimelineMax();
const t2 = new TimelineMax();
const t3 = new TimelineMax();


t1.fromTo(titlecardpicture, 2, {height: "0%"}, {height: "80%", ease: Power2.easeInOut});
t2.fromTo(titlecardtext, 2, {y: "-100%"}, {y: "0%"});
t3.fromTo(educationcourses, 1.2, {x: "-100%"}, {x: "0%"});

/*
t1.fromTo(titlecardpicture, 2, {height: "0%"}, {height: "70%", ease: Power2.easeInOut}
).fromTo(titlecardpicture, 1.2, {width: "100%"}, {width: "100%", ease: Power2.easeInOut});
*/

const about = document.querySelector(".about");

/*
const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
    duration: 1000,
    triggerElement: about,
    triggerHook: 0
}).addIndicators().addTo(controller);
*/