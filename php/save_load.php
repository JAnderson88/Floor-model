<?php

	require_once 'php/connect.php';
	require_once 'php/query.php';
	
	$user = $_SESSION['user'];
	$name = $result['Name'];
	$num = $result['Number'];
	$write = $name.$num.$user;
	$file = $write.'.xml';
	if($result['save']== ''){
		if(file_exists($file)){
			$query = "UPDATE `floor` SET `save`='$file' WHERE `Number`= '$id'";
			mysql_query($query);
			$id = getId($file);
		} else {
			$xml = new DOMDocument('1.0', 'utf-8');
			$element = $xml -> createElement('main');
			$id = $xml -> createElement('iden');
			$in = $xml -> createTextNode('1');
			$id -> appendChild($in);
			$element -> appendChild($id);
			$xml->appendChild($element);
			$xml -> save($file);
		}

	} else if(!$result['save'] == ''){
		$id = getId($file);
	}
	function getId($file){
		
		$library =  simplexml_load_file($file);
		$iden = $library->xpath('//iden');
		return $iden[0];
	}
?>