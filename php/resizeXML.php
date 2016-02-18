<?php 

	$id = $_GET['getId'];
	$file = $_GET['file'];
	$w = $_GET['wid'];
	$h = $_GET['hei'];
	
	resizeXML($id, $file, $w, $h);
	
	function resizeXML($id, $file, $w, $h){
	
		$library =  simplexml_load_file($file);
		
		$ent = $library->xpath('//entity[@name="'.$id.'"]');
		$ent[0]->width = $w;
		$ent[0]->height = $h;
		
		header("Content-type: text/xml");
		echo $library->asXML($file);
	}
?>