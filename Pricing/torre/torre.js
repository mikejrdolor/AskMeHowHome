const buttons = document.querySelectorAll(".option-btn");
const image = document.getElementById("paymentImage");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const option = button.getAttribute("data-option");

        if (option === "Torre Lorenzo Sur 601") {
            image.src = "img/sur601.jpg";
        } else if (option === "Torre Lorenzo Sur 710") {
            image.src = "img/sur710.jpg";

        } else if (option === "Torre Lorenzo Sur 710-1") {
            image.src = "img/sur710-1.jpg";
        }
        image.style.display = "block";
    });
});
