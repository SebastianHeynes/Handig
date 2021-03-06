<?php
header('Access-Control-Allow-Origin: *');

require __DIR__ . '/../../config.php';

$response = array();

if (isset($_POST['data'])) {
  $data = json_decode($_POST['data']);

  if ($data->token === TOKEN) {
    $connect = new mysqli(DBHOST, DBUSER, DBPASS, DBNAME);

    $description = $connect->real_escape_string($data->description);
    $category = $connect->real_escape_string($data->category);
    $url = $connect->real_escape_string($data->url);

    $sql = "INSERT INTO `images` (`id`, `position`, `description`, `category`, `url`)
            VALUES ('', '', '".$description."', '".$category."', '".$url."')";

    if ($connect->query($sql)) {
      $response['status'] = true;
      $response['payload'] = array('message' => 'image has been added');
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
  $response['payload'] = array('message' => 'invalid data');
}

header('Content-Type: application/json');
echo json_encode($response);
