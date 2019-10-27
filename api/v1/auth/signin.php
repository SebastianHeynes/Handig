<?php
header('Access-Control-Allow-Origin: *');

require __DIR__ . '/../../config.php';

session_start();
$response = array();

if (isset($_POST['data'])) {
  $data = json_decode($_POST['data']);
  $connect = new mysqli(DBHOST, DBUSER, DBPASS, DBNAME);

  $email = $connect->real_escape_string($data->email);
  $password = $connect->real_escape_string($data->password);

  $safepass = safepassword($email, $password);

  $query = "SELECT * FROM `settings` WHERE `email`='$email' AND `password`='$safepass'";
  $result = $connect->query($query) or die($connect->error);
  $row = $result->fetch_assoc();

  if ($email == $row['email'] && $safepass == $row['password']) {
    $_SESSION['admin'] = true;
    $_SESSION['token'] = TOKEN;

    $response['status'] = true;
    $response['payload'] = array('token' => TOKEN);
  } else {
    $response['status'] = false;
    $response['payload'] = array('message' => 'email or password doesnt match');
  }

  $connect->close();
} else {
  $response['status'] = false;
  $response['payload'] = array('message' => 'email & password is required');
}

header('Content-Type: application/json');
echo json_encode($response);
