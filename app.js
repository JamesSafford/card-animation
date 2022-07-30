//Movement animation
const card = document.querySelector(".card");
const container = document.querySelector(".container");
//Popout items
const title = document.querySelector('.title');
const description = document.querySelector(".info h3");
const image = document.querySelector(".image img");
const buttons = document.querySelector(".social-buttons");

//Animation event
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 10;
  card.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`;
});

//Animate in
container.addEventListener("mouseenter", (e)=> {
  card.style.transition = "none";
//popout
  title.style.transform = "translateZ(150px)";
  description.style.transform = "translateZ(75px)";
  image.style.transform = "translateZ(100px) rotateZ(360deg)";

});

//Animate out
container.addEventListener("mouseleave", (e)=> {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
//pop back
  title.style.transform = "translateZ(0px)";
  description.style.transform = "translateZ(0px)";
  image.style.transform = "translateZ(0px)";
});

