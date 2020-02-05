<?php
header('Access-Control-Allow-Origin: *');

require __DIR__ . '/../../config.php';

$response = array();

$connect = new mysqli(DBHOST, DBUSER, DBPASS, DBNAME);
$sql = "SELECT * FROM `settings`";
$result = $connect->query($sql);

if ($result) {
  $row = $result->fetch_assoc();

  $data = array(
    'email' => $row['email'],
    'password' => $row['password'],
    'profilepic' => $row['profilepic'],
    'presentation' => $row['presentation'],
    'facebook' => $row['facebook'],
    'instagram' => $row['instagram'],
    'phone' => $row['phone'],
    'color' => $row['color']
  );

  $response['status'] = true;
  $response['payload'] = ['data' => $data];
} else {
  $response['status'] = false;
  $response['payload'] = ['message' => $connect->error];
}

header('Content-Type: application/json');
echo json_encode($response);
