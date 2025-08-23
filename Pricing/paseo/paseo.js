function printTable() {
  window.print();
}

function downloadPDF() {
  const element = document.querySelector('.container');
  const opt = {
    margin:       0.5,
    filename:     'Paseo_Verde_At_Real.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
  };
  html2pdf().from(element).set(opt).save();
}
