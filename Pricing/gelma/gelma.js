const buttons = document.querySelectorAll(".option-btn");
const image = document.getElementById("paymentImage");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const option = button.getAttribute("data-option");

        if (option === "downpayment20") {
            image.src = "img/twenty.png";
        } else if (option === "downpayment10") {
            image.src = "img/ten.png";
        } else if (option === "spotcash") {
            image.src = "img/cash.png";
        }
        image.style.display = "block";
    });
});
