
// Get the button elements
const btnNo = document.getElementsByClassName("btnNo")[0];
const btnYes = document.getElementsByClassName("btnYes")[0];

// Add event listener for hover
btnNo.addEventListener("mouseover", () => {
    // Generate random position
    const randomX = Math.floor(Math.random() * window.innerWidth);
    const randomY = Math.floor(Math.random() * window.innerHeight);

    // Set the button's position
    btnNo.style.left = `${randomX}px`;
    btnNo.style.top = `${randomY}px`;
});

btnNo.addEventListener("click", () => {
    // Generate random position
    const randomX = Math.floor(Math.random() * window.innerWidth);
    const randomY = Math.floor(Math.random() * window.innerHeight);

    // Set the button's position
    btnNo.style.left = `${randomX}px`;
    btnNo.style.top = `${randomY}px`;
});

// Add event listener for click
btnYes.addEventListener("click", () => {
    // Display the message
    alert("Yeeeeeeiiiiii te amo mucho");
});

