// Spotlight Button Effect
const buttons = document.querySelectorAll(".button");

buttons.forEach(btn => {
    btn.addEventListener("mousemove", (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        btn.style.setProperty("--x", `${x}px`);
        btn.style.setProperty("--y", `${y}px`);
        btn.classList.add("spotlight");
    });

    btn.addEventListener("mouseleave", () => {
        btn.classList.remove("spotlight");
    });
});

// 3D Tilt Effect for Profile Card (Container)
const container = document.querySelector(".container");

if (container && window.innerWidth > 768) { // Only on desktop
    container.addEventListener("mousemove", (e) => {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -2; // Max rotation deg
        const rotateY = ((x - centerX) / centerX) * 2;

        container.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    container.addEventListener("mouseleave", () => {
        container.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
    });

    // Add transition for smooth reset
    container.style.transition = "transform 0.1s ease-out";
}

// Share Button Logic
const shareBtn = document.querySelector(".share-btn");

if (shareBtn) {
    shareBtn.addEventListener("click", async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: document.title,
                    text: 'Check out this profile!',
                    url: window.location.href,
                });
            } catch (err) {
                console.log('Error sharing:', err);
            }
        } else {
            // Fallback: Copy to clipboard
            navigator.clipboard.writeText(window.location.href).then(() => {
                alert("Link copied to clipboard!");
            });
        }
    });
}
