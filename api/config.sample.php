<?php
define('DBHOST', 'localhost');
define('DBUSER', '');
define('DBPASS', '');
define('DBNAME', '');

define('SALT', '}!6?|yn/TslJ&h0J[$c9Vm{=#03Q{nDovF|XE)-O~7E(InYssdy@');

function safepassword ($email, $password) {
  $half = strlen(SALT) / 2;
  $salt = substr(SALT, 0, $half);
  $pepper = substr(SALT, $half);

  return hash('sha512', $email . $salt . $password . $pepper);
}
