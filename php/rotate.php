<?php 

	$id = $_GET['id'];
	$rot = $_GET['rot'];
	$file = $_GET['file'];
	
	$library =  simplexml_load_file($file);
	
	$ent = $library->xpath('//entity[@name="'.$id.'"]');
	$ent[0] -> rot = $rot;
	
	header("Content-type: text/xml");
	echo $library->asXML($file);
?>