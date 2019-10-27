<?php
header('Access-Control-Allow-Origin: *');

require __DIR__ . '/../../config.php';

session_start();
$response = array();

if (isset($_POST['email']) && isset($_POST['password'])) {
  $connect = new mysqli(DBHOST, DBUSER, DBPASS, DBNAME);

  $email = $connect->real_escape_string($_POST['email']);
  $password = $connect->real_escape_string($_POST['password']);

  $safepass = safepassword($email, $password);

  $query = "SELECT * FROM `settings` WHERE `email`='$email' AND `password`='$safepass'";
  $result = $connect->query($query) or die($connect->error);
  $row = $result->fetch_assoc();

  if ($email == $row['email'] && $safepass == $row['password']) {
    $_SESSION['admin'] = true;
    $_SESSION['token'] = TOKEN;

    $response['status'] = true;
    $response['payload'] = array('message' => TOKEN);
  } else {
    $response['status'] = false;
    $response['payload'] = array('message' => 'invalid email and/or password');
  }
} else {
  $response['status'] = false;
  $response['payload'] = array('message' => 'email & password is required');
}

header('Content-Type: application/json');
echo json_encode($response);

$connect->close();
