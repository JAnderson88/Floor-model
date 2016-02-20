<?php
require 'php/connect.php'; 
require 'php/core.php';

if (loggedin()) {
	header('Location: php/start2.php');
	$firstname = getuserfield('firstname');
	$lastname = getuserfield('lastname');
	//echo 'You\'re logged in, '.$firstname.' '.$lastname.' <a href="logout.php">Log out</a>';
} else {
	include 'php/loginform.php';
}
?>