const anchors = document.querySelectorAll(".anchor-tooltip");

for (anchor of anchors) {
  const tooltipText = anchor.getAttribute("title");
  const tooltip = document.createElement("span");
  tooltip.innerText = tooltipText;
  tooltip.classList.add("title-tooltip");
  anchor.appendChild(tooltip);
}
