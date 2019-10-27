<?php
header('Access-Control-Allow-Origin: *');

require __DIR__ . '/../../config.php';

$response = array();

if (isset($_POST['id'])) {
  $connect = new mysqli(DBHOST, DBUSER, DBPASS, DBNAME);
  $id = $connect->real_escape_string($_POST['id']);
  $result = db_query("DELETE FROM `images` WHERE id=$id");

  if ($connect->query($delete) === TRUE) {
    $response['status'] = true;
    $response['payload'] = ['message' => 'successfully deleted'];
  } else {
    $response['status'] = false;
    $response['payload'] = ['message' => $connect->error];
  }
} else {
  $response['status'] = false;
  $response['payload'] = ['message' => 'no id provided'];
}

header('Content-Type: application/json');
echo json_encode($response);

$connect->close();
