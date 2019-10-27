<?php
require __DIR__ . '/config.php';

function db () {
  static $connection;
  
  if (!isset($connection)) {
    $connection = mysqli_connect(DBHOST, DBUSER, DBPASS, DBNAME);
  }

  if ($connection === false) {
    return mysqli_connect_error();
  }

  return $connection;
}

function db_query ($query) {
  $connection = db();
  $result = mysqli_query($connection, $query);
  return $result;
}

function db_error () {
  $connection = db();
  return mysqli_error($connection);
}
