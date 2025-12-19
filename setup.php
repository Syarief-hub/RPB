<?php
$host = 'localhost';
$user = 'root';
$pass = '';

// Connect to MySQL server first (no DB selected)
$conn = new mysqli($host, $user, $pass);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Create Database
$sql = "CREATE DATABASE IF NOT EXISTS rpb_finance";
if ($conn->query($sql) === TRUE) {
    echo "Database created successfully<br>";
} else {
    echo "Error creating database: " . $conn->error . "<br>";
}

// Select Database
$conn->select_db("rpb_finance");

// Create Users Table
$sql = "CREATE TABLE IF NOT EXISTS users (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    balance DECIMAL(15,2) DEFAULT 0,
    reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)";

if ($conn->query($sql) === TRUE) {
    echo "Table users created successfully<br>";
    // Insert a default user if not exists
    $check = $conn->query("SELECT * FROM users WHERE id=1");
    if($check->num_rows == 0){
        $conn->query("INSERT INTO users (username, balance) VALUES ('User1', 5000)"); // Start with 5000 like in JS
        echo "Default user created.<br>";
    }
} else {
    echo "Error creating table users: " . $conn->error . "<br>";
}

// Create Goals Table
$sql = "CREATE TABLE IF NOT EXISTS goals (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    user_id INT(6) UNSIGNED,
    name VARCHAR(100) NOT NULL,
    target_amount DECIMAL(15,2) NOT NULL,
    current_amount DECIMAL(15,2) DEFAULT 0,
    category VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)";

if ($conn->query($sql) === TRUE) {
    echo "Table goals created successfully<br>";
} else {
    echo "Error creating table goals: " . $conn->error . "<br>";
}

// Create Transactions Table (Optional for now but good for history)
$sql = "CREATE TABLE IF NOT EXISTS transactions (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    user_id INT(6) UNSIGNED,
    type VARCHAR(20), -- 'topup', 'payment'
    amount DECIMAL(15,2),
    description VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)";

if ($conn->query($sql) === TRUE) {
    echo "Table transactions created successfully<br>";
} else {
    echo "Error creating table transactions: " . $conn->error . "<br>";
}

$conn->close();
?>
