<?php 

	/* header('Content-type: image/jpg');
	if(isset($_GET['file'])){
		$image = $_GET['file'];
	
		echo $image;
	}*/
	
	$tmp_file_name = $_FILES['Filedata']['tmp_name'];
	$ok = move_uploaded_file($tmp_file_name, '/uploads/'.$tmp_file_name);
	
	echo $ok ? "OK" : "FAIL";
?>