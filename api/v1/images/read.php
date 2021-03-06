<?php
header('Access-Control-Allow-Origin: *');

require __DIR__ . '/../../config.php';

$data = array();
$response = array();

$connect = new mysqli(DBHOST, DBUSER, DBPASS, DBNAME);
$sql = "SELECT * FROM `images`";
$result = $connect->query($sql);

if ($result) {
  while ($row = $result->fetch_assoc()) {
    $data[] = array(
      'id' => $row['id'],
      'position' => $row['position'],
      'description' => $row['description'],
      'category' => $row['category'],
      'url' => $row['url']
    );
  }

  $response['status'] = true;
  $response['payload'] = ['data' => $data];
} else {
  $response['status'] = false;
  $response['payload'] = ['message' => $connect->error];
}

header('Content-Type: application/json');
echo json_encode($response);

$connect->close();
