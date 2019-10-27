<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

define('DBHOST', 'localhost');
define('DBUSER', '');
define('DBPASS', '');
define('DBNAME', '');

define('TOKEN', '');
define('SALT', '');

function safepassword ($email, $password) {
  $half = strlen(SALT) / 2;
  $salt = substr(SALT, 0, $half);
  $pepper = substr(SALT, $half);

  return hash('sha512', $email . $salt . $password . $pepper);
}
