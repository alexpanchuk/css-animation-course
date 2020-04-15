/**
 * Можно использовать scrollmagic вместо этого
 */

const rafFallback = (cb) => setTimeout(cb, 100 / 60);
const scroll = window.requestAnimationFrame || rafFallback;

const elementsToShow = document.querySelectorAll(".show-on-scroll");

const loop = () => {
  elementsToShow.forEach((el) => {
    if (isElementInViewport(el)) {
      el.classList.add("is-visible");
    } else if (el.classList.contains("is-visible")) {
      el.classList.remove("is-visible");
    }
  });
  scroll(loop);
};

loop();

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0 && rect.bottom >= 0) ||
    (rect.bottom >=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight)) ||
    (rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight))
  );
}
