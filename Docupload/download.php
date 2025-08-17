<?php
$uploadDir = "uploads/";

// Check if folder exists
if (!is_dir($uploadDir)) {
    echo "⚠ Uploads folder not found!";
    exit;
}

// Scan files in uploads folder
$files = array_diff(scandir($uploadDir), array('.', '..'));
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Download Documents</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="upload-container">
    <h2>📥 Download Documents</h2>

    <?php if (count($files) > 0): ?>
      <ul>
        <?php foreach ($files as $file): ?>
          <li>
            📄 <?php echo htmlspecialchars($file); ?> 
            - <a href="<?php echo $uploadDir . $file; ?>" download>Download</a>
          </li>
        <?php endforeach; ?>
      </ul>
    <?php else: ?>
      <p>No files uploaded yet.</p>
    <?php endif; ?>

    <br>
    <a href="Docupload.html">⬅ Back to Upload Page</a>
  </div>
</body>
</html>
