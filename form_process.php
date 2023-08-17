<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    $to = "lyongaming738@gmail.com"; // Ganti dengan alamat email Anda
    $subject = "New Contact Form Submission";
    $headers = "From: $email";
    
    if (mail($to, $subject, $message, $headers)) {
        echo "Success"; // Mengembalikan pesan ke JavaScript jika berhasil dikirim
    } else {
        echo "Error"; // Mengembalikan pesan ke JavaScript jika terjadi kesalahan
    }
}
?>
