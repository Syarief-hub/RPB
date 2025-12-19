<?php
header("Content-Type: application/json");
require_once __DIR__ . '/../db.php';

$method = $_SERVER['REQUEST_METHOD'];
$user_id = 1; // Hardcoded specific user for this demo

if ($method === 'GET') {
    // Fetch all goals
    $sql = "SELECT * FROM goals WHERE user_id = $user_id";
    $result = $conn->query($sql);
    
    $goals = [];
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            // Add icon html based on category (logic moved to backend or kept in frontend, 
            // but for simplicity let's rely on frontend to generate icon from category string)
            $goals[] = $row;
        }
    }
    echo json_encode($goals);

} elseif ($method === 'POST') {
    // Create new goal
    $input = json_decode(file_get_contents('php://input'), true);
    
    $name = $input['name'];
    $target = $input['target'];
    $category = $input['category'];
    $current = 0;

    $stmt = $conn->prepare("INSERT INTO goals (user_id, name, target_amount, current_amount, category) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("isdds", $user_id, $name, $target, $current, $category);
    
    if ($stmt->execute()) {
        echo json_encode(["message" => "Goal created successfully", "id" => $stmt->insert_id]);
    } else {
        http_response_code(500);
        echo json_encode(["message" => "Error creating goal"]);
    }
    $stmt->close();
}

elseif ($method === 'PUT') {
    // Update goal (Edit or Top Up/Withdraw)
    $input = json_decode(file_get_contents('php://input'), true);
    
    $action = isset($input['action']) ? $input['action'] : 'edit';
    $goal_id = $input['id'];

    if ($action === 'edit') {
        $name = $input['name'];
        $target = $input['target_amount'];
        
        $stmt = $conn->prepare("UPDATE goals SET name = ?, target_amount = ? WHERE id = ? AND user_id = ?");
        $stmt->bind_param("sdii", $name, $target, $goal_id, $user_id);
        
        if ($stmt->execute()) {
            echo json_encode(["message" => "Goal updated successfully"]);
        } else {
             http_response_code(500);
             echo json_encode(["message" => "Error updating goal"]);
        }
        $stmt->close();

    } elseif ($action === 'topup' || $action === 'withdraw') {
        $amount = $input['amount']; // Amount to add (positive) or remove (negative, handled by logic)
        
        // simple logic: direct update. In real app, transactional with wallet balance check.
        // For this demo: we assume wallet logic is separate or we deduct from wallet here?
        // Let's keep it simple: Just update goal balance. 
        // Ideally: TopUp = Wallet - Amount, Goal + Amount.
        // Withdraw = Wallet + Amount, Goal - Amount.
        
        // Let's implement basic transaction logic if possible, or just goal update for now to unblock UI.
        // Re-reading user requirement: "Convert to PHP and MySQL". 
        // Let's try to be robust: Update Goal Amount.
        
        // 1. Get current goal logic
        $check = $conn->query("SELECT current_amount FROM goals WHERE id = $goal_id AND user_id = $user_id");
        if ($check->num_rows > 0) {
            $curr = $check->fetch_assoc()['current_amount'];
            $new_amount = ($action === 'topup') ? ($curr + $amount) : ($curr - $amount);
            
            if ($action === 'withdraw' && $new_amount <= 0) {
                // DELETE GOAL if balance is 0 or less (Full Withdrawal)
                $stmt = $conn->prepare("DELETE FROM goals WHERE id = ?");
                $stmt->bind_param("i", $goal_id);
                
                if ($stmt->execute()) {
                    echo json_encode(["message" => "Goal deleted (full withdrawal)", "status" => "deleted"]);
                } else {
                    http_response_code(500);
                    echo json_encode(["message" => "Error deleting goal"]);
                }
            } else {
                // UPDATE Balance
                if ($new_amount < 0) $new_amount = 0;
    
                $stmt = $conn->prepare("UPDATE goals SET current_amount = ? WHERE id = ?");
                $stmt->bind_param("di", $new_amount, $goal_id);
                
                if ($stmt->execute()) {
                    echo json_encode(["message" => "Balance updated", "new_balance" => $new_amount, "status" => "updated"]);
                } else {
                    http_response_code(500);
                    echo json_encode(["message" => "Error updating balance"]);
                }
            }
        }
    }

} elseif ($method === 'DELETE') {
    $input = json_decode(file_get_contents('php://input'), true);
    $goal_id = $input['id'];
    
    $stmt = $conn->prepare("DELETE FROM goals WHERE id = ? AND user_id = ?");
    $stmt->bind_param("ii", $goal_id, $user_id);
    
    if ($stmt->execute()) {
        echo json_encode(["message" => "Goal deleted successfully"]);
    } else {
        http_response_code(500);
        echo json_encode(["message" => "Error deleting goal"]);
    }
}

$conn->close();
?>
