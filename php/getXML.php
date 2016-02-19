<?php 
	
	$file = $_POST['file'];
	
	$xml = new DOMDocument();
	$xml -> load($file);
	
	$ents = $xml -> getElementsByTagName("entity");
	$c = $ents -> length;
	$data = array();

	
	for($i = 0; $i <= $c - 1; $i++){
		
		$reffloor = $ents -> item($i) -> getElementsByTagName("floor");
		$refwidth = $ents -> item($i) -> getElementsByTagName("width");
		$refheight = $ents -> item($i) -> getElementsByTagName("height");
		$reflocx = $ents -> item($i) -> getElementsByTagName("locx");
		$reflocy = $ents -> item($i) -> getElementsByTagName("locy");
		$refscrollx = $ents -> item($i) -> getElementsByTagName("scrollx");
		$refscrolly = $ents -> item($i) -> getElementsByTagName("scrolly");
		$refrot = $ents -> item($i) -> getElementsByTagName("rot");
		$name = $ents -> item($i) -> getAttribute("name");
		$floor = $reffloor -> item(0) -> nodeValue;
		$width = $refwidth -> item(0) -> nodeValue;
		$height = $refheight -> item(0) -> nodeValue;
		$locx = $reflocx -> item(0) -> nodeValue;
		$locy = $reflocy -> item(0) -> nodeValue;
		$scrollx = $refscrollx -> item(0) -> nodeValue;
		$scrolly = $refscrolly -> item(0) -> nodeValue;
		$rot = $refrot -> item(0) -> nodeValue;
		
		$data[$i] = array($name, $floor, $width, $height, $locx, $locy, $scrollx, $scrolly, $rot);
	}
	$data[$c] = $c;
	header("Content-type: application/json");
	print json_encode($data);
	
?>