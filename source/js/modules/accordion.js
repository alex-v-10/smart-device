const INITIAL = 1;
const WIDTH = 768;

let accordionElements = document.getElementsByClassName('accordion');

if (accordionElements.length) {
  for (let i = 0; i < accordionElements.length; i++) {
    accordionElements[i].classList.remove('accordion--active');
  }
  accordionElements[INITIAL].classList.add('accordion--active');
}

const onAccordionClick = (event) => {
  if (window.innerWidth > WIDTH) {
    return;
  }
  for (let i = 0; i < accordionElements.length; i++) {
    if (accordionElements[i] !== event.target) {
      accordionElements[i].classList.remove('accordion--active');
    }
  }
  event.target.classList.toggle('accordion--active');
};

const initAccordion = () => {
  if (accordionElements.length) {
    for (let i = 0; i < accordionElements.length; i++) {
      accordionElements[i].addEventListener('click', onAccordionClick);
    }
  }
};

export {initAccordion};
