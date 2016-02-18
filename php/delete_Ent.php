<?php

	$id = $_GET['id'];
	$file = $_GET['file'];
	$dom = new DOMDocument();
	$dom -> preserveWhiteSpace = true;
	$dom->load($file);
	$xpath = new DOMXPath($dom);
	$entities = $xpath -> query('//entity[@name="'.$id.'"]');
	if($entities -> length){
		$node = $entities->item(0);
		$node -> parentNode -> removeChild($node);
	}
	
	$dom -> save($file);
	
	
	

?>