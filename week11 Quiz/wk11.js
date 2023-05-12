const svg = document.querySelector("svg-canvas");

function resizeSvg() {
    const container = document.querySelector(".container");
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    const containerAspectRatio = containerWidth / containerHeight;

    let viewBoxWidth, viewBoxHeight;
    if (containerAspectRatio > 1) {
        viewBoxWidth = 1;
        viewBoxHeight = 1 / containerAspectRatio;
    } else {
        viewBoxWidth = containerAspectRatio;
        viewBoxHeight = 1;
    }

    const viewBoxX = (1 - viewBoxWidth) / 2;
    const viewBoxY = (1 - viewBoxHeight) / 2;

    svg.setAttribute("viewBox", `${viewBoxX} ${viewBoxY} ${viewBoxWidth} ${viewBoxHeight}`);

    const minDimension = Math.min(containerWidth, containerHeight);
}

window.addEventListener("resize", resizeSvg);
resizeSvg();
