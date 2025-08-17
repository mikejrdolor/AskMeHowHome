<?php
// Create uploads folder if not exists
$uploadDir = "uploads/";
if (!is_dir($uploadDir)) {
    mkdir($uploadDir, 0777, true);
}

if (isset($_FILES['documents'])) {
    $files = $_FILES['documents'];
    $totalFiles = count($files['name']);

    for ($i = 0; $i < $totalFiles; $i++) {
        $fileName = basename($files['name'][$i]);
        $targetPath = $uploadDir . $fileName;

        if (move_uploaded_file($files['tmp_name'][$i], $targetPath)) {
            echo "✅ Uploaded: " . htmlspecialchars($fileName) . "
<br>";
        } else {
            echo "❌ Failed to upload: " . htmlspecialchars($fileName) . "
<br>";
        }
    }
} else {
    echo "⚠ No files uploaded.";
}
?>
