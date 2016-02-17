<?php 
	require 'core.php';
	
	$username = $_SESSION['user'];
	$sel = "SELECT `id` FROM `users` WHERE `username`='$username'";
	$grab_user = mysql_query($sel);
	$fetch_user = mysql_fetch_row($grab_user);
	$id = $fetch_user[0];
	$row = "SELECT `name`,`save`,`number`, `Floor1`, `Floor2`, `Floor3`, `Floor4`, `Floor5`, `image1`,`image2`,`image3`,`image4`,`image5`,`max_w_1`,`max_h_1`,`xadj`,`yadj`,`a`,`b`,`c`,`d`,`e`,`f` FROM `floor` WHERE `Number`= '$id'";
	$but = "SELECT `button1`, `button2`, `button3`, `button4`, `button5`, `button6`, `button7`, `button8`, `button9`, `button10`, `button11`, `button12`, `button13`, `button14`, `button15` FROM `floor` WHERE `Number` = '$id'";
	$data = mysql_query($row);
	$select = mysql_query($but);
	$result = mysql_fetch_assoc($data);
	$butt = mysql_fetch_assoc($select);
	$numFloors = 0;
	$button = array_values($butt);
	
	if ($result['Floor1'] == '1' && $result['Floor2'] == '1' && $result['Floor3'] == '1' && $result['Floor4'] == '1' && $result['Floor5'] == '1'){
		$numFloors = 5;
	} else if ($result['Floor1'] == '1' && $result['Floor2'] == '1' && $result['Floor3'] == '1' && $result['Floor4'] == '1' && $result['Floor5'] == '0'){
		$numFloors = 4;
	} else if ($result['Floor1'] == '1' && $result['Floor2'] == '1' && $result['Floor3'] == '1' && $result['Floor4'] == '0' && $result['Floor5'] == '0'){
		$numFloors = 3;
	} else if($result['Floor1'] == '1' && $result['Floor2'] == '1' && $result['Floor3'] == '0' && $result['Floor4'] == '0' && $result['Floor5'] == '0'){
		$numFloors = 2;
	} else if($result['Floor1'] == '1' && $result['Floor2'] == '0' && $result['Floor3'] == '0' && $result['Floor4'] == '0' && $result['Floor5'] == '0'){
		$numFloors = 1;
	}
	

?>