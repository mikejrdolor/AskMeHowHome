// Optional: You can add alert or tracking for button clicks
document.querySelectorAll(".btn").forEach(button => {
  button.addEventListener("click", function() {
    console.log("Navigating to: " + this.textContent);
  });
});
