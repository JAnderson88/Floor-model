<!Doctype html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>Lovelace, Inc.</title>
	<style>
	#login{

	position: absolute;
	width: 200px;
	height: 120px; 
	}
	#mapa{
		
		position: absolute;
		top: 65px;
		left: 65px;
	}
	</style>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
	<script>
	$(function(){
		var w = $(window).width();
		var h = $(window).height();
		var w_ = w/2;
		var h_ = h/2;
		$("#login").css({"top":"50%","left":"50%","margin-left":-$("#login").width()/2,"margin-top":-$("#login").height/2});
		
	
		window.onresize = function(w, h){
			var w = $(window).width();
			var h = $(window).height();
			var w_ = w/2;
			var h_ = h/2;
			$("#login").css({"top":"50%","left":"50%","margin-left":-$("#login").width()/2,"margin-top":-$("#login").height/2});
		}
	});
		<?php 

	if (isset($_POST['username'])&&isset($_POST['password'])) {
		$username = $_POST['username'];
		$password = $_POST['password'];
	
		$password_hash = md5($password);
	
		if (!empty($username)&& !empty($password)){
		
			$query = "SELECT `id` FROM `users` WHERE `username`='$username' AND `password`='$password_hash'";
			if($query_run = mysql_query($query)){
				$query_num_rows = mysql_num_rows($query_run);
				if($query_num_rows==0){
					echo 'Invalid username/password combination';
				} else if($query_num_rows==1){
					$user_id = mysql_result($query_run, 0, 'id');
					$_SESSION['user_id']=$user_id;
					$_SESSION['user']=$username;
					header('Location: index.php');
				}
			} else {
			
			}
		} else {
			echo 'You must supply a username and password';
		}
	}	
	?>
	</script>
</head>
<body>
	<div id="mapa"><img src="images/mapa_home.png"></div>
	<div id="login">
	<form action="<?php echo $current_file; ?>" method="POST">
Username: <input type="text" name="username"> Password: <input type="password" name="password">
	<input type="submit" value="Log In">
	</form>

	</div>

</body>
</html>