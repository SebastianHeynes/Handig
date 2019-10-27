<?php
header('Access-Control-Allow-Origin: *');

require __DIR__ . '/../../db.php';

$response = array();

if (isset($_POST['signout'])) {
  unset($_SESSION['admin']);
  unset($_SESSION['token']);

  session_destroy();

  $response['status'] = true;
  $response['payload'] = array('message' => 'successfully signed out');

  exit;
} else {
  $response['status'] = false;
  $response['payload'] = array('message' => 'username & password is required');
}

header('Content-Type: application/json');
echo json_encode($response);
