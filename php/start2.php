<!Doctype html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title></title>

	<?php 
	require '/home/ubuntu/workspace/php/connect.php';  
	include '/home/ubuntu/workspace/php/query.php';
	include '/home/ubuntu/workspace/php/save_load.php';
	include '/home/ubuntu/workspace/php/submit.php';
	
	
	?>

	<link rel="stylesheet" type="text/css" href="/css/floor2.css">

</head>
<body>

	<div id="banner">
		<div id="logo"><img src="/images/mapa.png" ></div> 
		<div id="tab"></div>
	</div>
	<div id="container">
		<div class="map" id="map">
			<div id="holder"></div> 
			<div id="up" onClick="mapMoveUp()"><img src="/images/arrow_up.png" width = "36" height="54" alt="arrow_up"></div>
			<div id="down" onClick="mapMoveDown()"><img src="/images/arrow_down.png" width = "36" height="54"></div>
			<div id="left" onClick="mapMoveLeft()"><img src="/images/arrow_left.png" width = "54" height="36"></div>
			<div id="right" onClick="mapMoveRight()"><img src="/images/arrow_right.png" width = "54" height="36"></div>
			<div id="arrow_cont">
				<div id="count_clock" height="40"><img src="/images/arrow_rot_1.png"></div>
				<div id="glass" height="40"><img src ="/images/glass.png"></div>
				<div id="zoom_up" height="22"><img src ="/images/up.png"></div>
				<div id="zoom"></div>
				<div id="zoom_down" height="22"><img src ="/images/down.png"></div>
				<div id="clock" height="40"><img src="/images/arrow_rot_2.png"></div>
			</div>
		</div>
		<div id="creator">
			<div id="w_h"> Width:  <input type="number" name="width" min="20" max="200" value="20"> <br> Height: <input type="number" name="height" min="20" max="200" value="20"></div>
		</div>
		<div id="stat">
			<div id="ident" class="unsel">
			</div>
			<div id="stat_hold" class="unsel">
			</div>
		</div>
	</div>
	<div id="left_pad"></div>
	<div id="right_pad"></div>
	<div id="footer"><a href="/home/ubuntu/workspace/php/logout.php">Log out</a></div>
	

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
	<script type="text/javascript" src="/js/floor2.js"></script>
	<script type="text/javascript" src="/js/ui/jquery-ui.js"></script>
	<script type="text/javascript" src="/js/jquery-animate-css-rotate-scale.js"></script>
	<!--<script type="text/javascript" src="/home/ubuntu/workspace/js/upclick-min.js"></script>-->
	
	<script>
		on = new Array();
		on[0] = "true";
		on[1] = "false";
		on[2] = "false";
		on[3] = "false";
		on[4] = "false";
		iden = parseInt("<?php echo $id ?>");
		mapX = 0;
		mapY = 0;
		holder = "<?php echo$file ?>";
		var butt = new Array();
		high = '';
		butt = <?php echo json_encode($button)?>;
		zoom = 1;
		var button = buttonConfirmation(butt);
		gameSetup(button);
		buttonSetup(button, butt);
		numFloors = <?php echo$numFloors ?>;
		scroll_hold = 0;
		var floors = new Object();
		floors['floor1'] = "<?php echo$result['image1']?>";
		floors['floor2'] = "<?php echo$result['image2']?>";
		floors['floor3'] = "<?php echo$result['image3']?>";
		floors['floor4'] = "<?php echo$result['image4']?>";
		floors['floor5'] = "<?php echo$result['image5']?>";
		maxWidth1 = "<?php echo$result['max_w_1']?>";
		maxHeight1 = "<?php echo$result['max_h_1']?>";
		xAdj = <?php echo$result['xadj']?>;
		yAdj = <?php echo$result['yadj']?>;
		//__a = <?php echo$result['a']?>;
		//__b = <?php echo$result['b']?>;
		//__c = <?php echo$result['c']?>;
		//__d = <?php echo$result['d']?>;
		//__e = <?php echo$result['e']?>;
		//__f = <?php echo$result['f']?>;
		console.log(xAdj+' '+yAdj);
		floorAssemble(numFloors, floors);
		arrowSetup();
		setTimeout(load(holder), 1500);
	</script>
</body>
</html>