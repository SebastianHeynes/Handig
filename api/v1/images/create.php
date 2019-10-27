<?php
header('Access-Control-Allow-Origin: *');

require __DIR__ . '/../../config.php';

$response = array();

if (isset($_POST['token']) && isset($_POST['data'])) {
  if ($_POST['token'] == TOKEN) {
    $json = json_decode($_POST['data'], true);
    $description = $connect->real_escape_string($json['description']);
    $category = $connect->real_escape_string($json['category']);
    $url = $connect->real_escape_string($json['url']);

    $connect = new mysqli(DBHOST, DBUSER, DBPASS, DBNAME);
    $sql = "INSERT INTO `images` (`id`, `position`, `description`, `category`, `url`)
            VALUES ('', '', '".$description."', '".$category."', '".$url."')";

    if ($connect->query($sql)) {
      $response['status'] = true;
      $response['payload'] = array('message' => 'image has been added');
    } else {
      $response['status'] = false;
      $response['payload'] = array('message' => $connect->error);
    }
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

$connect->close();
