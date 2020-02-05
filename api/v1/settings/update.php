<?php
header('Access-Control-Allow-Origin: *');

require __DIR__ . '/../../config.php';

$response = array();

if (isset($_POST['data'])) {
  $data = json_decode($_POST['data']);

  if ($data->token === TOKEN) {
    $connect = new mysqli(DBHOST, DBUSER, DBPASS, DBNAME);

    $profilepic = $connect->real_escape_string($data->profilepic);
    $presentation = $connect->real_escape_string($data->presentation);
    $facebook = $connect->real_escape_string($data->facebook);
    $instagram = $connect->real_escape_string($data->instagram);
    $phone = $connect->real_escape_string($data->phone);
    $color = $connect->real_escape_string($data->color);

    $response['status'] = true;
    $response['payload'] = array('message' => $profilepic);
    
    $sql = "UPDATE `settings` SET `profilepic`='$profilepic', `presentation`='$presentation', `facebook`='$facebook', `instagram`='$instagram', `phone`='$phone', `color`='$color' WHERE `id`=1";
    $result = $connect->query($sql) or die($connect->error);

    if ($result) {
      $response['status'] = true;
      $response['payload'] = array('message' => 'settings updated');
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
