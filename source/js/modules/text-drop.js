// Init text block to open and close on button click.
// [data-text-drop-content] contains amount of items to show.

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

const onTextDropButtonClick = (event) => {
  const currentDropContainer = event.target.closest('[data-text-drop]');
  const currentDropContent = currentDropContainer.querySelector('[data-text-drop-content]');
  const currentDropItems = currentDropContent.children;
  const currentItemsToShow = currentDropContent.dataset.textDropContent || 2;

  if (currentDropContainer.classList.contains('is-closed')) {
    openContainer(currentDropContainer, currentDropItems, currentItemsToShow);
  } else {
    closeContainer(currentDropContainer, currentDropItems, currentItemsToShow);
  }
};

const initTextDrops = () => {
  if (dropContainers.length) {
    for (let i = 0; i < dropContainers.length; i++) {
      const dropContainer = dropContainers[i];
      const dropContent = dropContainer.querySelector('[data-text-drop-content]');
      const dropItems = dropContent.children;
      const itemsToShow = dropContent.dataset.textDropContent || 2;
      const dropButton = dropContainer.querySelector('[data-text-drop-button]');
      closeContainer(dropContainer, dropItems, itemsToShow);
      dropButton.addEventListener('click', onTextDropButtonClick);
    }
  }
};

export {initTextDrops};
