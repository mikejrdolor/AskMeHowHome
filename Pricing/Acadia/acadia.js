document.getElementById("unitSelect").addEventListener("change", function() {
  let selectedUnit = this.value;
  document.querySelectorAll(".unitTable").forEach(section => {
    section.classList.add("hidden");
  });
  document.getElementById(selectedUnit).classList.remove("hidden");
});

function printPage() {
  window.print();
}

function downloadPDF() {
  const element = document.getElementById("computationContainer");
  const opt = {
    margin: 1,
    filename: 'computation.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 18 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  };
  html2pdf().from(element).set(opt).save();
}
