<?php 

	$id = $_POST['id'];
	$file = $_POST['file'];
	$image = $_POST['image'];
	
	//upload();
	setImage($id, $file, $image);
	
	function setImage($id, $file, $image){
		$library =  simplexml_load_file($file);
		
		$ent = $library->xpath('//entity[@name="'.$id.'"]');
		$ent[0]->image=$image;
		
		header("Content-type: text/xml");
		echo $library->asXML($file);
	}
	/*function upload(){
	
		if($_FILES['file']['name'] != ""){
			copy($_FILES[][], ) or die();
		}
		header('Content-type: image/jpg');
		echo $name = $_FILES['file']['name'];
	}*/
?>