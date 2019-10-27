<?php
header('Access-Control-Allow-Origin: *');

require __DIR__ . '/../../db.php';

session_start();
$response = array();

if (isset($_POST['username']) && isset($_POST['password'])) {
  if ($_POST['username'] == USERNAME && $_POST['password'] == PASSWORD) {
    $_SESSION['admin'] = true;
    $_SESSION['token'] = TOKEN;

    $response['status'] = true;
    $response['payload'] = TOKEN;
  } else {
    $response['status'] = false;
    $response['payload'] = array('message' => 'invalid username and/or password');
  }
} else {
  $response['status'] = false;
  $response['payload'] = array('message' => 'username & password is required');
}

header('Content-Type: application/json');
echo json_encode($response);
