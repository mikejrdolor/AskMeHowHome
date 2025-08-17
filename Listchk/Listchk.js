document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tabs button");
  const contents = document.querySelectorAll(".tab-content");
  const checkboxes = document.querySelectorAll("input[type=checkbox]");
  const progressBar = document.getElementById("progress-bar");

  // Tab switching
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      contents.forEach(c => c.classList.add("hidden"));
      document.getElementById(tab.dataset.tab).classList.remove("hidden");
    });
  });

  // Progress bar update
  function updateProgress() {
    const total = checkboxes.length;
    const checked = document.querySelectorAll("input[type=checkbox]:checked").length;
    const percent = Math.round((checked / total) * 100);
    progressBar.style.width = percent + "%";
  }
  checkboxes.forEach(cb => cb.addEventListener("change", updateProgress));

  // Show pending only
  document.getElementById("show-pending").addEventListener("click", () => {
    checkboxes.forEach(cb => {
      cb.closest("li").style.display = cb.checked ? "none" : "block";
    });
  });

  // Summary
  document.getElementById("summary").addEventListener("click", () => {
    const checked = Array.from(checkboxes).filter(cb => cb.checked).length;
    alert(`You have completed ${checked} out of ${checkboxes.length} requirements.`);
  });

  // Print
  document.getElementById("print").addEventListener("click", () => {
    window.print();
  });

  // Reset
  document.getElementById("reset").addEventListener("click", () => {
    checkboxes.forEach(cb => cb.checked = false);
    updateProgress();
  });

  // Download as PDF
  document.getElementById("download").addEventListener("click", () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.text("Bank Loan Requirements Checklist", 10, 10);

    let y = 20;
    contents.forEach(section => {
      const title = section.querySelector("h2").innerText;
      doc.text(title, 10, y);
      y += 8;

      section.querySelectorAll("li").forEach(li => {
        if (y > 280) { doc.addPage(); y = 20; }
        const status = li.querySelector("input").checked ? "[✔]" : "[ ]";
        doc.text(`${status} ${li.innerText}`, 15, y);
        y += 7;
      });

      if (y > 270) { doc.addPage(); y = 20; }
      y += 5;
    });

    doc.save("Loan_Checklist.pdf");
  });

  updateProgress();
});
