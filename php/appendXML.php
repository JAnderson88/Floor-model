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
			$rot = $doc -> createElement('rot');
			$key1 = $doc -> createElement('keyword1');
			$key2 = $doc -> createElement('keyword2');
			$key3 = $doc -> createElement('keyword3');
			$upcs1 = $doc -> createElement('upc1');
			$upcs2 = $doc -> createElement('upc2');
			$upcs3 = $doc -> createElement('upc3');
			$upcs4 = $doc -> createElement('upc4');
			$upcs5 = $doc -> createElement('upc5');
			$upcs6 = $doc -> createElement('upc6');
			$upcs7 = $doc -> createElement('upc7');
			$upcs8 = $doc -> createElement('upc8');
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
			$ent -> appendChild($upcs1);
			$ent -> appendChild($upcs2);
			$ent -> appendChild($upcs3);
			$ent -> appendChild($upcs4);
			$ent -> appendChild($upcs5);
			$ent -> appendChild($upcs6);
			$ent -> appendChild($upcs7);
			$ent -> appendChild($upcs8);
			$ent -> appendChild($key1);
			$ent -> appendChild($key2);
			$ent -> appendChild($key3);
			$root -> appendChild($ent);
		}
		echo $doc -> save($file);
	}
?>