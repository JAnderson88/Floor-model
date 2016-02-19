<?php 

		$id = $_POST['id'];
		$x = $_POST['x'];
		$y = $_POST['y'];
		$scrollx = $_POST['sx'];
		$scrolly = $_POST['sy'];
		$file = $_POST['file'];
		$floor = $_POST['floor'];
		setposition($x, $y, $scrollx, $scrolly, $file, $id, $floor);
	
	
	function setposition($x, $y, $scrollx, $scrolly, $file, $id, $floor){
		
		$library =  simplexml_load_file($file);
		
		$ent = $library->xpath('//entity[@name="'.$id.'"]');
		$ent[0]->floor = $floor;
		$ent[0]->locx = $x;
		$ent[0]->locy = $y;
		$ent[0]->scrollx = $scrollx;
		$ent[0]->scrolly = $scrolly;
		
		header("Content-type: text/xml");
		echo $library->asXML($file);
	}
?>