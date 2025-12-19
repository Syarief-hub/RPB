<?php
header("Content-Type: application/json");
require_once __DIR__ . '/../db.php';

$method = $_SERVER['REQUEST_METHOD'];
$user_id = 1; // Hardcoded specific user

if ($method === 'GET') {
    // Get Balance
    $sql = "SELECT balance FROM users WHERE id = $user_id";
    $result = $conn->query($sql);
    
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        echo json_encode(["balance" => floatval($row['balance'])]);
    } else {
        echo json_encode(["balance" => 0]);
    }

} elseif ($method === 'POST') {
    // Top Up (Update Balance)
    $input = json_decode(file_get_contents('php://input'), true);
    $amount = floatval($input['amount']);
    
    if ($amount > 0) {
        // Update user balance
        $sql = "UPDATE users SET balance = balance + $amount WHERE id = $user_id";
        
        if ($conn->query($sql) === TRUE) {
            // Record Transaction
            $stmt = $conn->prepare("INSERT INTO transactions (user_id, type, amount, description) VALUES (?, ?, ?, ?)");
            $type = 'topup';
            $desc = 'Top Up Balance';
            $stmt->bind_param("isds", $user_id, $type, $amount, $desc);
            $stmt->execute();
            
            // Get new balance
            $result = $conn->query("SELECT balance FROM users WHERE id = $user_id");
            $row = $result->fetch_assoc();
            
            echo json_encode(["message" => "Top Up Successful", "new_balance" => $row['balance']]);
        } else {
            http_response_code(500);
            echo json_encode(["message" => "Error updating balance"]);
        }
    } else {
        http_response_code(400);
        echo json_encode(["message" => "Invalid amount"]);
    }
}

$conn->close();
?>
