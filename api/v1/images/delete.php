<?php
header('Access-Control-Allow-Origin: *');

require __DIR__ . '/../../config.php';

$response = array();

if (isset($_POST['data'])) {
  $data = json_decode($_POST['data']);

  if ($data->token === TOKEN) {
    $connect = new mysqli(DBHOST, DBUSER, DBPASS, DBNAME);
    $id = $connect->real_escape_string($data->id);

    $sql = "DELETE FROM `images` WHERE id=$id";

    if ($connect->query($sql)) {
      $response['status'] = true;
      $response['payload'] = ['message' => 'successfully deleted'];
    } else {
      $response['status'] = false;
      $response['payload'] = ['message' => $connect->error];
    }

    $connect->close();
  } else {
    $response['status'] = false;
    $response['payload'] = ['message' => 'invalid token'];
  }
} else {
  $response['status'] = false;
  $response['payload'] = ['message' => 'no id provided'];
}

header('Content-Type: application/json');
echo json_encode($response);
