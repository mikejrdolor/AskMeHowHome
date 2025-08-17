document.getElementById("fileInput").addEventListener("change", function() {
  let fileList = document.getElementById("fileList");
  fileList.innerHTML = "";

  if (this.files.length > 0) {
    for (let i = 0; i < this.files.length; i++) {
      let file = this.files[i];
      let li = document.createElement("p");
      li.textContent = `📄 ${file.name}`;
      fileList.appendChild(li);
    }
  }
});
