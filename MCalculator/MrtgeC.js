function calculateMortgage() {
    let amount = parseFloat(document.getElementById("amount").value);
    let interest = parseFloat(document.getElementById("interest").value);
    let years = parseInt(document.getElementById("years").value);

    if (isNaN(amount) || isNaN(interest) || isNaN(years)) {
        document.getElementById("summary").innerHTML = "Please fill all fields.";
        return;
    }

    let monthlyInterest = (interest / 100) / 12;
    let numberOfPayments = years * 12;

    let monthlyPayment = (amount * monthlyInterest) / 
                         (1 - Math.pow(1 + monthlyInterest, -numberOfPayments));

    let totalPayment = monthlyPayment * numberOfPayments;
    let totalInterest = totalPayment - amount;

    document.getElementById("summary").innerHTML = `
        Monthly Payment: ₱${monthlyPayment.toFixed(2)} <br>
        Total Payment: ₱${totalPayment.toFixed(2)} <br>
        Total Interest: ₱${totalInterest.toFixed(2)}
    `;

    generateAmortizationTable(amount, monthlyInterest, monthlyPayment, numberOfPayments);
}

function generateAmortizationTable(principal, monthlyInterest, monthlyPayment, months) {
    let tableHTML = `
        <table>
            <tr>
                <th>Month</th>
                <th>Payment</th>
                <th>Principal</th>
                <th>Interest</th>
                <th>Balance</th>
            </tr>
    `;

    let balance = principal;
    for (let i = 1; i <= months; i++) {
        let interestPayment = balance * monthlyInterest;
        let principalPayment = monthlyPayment - interestPayment;
        balance -= principalPayment;

        tableHTML += `
            <tr>
                <td>${i}</td>
                <td>₱${monthlyPayment.toFixed(2)}</td>
                <td>₱${principalPayment.toFixed(2)}</td>
                <td>₱${interestPayment.toFixed(2)}</td>
                <td>₱${balance > 0 ? balance.toFixed(2) : "0.00"}</td>
            </tr>
        `;
    }

    tableHTML += "</table>";
    document.getElementById("table-container").innerHTML = tableHTML;
}
