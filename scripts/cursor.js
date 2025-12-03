const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", function (e) {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // Animate outline with a slight delay/easing
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});

// Add hover effect for clickable elements
const clickables = document.querySelectorAll("a, button, .theme-btn");

clickables.forEach(el => {
    el.addEventListener("mouseenter", () => {
        cursorOutline.style.transform = "translate(-50%, -50%) scale(1.5)";
        cursorOutline.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
        cursorDot.style.transform = "translate(-50%, -50%) scale(2)";
    });

    el.addEventListener("mouseleave", () => {
        cursorOutline.style.transform = "translate(-50%, -50%) scale(1)";
        cursorOutline.style.backgroundColor = "transparent";
        cursorDot.style.transform = "translate(-50%, -50%) scale(1)";
    });
});
