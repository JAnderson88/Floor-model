<?php 

	$doc = new DOMDocument();
	$doc -> formatOutput = true;
	$getId = $_GET['getId'];
	$identity = $_GET['ident'];
	$w = $_GET['wid'];
	$width = strval($w);
	$h = $_GET['hei'];
	$height = strval($h);
	if(isset($_GET['file'])){
	
		$file = $_GET['file'];
		if($xml = file_get_contents($file)){
			
			$doc -> loadXML($xml, LIBXML_NOBLANKS);
			$root = $doc -> getElementsByTagName('main')->item(0);
			$up = $doc -> getElementsByTagName('iden')->item(0);
			$up -> nodeValue = $identity + 1;
			$ent = $doc -> createElement('entity');
			$id = $doc -> createAttribute('name');
			$id -> value = $getId;
			$name = $doc -> createElement('name');
			$name_in = $doc -> createTextNode($getId);
			$name -> appendChild($name_in);
			$floor = $doc -> createElement('floor');
			$w = $doc -> createElement('width');
			$w_in = $doc -> createTextNode($width);
			$w -> appendChild($w_in);
			$h = $doc -> createElement('height');
			$h_in = $doc -> createTextNode($height);
			$h -> appendChild($h_in);
			$x = $doc -> createElement('locx');
			$y = $doc -> createElement('locy');
			$scrollx = $doc -> createElement('scrollx');
			$scrolly = $doc -> createElement('scrolly');
			$image = $doc -> createElement('image');
			$rot = $doc -> createElement('rot');
			$ent -> appendChild($floor);
			$ent -> appendChild($w);
			$ent -> appendChild($h);
			$ent -> appendChild($x);
			$ent -> appendChild($y);
			$ent -> appendChild($scrollx);
			$ent -> appendChild($scrolly);
			$ent -> appendChild($rot);
			$ent -> appendChild($id);
			$ent -> appendChild($name);
			$ent -> appendChild($image);
			$root -> appendChild($ent);
		}
		echo $doc -> save($file);
	}
?>