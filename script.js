
// Get the button element
const btnNo = document.getElementsByClassName("btnNo")[0];

// Add event listener for hover
btnNo.addEventListener("mouseover", () => {
  // Generate random position
  const randomX = Math.floor(Math.random() * window.innerWidth);
  const randomY = Math.floor(Math.random() * window.innerHeight);

  // Set the button's position
  btnNo.style.left = `${randomX}px`;
  btnNo.style.top = `${randomY}px`;
});
