<?php 

	$id = $_POST['id'];
	$file = $_POST['file'];
	$num = intval($_POST['num']);
	$library =  simplexml_load_file($file);
	$ent = $library->xpath('//entity[@name="'.$id.'"]');
	$one = 'upc'.($num - 15);
	$two = 'upc'.($num - 14);
	$three = 'upc'.($num - 13);
	$four = 'upc'.($num - 12);
	$five = 'upc'.($num - 11);
	$six = 'upc'.($num - 10);
	$seven = 'upc'.($num - 9);
	$eight = 'upc'.($num - 8);
	$upc1 = $ent[0] -> $one;
	$upc2 = $ent[0] -> $two;
	$upc3 = $ent[0] -> $three;
	$upc4 = $ent[0] -> $four;
	$upc5 = $ent[0] -> $five;
	$upc6 = $ent[0] -> $six;
	$upc7 = $ent[0] -> $seven;
	$upc8 = $ent[0] -> $eight;
	header("Content-type: application/json");
	$data = array($upc1,$upc2,$upc3,$upc4,$upc5,$upc6,$upc7,$upc8);
	//$data = array($one, $two, $three, $four, $five, $six, $seven, $eight);
	print json_encode($data);
	
?>