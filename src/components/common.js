export const onRender = (callback) => {
  (async () => {
    await new Promise((resolve) => resolve());
    callback();
  })();
}

export const setEventListener = ({ dataId, onClick }) => {
  onRender(() => {
    document.querySelector(`[data-id="${dataId}"]`).onclick = (event) => {
      onClick(event);
    };
  })
};

export const showModal = ({ target: $target, modalSelector }) => {
  const { dataset } = $target;
  if (dataset.bsToggle && dataset.bsTarget) {
    return;
  }
  dataset.bsToggle = 'modal';
  dataset.bsTarget = modalSelector;
  $target.click();
};
