import {Accordions} from './accordions';
let accordions;

const initAccordions = () => {
  accordions = new Accordions();
  // Используйте в разработке экспортируемую переменную accordions, window сделан для бэкэнда
  window.accordions = accordions;

  const parents = document.querySelectorAll('[data-accordion="parent"]');

  if (parents.length) {
    for (let i = 0; i < parents.length; i++) {
      const buttons = parents[i].querySelectorAll('[data-accordion="button"]');

      if (buttons.length) {
        for (let j = 0; j < buttons.length; j++) {
          const breakpoint = window.matchMedia(parents[i].dataset.focus);
          const breakpointChecker = () => {
            if (breakpoint.matches) {
              buttons[j].tabIndex = 0;
            } else {
              buttons[j].tabIndex = -1;
            }
          };
          breakpoint.addEventListener('change', breakpointChecker);
          breakpointChecker();
        }
      }
    }
  }
};

export {initAccordions, accordions};
