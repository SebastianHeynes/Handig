<?php
if (isset($_POST['signout'])) {
  unset($_SESSION['admin']);
  session_destroy();
  exit;
}
