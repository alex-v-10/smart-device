const BASE_QUANTITY = 3;
const MEDIA = {mobile: '(max-width:767px)'};

const closeContainer = (dropContainer, dropItems, itemsToShow) => {
  if (dropItems.length) {
    for (let i = 0; i < dropItems.length; i++) {
      if (i >= itemsToShow) {
        dropItems[i].style.display = 'none';
      }
    }
  }
  dropContainer.classList.add('is-closed');
};

const openContainer = (dropContainer, dropItems, itemsToShow) => {
  if (dropItems.length) {
    for (let i = 0; i < dropItems.length; i++) {
      if (i >= itemsToShow) {
        dropItems[i].style.display = 'block';
      }
    }
  }
  dropContainer.classList.remove('is-closed');
};

const dropContainers = document.querySelectorAll('[data-text-drop]');

const initTextDrops = () => {
  if (dropContainers.length) {
    for (let i = 0; i < dropContainers.length; i++) {
      const dropContainer = dropContainers[i];
      const dropContent = dropContainer.querySelector('[data-text-drop-content]');
      const dropItems = dropContent.children;
      const itemsToShow = dropContent.dataset.textDropContent || BASE_QUANTITY;
      const hiddenMore = dropContent.querySelector('[data-hidden-more]');
      const dropButton = dropContainer.querySelector('[data-text-drop-button]');

      closeContainer(dropContainer, dropItems, itemsToShow);

      const breakpoint = window.matchMedia(MEDIA[hiddenMore.dataset.hiddenMore]);
      const breakpointChecker = () => {
        if (breakpoint.matches && dropContainer.classList.contains('is-closed')) {
          hiddenMore.style.display = 'none';
        } else {
          hiddenMore.style.display = 'block';
        }
      };
      breakpoint.addEventListener('change', breakpointChecker);
      breakpointChecker();

      const onTextDropButtonClick = () => {
        if (dropContainer.classList.contains('is-closed')) {
          openContainer(dropContainer, dropItems, itemsToShow);
          hiddenMore.style.display = 'block';
        } else {
          closeContainer(dropContainer, dropItems, itemsToShow);
        }
        breakpointChecker();
      };
      dropButton.addEventListener('click', onTextDropButtonClick);
    }
  }
};

export {initTextDrops};
