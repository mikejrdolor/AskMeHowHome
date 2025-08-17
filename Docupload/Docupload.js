document.getElementById("uploadForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let fileInput = document.getElementById("fileInput");
  let fileList = document.getElementById("fileList");

  if (fileInput.files.length > 0) {
    let file = fileInput.files[0];

    // Display file name
    fileList.innerHTML = `<p>✅ Uploaded: <strong>${file.name}</strong></p>`;
  } else {
    fileList.innerHTML = "<p style='color:red;'>⚠ Please select a file.</p>";
  }
});
