<?php
header('Access-Control-Allow-Origin: *');

require __DIR__ . '/db.php';

$data = array();
$response = array();
$result = db_query("SELECT * FROM `ah_feed`");

if ($result === false) {
  $response['status'] = false;
  $response['payload'] = ['message' => db_error()];
} else {
  while ($row = mysqli_fetch_assoc($result)) {
    $data[] = array(
      'id' => $row['id'],
      'category' => $row['category'],
      'picture' => $row['picture'],
      'thumb' => $row['thumb']
    );
  }

  $response['status'] = true;
  $response['payload'] = ['data' => $data];
}

header('Content-Type: application/json');
echo json_encode($response);
