<?php
	
	if(isset($_GET['id'])){
		
		$name = $_GET['nam'];
		$tick = $_GET['tick'];
		$id = $_GET['id'];
		$file = $_GET['file'];
		$upcs = $_GET['upcs'];
		$key = $_GET['key'];
		$size = $_GET['size'];
	
		submit($name, $tick, $id, $file, $upcs, $key, $size);
	}
	
	function submit($name, $tick, $id, $file, $upcs, $key, $size){
		
		$library =  simplexml_load_file($file);
		$ent = $library->xpath('//entity[@name="'.$id.'"]');
		$ent[0]->name = $name;
		for($i = 0; $i <= $tick-1; $i++){
			$in = 'keyword'.($i + 1);
			$ent[0]->$in = $key[$i];
		}

		for($i = 0; $i <= 7; $i++){
			$in = 'upc'.($size + $i);
			$ent[0]->$in = $upcs[$i];
		}
		
		header("Content-type: text/xml");
		echo $library->asXML($file);
		
	}
?>