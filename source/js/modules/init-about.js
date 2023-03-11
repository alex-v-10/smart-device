// Init about block to open and close on button click.

const button = document.querySelector('.about__button');
const container = document.querySelector('.about__container');

const onButtonClick = () => {
  container.classList.toggle('about__container--closed');
};

const initAbout = () => {
  if (button) {
    button.addEventListener('click', onButtonClick);
  }
};

export {initAbout};
