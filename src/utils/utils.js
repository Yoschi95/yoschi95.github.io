export const setBodyVerticalScrollable = (isScrollable = true) => {
  document.body.style.overflowY = isScrollable ? "auto" : "hidden";
};
