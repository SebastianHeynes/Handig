<?php
header('Access-Control-Allow-Origin: *');

require __DIR__ . '/../../config.php';

$response = array();

if (isset($_POST['data'])) {
  $data = json_decode($_POST['data']);

  if ($data->token === TOKEN) {
    $connect = new mysqli(DBHOST, DBUSER, DBPASS, DBNAME);

    $id = $connect->real_escape_string($data->id);
    $position = $connect->real_escape_string($data->position);
    $description = $connect->real_escape_string($data->description);
    $category = $connect->real_escape_string($data->category);
    $url = $connect->real_escape_string($data->url);
    
    $sql = "UPDATE `images` SET `position`='$position', `description`='$description', `category`='$category', `url`='$url' WHERE `id`='$id'";

    if ($connect->query($sql)) {
      $response['status'] = true;
      $response['payload'] = array('message' => 'image updated');
    } else {
      $response['status'] = false;
      $response['payload'] = array('message' => $connect->error);
    }

    $connect->close();
  } else {
    $response['status'] = false;
    $response['payload'] = array('message' => 'invalid token');
  }
} else {
  $response['status'] = false;
  $response['payload'] = array('message' => 'data is required');
}

header('Content-Type: application/json');
echo json_encode($response);
