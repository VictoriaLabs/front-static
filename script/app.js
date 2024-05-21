/* const firstTeam = document.querySelector('.team__content--first');
const secondTeam = document.querySelector('.team__content--second');
const thirdTeam = document.querySelector('.team__content--third');

let indexTeam = 0;

const changeTeam = (dir) => {

  if(dir == 'next') {
  const teams = [firstTeam, secondTeam, thirdTeam];
  teams[indexTeam].classList.add('hidden');
  indexTeam = (indexTeam + 1) % teams.length;
  console.log(indexTeam);
  teams[indexTeam].classList.remove('hidden');
  teams[indexTeam].classList.add('teamFromLeftBounce');
  }

  if(dir == 'prev') {
    const teams = [firstTeam, secondTeam, thirdTeam];
    teams[indexTeam].classList.add('hidden');
    indexTeam = (indexTeam - 1 + teams.length) % teams.length;
    console.log(indexTeam);
    teams[indexTeam].classList.remove('hidden');
    teams[indexTeam].classList.add('teamFromRightBounce');
  }
} */


  document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.burger-menu');
    const nav = document.querySelector('.header__menu nav');

    burger.addEventListener('click', function () {
      nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
    });
  });


  const scrollImages = document.querySelector(".scroll-images");
  const leftButton = document.querySelector(".left");
  const rightButton = document.querySelector(".right");


  function leftScroll() {
    if (window.innerWidth > 768) {
      scrollImages.scrollBy({
        left: -200,
        behavior: "smooth"
      });
    } else {
      const childWidth = scrollImages.firstElementChild.clientWidth + 30;
      console.log(childWidth);
      scrollImages.scrollBy({
        left: -childWidth,
        behavior: "smooth"
      });
    }
  }
  
  function rightScroll() {
    if (window.innerWidth > 768) {
      scrollImages.scrollBy({
        left: 200,
        behavior: "smooth"
      });
    } else {
      const childWidth = scrollImages.firstElementChild.clientWidth + 30;
      console.log(childWidth);
      scrollImages.scrollBy({
        left: childWidth,
        behavior: "smooth"
      });
    }
  }
  
  leftButton.addEventListener("click", leftScroll);
  rightButton.addEventListener("click", rightScroll);
  