const image = document.getElementById("hover-image");

image.addEventListener("mouseover", () => {
    image.style.transform = "translateX(20px) translateY(20px)";
});

image.addEventListener("mouseout", () => {
    image.style.transform = "translateX(0) translateY(0)";
});