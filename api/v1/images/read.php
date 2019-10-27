<?php
header('Access-Control-Allow-Origin: *');

require __DIR__ . '/../../db.php';

$data = array();
$response = array();
$result = db_query("SELECT * FROM `images`");

if ($result === false) {
  $response['status'] = false;
  $response['payload'] = ['message' => db_error()];
} else {
  while ($row = mysqli_fetch_assoc($result)) {
    $data[] = array(
      'id' => $row['id'],
      'position' => $row['position'],
      'category' => $row['category'],
      'url' => $row['url']
    );
  }

  $response['status'] = true;
  $response['payload'] = ['data' => $data];
}

header('Content-Type: application/json');
echo json_encode($response);
