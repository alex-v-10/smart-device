const BASE_QUANTITY = 3;

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
      const dropButton = dropContainer.querySelector('[data-text-drop-button]');
      closeContainer(dropContainer, dropItems, itemsToShow);

      const onTextDropButtonClick = () => {
        if (dropContainer.classList.contains('is-closed')) {
          openContainer(dropContainer, dropItems, itemsToShow);
        } else {
          closeContainer(dropContainer, dropItems, itemsToShow);
        }
      };

      dropButton.addEventListener('click', onTextDropButtonClick);
    }
  }
};

export {initTextDrops};
