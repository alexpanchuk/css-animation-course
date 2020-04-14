document.addEventListener("DOMContentLoaded", function (event) {
  const optionsList = document.querySelector(".options-list");
  const options = document.querySelectorAll(".option");
  let currentOption = null;

  optionsList.addEventListener("mouseover", (e) => {
    if (currentOption) return;

    let target = e.target.closest(".option");
    if (!target) return;
    if (!optionsList.contains(target)) return;
    currentOption = target;

    options.forEach((o) => o.classList.remove("highlighted"));
    target.classList.add("highlighted");
  });

  optionsList.addEventListener("mouseout", (e) => {
    if (!currentOption) return;
    const target = e.target;
    let relatedTarget = e.relatedTarget;

    while (relatedTarget) {
      if (relatedTarget == currentOption) return;
      relatedTarget = relatedTarget.parentNode;
    }

    currentOption = null;
    target.classList.remove("highlighted");

    setTimeout(() => {
      const highlighted = document.querySelectorAll(".option.highlighted");
      if (!highlighted.length) {
        const featured = document.querySelector(".option.featured");

        if (featured) {
          featured.classList.add("highlighted");
        }
      }
    }, 500);
  });
});
