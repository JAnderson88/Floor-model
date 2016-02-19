<?php 

	$id = $_POST['id'];
	$file = $_POST['file'];
	$library =  simplexml_load_file($file);
	$ent = $library->xpath('//entity[@name="'.$id.'"]');
	$x = $ent[0] -> locx;
	$y = $ent[0] -> locy;
	$sx = $ent[0] -> scrollx;
	$sy = $ent[0] -> scrolly;
	$name = $ent[0] -> name;
	$key1 = $ent[0] -> keyword1;
	$key2 = $ent[0] -> keyword2; 
	$key3 = $ent[0] -> keyword3;
	$upc1 = $ent[0] -> upc1;
	$upc2 = $ent[0] -> upc2;
	$upc3 = $ent[0] -> upc3;
	$upc4 = $ent[0] -> upc4;
	$upc5 = $ent[0] -> upc5;
	$upc6 = $ent[0] -> upc6;
	$upc7 = $ent[0] -> upc7;
	$upc8 = $ent[0] -> upc8;
	$wid = $ent[0] -> width;
	$hei = $ent[0] -> height;
	header("Content-type: application/json");
	$data = array($x,$y,$sx,$sy,$name,$key1,$key2,$key3,$upc1,$upc2,$upc3,$upc4,$upc5,$upc6,$upc7,$upc8,$wid, $hei);
	print json_encode($data);
?>