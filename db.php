<?php
$host = 'localhost';
$user = 'root';
$pass = ''; // Default XAMPP password
$db_name = 'rpb_finance';

// Create connection
$conn = new mysqli($host, $user, $pass, $db_name);

// Check connection
if ($conn->connect_error) {
    // If database doesn't exist, try to connect without db and create it (handled in setup.php usually, but here we assume db might exist)
    // For simplicity, let's assume we need to handle connection failure gracefully or allow setup.php to run first.
    die("Connection failed: " . $conn->connect_error);
}
?>
