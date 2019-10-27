<?php
header('Access-Control-Allow-Origin: *');

require __DIR__ . '/../../db.php';

$response = array();

if (isset($_POST['token']) && isset($_POST['data'])) {
  if ($_POST['token'] == TOKEN) {
    $json = json_decode($_POST['data'], true);
    $category = $json['category'];
    $url = $json['url'];

    $sql = "INSERT INTO `images` (`id`, `position`, `category`, `url`)
            VALUES ('', '', '".$category."', '".$url."')";

    $add = db_query($sql);

    if ($add === false) {
      $response['status'] = false;
      $response['payload'] = array('message' => db_error());
    } else {
      $response['status'] = true;
      $response['payload'] = array('message' => 'image has been added');
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
