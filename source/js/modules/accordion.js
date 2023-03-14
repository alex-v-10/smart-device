// Get accordion elements by data id;
const getAccordionElements = (accordionId) => document.querySelectorAll(`[data-accordion=${accordionId}]`);

const createOnAccordionAction = (accordionElements) => {
  return (event) => {
    if (event.type !== 'click' && event.key !== 'Enter') {
      return;
    }
    // Close all other accordion elements
    for (let i = 0; i < accordionElements.length; i++) {
      if (accordionElements[i] !== event.target) {
        accordionElements[i].classList.add('is-closed');
        accordionElements[i].nextElementSibling.style.display = 'none';
      }
    }
    // Open / close current accordion element
    event.target.classList.toggle('is-closed');
    const panel = event.target.nextElementSibling;
    if (panel.style.display === 'block') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'block';
    }
  };
};

const openInitialAccordionElement = (accordionElements, initial) => {
  const initialAccordion = (accordionElements[initial - 1] || accordionElements[0]);
  initialAccordion.classList.remove('is-closed');
  initialAccordion.nextElementSibling.style.display = 'block';
};

const initAccordion = (accordionId, initial, media) => {
  const accordionElements = getAccordionElements(accordionId);
  const onAccordionAction = createOnAccordionAction(accordionElements);
  if (accordionElements.length) {
    const breakpoint = window.matchMedia(media);
    const breakpointChecker = () => {
      if (breakpoint.matches) {
        for (let i = 0; i < accordionElements.length; i++) {
          accordionElements[i].classList.add('is-on');
          accordionElements[i].classList.add('is-closed');
          accordionElements[i].nextElementSibling.style.display = 'none';
          accordionElements[i].setAttribute('tabindex', '0');
          accordionElements[i].addEventListener('click', onAccordionAction);
          accordionElements[i].addEventListener('keypress', onAccordionAction);
        }
        if (initial) {
          openInitialAccordionElement(accordionElements, initial);
        }
      } else {
        for (let i = 0; i < accordionElements.length; i++) {
          accordionElements[i].classList.remove('is-on');
          accordionElements[i].classList.remove('is-closed');
          accordionElements[i].nextElementSibling.removeAttribute('style');
          accordionElements[i].removeAttribute('tabindex');
          accordionElements[i].removeEventListener('click', onAccordionAction);
          accordionElements[i].removeEventListener('keypress', onAccordionAction);
        }
      }
    };
    breakpoint.addEventListener('change', breakpointChecker);
    breakpointChecker();
  }
};

export {initAccordion};
