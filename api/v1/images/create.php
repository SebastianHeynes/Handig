<?php
header('Access-Control-Allow-Origin: *');

require __DIR__ . '/../../db.php';

if (isset($_POST['token']) && isset($_POST['data'])) {
  if ($_POST['token'] == TOKEN) {
    $json = json_decode($_POST['data'], true);
    $category = $json['category'];
    $picture = $json['picture'];

    $sql = "INSERT INTO `ah_feed` (`id`, `position`, `category`, `picture`, `thumb`, `date`)
            VALUES ('', '', '".$category."', '".$picture."', '".$picture."', '".NOW."')";

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
