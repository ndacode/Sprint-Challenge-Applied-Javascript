/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/


const carouselContainer = document.querySelector('.carousel-container');
console.log(carouselContainer);
function Carousel() {
 
carousel = document.createElement ('div');
mountains = document.createElement('img');
computer = document.createElement('img');
trees = document.createElement('img');
turntable = document.createElement('img');
rtBtn = document.createElement('div');
ltBtn = document.createElement('div');

carousel.classList.add('carousel');
rtBtn.classList.add('right-button');
ltBtn.classList.add('left-button');

carousel.textContent = ("I'm the carousel"),
mountains.src = './assets/carousel/mountains.jpeg';
computer.src ="./assets/carousel/computer.jpeg";
trees.src ="./assets/carousel/trees.jpeg";
turntable.src ="./assets/carousel/turntable.jpeg";
rtBtn.textContent = "Next";
ltBtn.textContent = "Back";

console.log(mountains.src);

carouselContainer.appendChild(carousel);
carousel.appendChild(ltBtn);
carousel.appendChild(rtBtn);
carousel.appendChild(mountains);
carousel.appendChild(computer);
carousel.appendChild(trees);
carousel.appendChild(turntable);

return carousel

}

carouselContainer.appendChild(Carousel());

carousel.addEventListener("click", (event) => {
  console.log("Clicked");
  ltBtn.classList.toggle("left-button")
  rtBtn.classList.toggle("right-button")
})



