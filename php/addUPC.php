<?php 

	$doc = new DOMDocument();
	$doc -> formatOutput = true;

	$getId = $_GET['id'];
	$file = $_GET['file'];
	$count = intval($_GET['reg']);
	
	if($xml = file_get_contents($file)){
		$doc -> loadXML($xml, LIBXML_NOBLANKS);
			
		$xpath = new Domxpath($doc);
		$check = 'upc'.($count+1);
		$ent = $xpath -> query('//entity[@name="'.$getId.'"]');
		$c = $ent -> item(0);
		$g = $c -> getElementsByTagName($check);
		if($g -> length == 0){
			$entities = $xpath -> query('//entity[@name="'.$getId.'"]/keyword1');
			$t = array();
			for($i = 0; $i < 8; $i++){
				$in = 'upc'.($count + $i +1);
				$t[$i] = $doc -> createElement($in);
				$refNode = $entities -> item(0);
				$refNode -> parentNode -> insertBefore($t[$i], $refNode);
			}
		header('Content-Type: text/plain');
		echo $doc -> save($file);
		} else {
			echo 'true';
		}
	}
?>