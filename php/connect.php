<?php

	$mysql_host = '127.0.0.1';
	$mysql_user = 'root';
	$mysql_pass = '';
	
	$mysql_db = 'floor';
	$conn = mysql_connect($mysql_host, $mysql_user, $mysql_pass);	
	if (!mysql_connect($mysql_host, $mysql_user, $mysql_pass)||!mysql_select_db($mysql_db)) {
		die(mysql_error());
	
	}

?> 