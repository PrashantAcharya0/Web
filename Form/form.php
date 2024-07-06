<?php 
$server = "localhost";
$server_username = "root";
$server_password = "root";
$database = "Web";


// Retrieve POST data
$u_name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$gender = $_POST['Gender'];
$country = $_POST['country'];
$address = $_POST['address'];
$skills= implode(',',$_POST['skills']);

// Establish a connection to the database
$connect = new mysqli($server, $server_username, $server_password, $database);

// Check the connection
if ($connect->connect_error) {
    die("Connection failed: " . $connect->connect_error);
}

// Prepare an SQL statement for execution
$sql = "INSERT INTO Info (name, phone, email, gender, address, skills, country) VALUES (?, ?, ?, ?, ?, ?, ?)";
$stmt = $connect->prepare($sql);

if ($stmt) {
    // Bind parameters to the SQL query
    $stmt->bind_param("sisssss", $u_name, $phone, $email, $gender, $address, $skills, $country);
    
    // Execute the prepared statement
    if ($stmt->execute()) {
        echo "Inserted";
    } else {
        echo "Error: " . $stmt->error;
    }
    
    // Close the statement
    $stmt->close();
} else {
    echo "Error: " . $connect->error;
}

// Close the database connection
$connect->close();
?>