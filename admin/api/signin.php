<?php
session_start();
$response = array();

if (isset($_POST['username']) && isset($_POST['password'])) {
  if ($_POST['username'] == 'albin' && $_POST['password'] == 'handig') {
    $token = sha1('albin-handig');

    $_SESSION['admin'] = true;
    $_SESSION['token'] = $token;

    $response['status'] = true;
    $response['payload'] = $token;
  } else {
    $response['status'] = false;
    $response['payload'] = array('message' => 'invalid username and password');
  }
} else {
  $response['status'] = false;
  $response['payload'] = array('message' => 'username & password is required');
}

header('Content-Type: application/json');
echo json_encode($response);
