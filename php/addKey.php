<?php 

	$doc = new DOMDocument();
	$doc -> formatOutput = true;

	$getId = $_GET['id'];
	$file = $_GET['file'];
	$count = $_GET['tick'] + 1;
	
	if($xml = file_get_contents($file)){
			$doc -> loadXML($xml, LIBXML_NOBLANKS);
			
			$xpath = new Domxpath($doc);
			
			$entities = $xpath -> query('//entity[@name="'.$getId.'"]');
			$in = 'keyword'.$count;
			$ent = $doc -> createElement($in);
			$refNode = $entities -> item(0);
			$refNode -> appendChild($ent);

	
	}
	header('Content-Type: text/plain');
	echo $doc -> save($file);
?>