$(function(){

	var w = $(window).width();
	var h = $(window).height();
	drawBorder(w, h);
	window.onresize = function(){
		if (w > 800){
			w = $(window).width();
			h = $(window).height(); 
			drawBorder(w,h);
		}  
		if (w <= 800){
			w = $(window).width();
			h = $(window).height();
			drawBorderSmall(w, h);
		}
	}
	
});

function drawBorder(w, h){
	
	var w = $(window).width();
	var h = $(window).height();
	var new_h = h -(50 + 36);
	var map_top = h - 50;
	var left_adj = ($("#container").innerWidth()) + 4;
	var map_left = ((w - left_adj)/2);
	
	$("#container").css({'top': '52px', 'left': map_left+'px', 'height': new_h+'px'});
	$("#tab").css({'left': map_left - 2 +'px'});
	$("#left_pad").css({'width': map_left - 2, 'height':new_h+'px'});
	$("#right_pad").css({'width': map_left, 'height': new_h+'px'});
}

function drawBorderSmall(w, h){
	
	$("#container").css({'position':'absolute', 'width':'768px', 'top': '102px', 'left': '20px'});
	$("#left_pad").css({'width': '20px'});
	$("#right_pad").css({'width': '20px'});
}

function buttonConfirmation(butt){
	var numBut = 0;
	for (var i = 0; i<15; i++){
		if(!butt[i] == ''){
			numBut++;
		} else {
			numBut = numBut;
		}
	}
	return numBut;
}

function gameSetup(button){
	if(button <= 15 && button > 10){
		var map_w = ($("#container").innerWidth()) * 0.68;
		var map_s = ((($("#container").innerWidth()) * 0.32) - 2);
		var b = map_s/2;
		var create1 = document.createElement("div");
		create1.setAttribute("class","button_cont");
		create1.setAttribute("style","width: 33.3%;");
		var create2 = document.createElement("div");
		create2.setAttribute("class","button_cont");
		create2.setAttribute("style","width: 33.3%; left: 33.3%");
		var create3 = document.createElement("div");
		create3.setAttribute("class","button_cont");
		create3.setAttribute("style","width:33.3%; right: 0;");
		$("#map").css({'width':map_w});
		$("#creator").css({'width':map_s});
		document.getElementById("creator").appendChild(create1);
		document.getElementById("creator").appendChild(create2);
		document.getElementById("creator").appendChild(create3);
	} else if(button > 5 && button <=10) {
		var map_w = ($("#container").innerWidth()) * 0.79;
		var map_s = ((($("#container").innerWidth()) * 0.21) - 2);
		var b = map_s/2;
		var create1 = document.createElement("div");
		create1.setAttribute("class","button_cont");
		create1.setAttribute("style","width: 49%;");
		create1.setAttribute("id","create1");
		var create2 = document.createElement("div");
		create2.setAttribute("class","button_cont");
		create2.setAttribute("style","width: 49%; right: 0;");
		create2.setAttribute("id","create2");
		$("#map").css({'width':map_w});
		$("#creator").css({'width':map_s, 'overflow':'hidden'});
		document.getElementById("creator").appendChild(create1);
		document.getElementById("creator").appendChild(create2);		
	} else if(button > 0 && button <=5){
		var map_w = ($("#container").innerWidth()) * 0.895;
		var map_s = ((($("#container").innerWidth()) * 0.105) - 2);
		var create1 = document.createElement("div");
		create1.setAttribute("class","button_cont");
		create1.setAttribute("style","width: 100%;");
		create1.setAttribute("id","create1");
		$("#map").css({'width':map_w});
		$("#creator").css({'width':map_s});
		document.getElementById("creator").appendChild(create1);
		
	} else {
		alert('There is a problem with setting up the buttons');
	}
}
function buttonSetup(button, butt){
	var button_s = new Array;
	if(button <= 15 && button > 10){
		for(var i = 0; i <= 4; i++){
			button_s[i] = document.createElement("div");
			button_s[i].innerHTML = '<button class="button_2" id="'+butt[i]+'"><img src="' + butt[i] +'.png"></button>';
			document.getElementById("create1").appendChild(button_s[i]);
		}
		for(var i = 5; i <= 9; i++){
			button_s[i] = document.createElement("div");
			button_s[i].innerHTML = '<button class="button_2" id="'+ butt[i] +'"><img src="' + butt[i] +'.png"></button>';
			document.getElementById("create2").appendChild(button_s[i]);
		}
		for(var i = 10; i <= button-1; i++){
			button_s[i] = document.createElement("div");
			button_s[i].innerHTML = '<button class="button_2" id="'+ butt[i] +'"><img src="' + butt[i] +'.png"></button>';
			document.getElementById("create2").appendChild(button_s[i]);
		}
	} else if(button<=10 && button > 5){
		for(var i = 0; i <= 4; i++){
			button_s[i] = document.createElement("div");
			button_s[i].innerHTML = '<button class="button_2" id="'+butt[i]+'"><img src="' + butt[i] +'.png"></button>';
			document.getElementById("create1").appendChild(button_s[i]);
		}
		for(var i = 5; i <= button-1; i++){
			button_s[i] = document.createElement("div");
			button_s[i].innerHTML = '<button class="button_2" id="'+ butt[i] +'"><img src="' + butt[i] +'.png"></button>';
			document.getElementById("create2").appendChild(button_s[i]);
		}

	} else if(button<=5 && button > 0){
		for(var i = 0; i <= button-1; i++){
			button_s[i] = document.createElement("div");
			button_s[i].innerHTML = '<button class="button_2" id="'+ butt[i] +'"><img src="' + butt[i] +'.png"></button>';
			document.getElementById("create1").appendChild(button_s[i]);
			}
	} else {
		alert('There is a problem with setting up the buttons');
	}
$("#square").on("click", function(){

	var uni = 'square'; 
	draw_init(uni); 
	iden++;
});
$("#l_bar_cir").click(function(){
	
	var uni = 'l_bar_cir'; 
	draw_init(uni); 
	iden++;
});
$("#l_br_sq").click(function(){
	
	var uni = 'l_br_sq'; 
	draw_init(uni); 
	iden++;
});
$("#cross").click(function(){

	var uni = 'cross'; 
	draw_init(uni); 
	iden++;
});
$("#circle").click(function(){

	var uni = 'circle'; 
	draw_init(uni); 
	iden++;
});
$("#three_p").click(function(){

	var uni = 'three_p'; 
	draw_init(uni); 
	iden++;
});
$("#t_bar").click(function(){

	var uni = 't_bar'; 
	draw_init(uni); 
	iden++;
});
$("#wall").click(function(){

	drawWall();
	iden++;
});
$("#shelf").click(function(){

});
}
function floorAssemble(numFloors, floors){
	if(numFloors == 5) {
		var floor_one = floors['floor1'];
		var floor_two = floors['floor2'];
		var floor_three = floors['floor3'];
		var floor_four = floors['floor4'];
		var floor_five = floors['floor5'];
		var floor1 = document.createElement("div");
		floor1.innerHTML = '<div class="tabb" id="floor1" onClick="one_select()"> Floor 1 </div>';
		var floor2 = document.createElement("div");
		floor2.innerHTML = '<div class="tabb" id="floor2" onClick="two_select()"> Floor 2 </div>';
		var floor3 = document.createElement("div");
		floor3.innerHTML = '<div class="tabb" id="floor3" onClick="three_select()"> Floor 3 </div>';
		var floor4 = document.createElement("div");
		floor4.innerHTML = '<div class="tabb" id="floor4" onClick="four_select()"> Floor 4 </div>';
		var floor5 = document.createElement("div");
		floor5.innerHTML = '<div class="tabb" id="floor5" onClick="five_select()"> Floor 5 </div>';
		var one = document.createElement("div");
		one.innerHTML = '<div class="map" id="map1"><img src="' + floor_one +'"></div>';
		var two = document.createElement("div");
		two.innerHTML = '<div class="map" id="map2"><img src="' + floor_two +'"></div>';
		var three = document.createElement("div");
		three.innerHTML = '<div class="map" id="map3"><img src="' + floor_three +'"></div>';
		var four = document.createElement("div");
		four.innerHTML = '<div class="map" id ="map4"><img src="' + floor_four +'"></div>';
		var five = document.createElement("div");
		five.innerHTML = '<div class="map" id="map5"><img src="' + floor_five +'"></div>';
		document.getElementById("tab").appendChild(floor1);
		document.getElementById("tab").appendChild(floor2);
		document.getElementById("tab").appendChild(floor3);
		document.getElementById("tab").appendChild(floor4);
		document.getElementById("tab").appendChild(floor5);	
		document.getElementById("map").appendChild(one);
		document.getElementById("map").appendChild(two);
		document.getElementById("map").appendChild(three);
		document.getElementById("map").appendChild(four);
		document.getElementById("map").appendChild(five);
		$("#map5").hide();
		$("#map4").hide();
		$("#map3").hide();
		$("#map2").hide();
		$("#map1").show();
		
	} else if(numFloors == 4) {
		var floor_one = floors['floor1'];
		var floor_two = floors['floor2'];
		var floor_three = floors['floor3'];
		var floor_four = floors['floor4'];
		var floor1 = document.createElement("div");
		floor1.innerHTML = '<div class="tabb" id="floor1" onClick="one_select()"> Floor 1 </div>';
		var floor2 = document.createElement("div");
		floor2.innerHTML = '<div class="tabb" id="floor2" onClick="two_select()"> Floor 2 </div>';
		var floor3 = document.createElement("div");
		floor3.innerHTML = '<div class="tabb" id="floor3" onClick="three_select()"> Floor 3 </div>';
		var floor4 = document.createElement("div");
		floor4.innerHTML = '<div class="tabb" id="floor4" onClick="four_select()"> Floor 4 </div>';
		var one = document.createElement("div");
		one.innerHTML = '<div class="map" id="map1"><img src="' + floor_one +'"></div>';
		var two = document.createElement("div");
		two.innerHTML = '<div class="map" id="map2"><img src="' + floor_two +'"></div>';
		var three = document.createElement("div");
		three.innerHTML = '<div class="map" id="map3"><img src="'+ floor_three +'"></div>';
		var four = document.createElement("div");
		four.innerHTML = '<div class="map" id ="map4"><img src="' + floor_four +'"></div>';
		document.getElementById("tab").appendChild(floor1);
		document.getElementById("tab").appendChild(floor2);
		document.getElementById("tab").appendChild(floor3);
		document.getElementById("tab").appendChild(floor4);
		document.getElementById("map").appendChild(one);
		document.getElementById("map").appendChild(two);
		document.getElementById("map").appendChild(three);
		document.getElementById("map").appendChild(four);
		$("#map5").hide();
		$("#map4").hide();
		$("#map3").hide();
		$("#map2").hide();
		$("#map1").show();
		
	} else if(numFloors == 3) {
		var floor_one = floors['floor1'];
		var floor_two = floors['floor2'];
		var floor_three = floors['floor3'];
		var cw = maxWidth1+'px';
		var ch = maxHeight1+'px';
		var floor1 = document.createElement("div");
		floor1.innerHTML = '<button class="tabb" id="floor1" onClick="one_select()"> Floor 1 </button>';
		var floor2 = document.createElement("div");
		floor2.innerHTML = '<button class="tabb" id="floor2" onClick="two_select()"> Floor 2 </button>';
		var floor3 = document.createElement("div");
		floor3.innerHTML = '<button class="tabb" id="floor3" onClick="three_select()"> Floor 3 </button>';
		var one = document.createElement("div");
		one.className = "map";
		one.setAttribute("id","map1");
		one.style.width = cw;
		one.style.height = ch;
		var two = document.createElement("div");
		two.className = "map";
		two.setAttribute("id","map2");
		two.style.width = cw;
		two.style.height = ch;
		var three = document.createElement("div");
		three.className = "map";
		three.setAttribute("id","map3");
		three.style.width = cw;
		three.style.height = ch;
		document.getElementById("tab").appendChild(floor1);
		document.getElementById("tab").appendChild(floor2);
		document.getElementById("tab").appendChild(floor3);
		document.getElementById("map").appendChild(one);
		document.getElementById("map").appendChild(two);
		document.getElementById("map").appendChild(three);
		$("#map1").css('background-image', 'url(' + floor_one + ')');
		$("#map2").css('background-image','url(' + floor_two + ')');
		$("#map3").css('background-image','url(' + floor_three +')');
		$("#map5").hide();
		$("#map4").hide();
		$("#map3").hide().droppable();
		$("#map2").hide().droppable();
		$("#map1").show().droppable();

	} else if(numFloors == 2) {
		var floor_one = floors['floor1'];
		var floor_two = floors['floor2'];
		var floor1 = document.createElement("div");
		floor1.innerHTML = '<div class="tabb" id="floor1" onClick="one_select()"> Floor 1 </div>';
		var floor2 = document.createElement("div");
		floor2.innerHTML = '<div class="tabb" id="floor2" onClick="two_select()"> Floor 2 </div>';
		var one = document.createElement("div");
		one.innerHTML = '<div class="map" id="map1"><img src="' + floor_one +'"></div>';
		var two = document.createElement("div");
		two.innerHTML = '<div class="map" id="map2"><img src="' + floor_two +'"></div>';
		document.getElementById("tab").appendChild(floor1);
		document.getElementById("tab").appendChild(floor2);
		document.getElementById("map").appendChild(one);
		document.getElementById("map").appendChild(two);	
		$("#map5").hide();
		$("#map4").hide();
		$("#map3").hide();
		$("#map2").hide();
		$("#map1").show();
		
	} else if(numFloors == 1) {
		var floor_one = floors['floor1'];
		var cw = maxWidth1+'px';
		var ch = maxHeight1+'px';
		var floor1 = document.createElement("div");
		floor1.innerHTML = '<button class="tabb" id="floor1" onClick="one_select()"> Floor 1 </button>';
		var one = document.createElement("div");
		one.className = "map";
		one.setAttribute("id","map1");
		one.style.width = cw;
		one.style.height = ch;
		document.getElementById("tab").appendChild(floor1);
		document.getElementById("map").appendChild(one);
		$("#map1").css('background-image', 'url(' + floor_one + ')');
		$("#map5").hide();
		$("#map4").hide();
		$("#map3").hide();
		$("#map2").hide();
		$("#map1").show().droppable();
		
	} else if(numFloors <=0 || numFloors >=6) {
		alert('There is error occuring with the number of floors.');
	}
}
function arrowSetup(){
	var mp = document.getElementById("map");
	var ud = (mp.offsetWidth - 54)/2;
	$("#up").css({'position' : 'absolute', 'left':ud, 'z-index':'3'});
	$("#down").css({'position' : 'absolute', 'left':ud, 'top':'450px', 'z-index':'3'});
	$("#left").css({'position' : 'absolute', 'top':'235px', 'z-index':'3'});
	$("#right").css({'position' : 'absolute', 'top':'235px', 'right':'0px', 'z-index':'3'});
	$("#arrow_cont").css({'position':'absolute', 'z-index':'2'});
	$("#count_clock").css({'position':'absolute', 'top':0, 'left':0,'z-index':'2'});
	$("#glass").css({'position':'absolute', 'top':0, 'left':52, 'z-index':'2', 'opacity':'0.5', 'padding':'2px'});
	$("#zoom_up").css({'position':'absolute', 'top': -3, 'left':52, 'z-index':'3', 'padding-top':'0px'});
	$("#zoom").css({'top':15,'left':52,'z-index':'4'});
	$("#zoom_down").css({'position':'absolute', 'bottom': -3, 'left':52, 'z-index':'3', 'padding-bottom':'3px'});
	$("#clock").css({'position':'absolute', 'top':0,'right':0,'z-index':'2'});

	$("#up").click(function(){
		mapMoveUp();
	});

	$("#down").click(function(){
		mapMoveDown();
	});

	$("#left").click(function(){
		mapMoveLeft();
	});

	$("#right").click(function(){
		mapMoveRight();
	});
	$("#count_clock").click(function(){
		if(!high == ''){
			var curr = high;
			$("#"+curr).animate({ rotate: '-=20deg'}, 0);
			var rotate = $("#"+curr).rotate();
			$.get('rotate.php', {id: curr, rot: rotate, file: holder}, function(data, success){
				return;
			});
		}
	});
	$("#clock").click(function(){
		if(!high == ''){
			var curr = high;
			$("#"+curr).animate({ rotate: '+=20deg'}, 0);
			var rotate = $("#"+curr).rotate();
			$.get('rotate.php', {id: curr, rot: rotate, file: holder}, function(data, success){
				return;
			});
		}
	});
	$("#zoom_up").click(function(){

			var flr = getFloor();
			zoom += .2;
			if(zoom > 1.4){
				zoom = 1.4;
			}
			$("#map"+flr).animate({'zoom':zoom}, 425);
			document.getElementById("zoom").innerHTML = zoom * 100;

	});
	$("#zoom_down").click(function(){
	
			var flr = getFloor();
			zoom -= .2;
			if(zoom < 0.8){
				zoom = 0.8;
			}
			$("#map"+flr).animate({'zoom':zoom}, 425);
			document.getElementById("zoom").innerHTML = zoom * 100;
	});
	document.getElementById("zoom").innerHTML = zoom * 100;
}
function one_select(){
	$(this).click(function(){
		$("#map5").hide();
		$("#map4").hide();
		$("#map3").hide();
		$("#map2").hide();
		$("#map1").show();
		on[0] = "true";
		on[1] = "false";
		on[2] = "false";
		on[3] = "false";
		on[4] = "false";
		
	});

}
function two_select(){
	$(this).click(function(){
		$("#map5").hide();
		$("#map4").hide();
		$("#map3").hide();
		$("#map2").show();
		$("#map1").hide();
		on[0] = "false";
		on[1] = "true";
		on[2] = "false";
		on[3] = "false";
		on[4] = "false";

	});

}
function three_select(){
	$(this).click(function(){
		$("#map5").hide();
		$("#map4").hide();
		$("#map3").show();
		$("#map2").hide();
		$("#map1").hide();
		on[0] = "false";
		on[1] = "false";
		on[2] = "true";
		on[3] = "false";
		on[4] = "false";

	});

}
function four_select(){
	$(this).click(function(){
		$("#map5").hide();
		$("#map4").show();
		$("#map3").hide();
		$("#map2").hide();
		$("#map1").hide();
		on[0] = "false";
		on[1] = "false";
		on[2] = "false";
		on[3] = "true";
		on[4] = "false";

	});

}
function five_select(){
	$(this).click(function(){
		$("#map5").show();
		$("#map4").hide();
		$("#map3").hide();
		$("#map2").hide();
		$("#map1").hide();
		on[0] = "false";
		on[1] = "false";
		on[2] = "false";
		on[3] = "false";
		on[4] = "true";

	});
}
function mapMoveUp(){
	
	var ax = (__a + mapY)+'px';
	var bx = (__b + mapY)+'px';

	if(mapY <= 0){
		
		return;
		
	} else {
		
		mapY = mapY - 20;
		$("#map").scrollTop(mapY);
		$("#up").css({'top': mapY - 1});
		$("#down").css({'top':bx});
		$("#left").css({'top':ax});
		$("#right").css({'top':ax});
		$("#holder").css({'top':mapY + 57});
		$("#arrow_cont").css({'top':mapY - 1});
	}
}
function mapMoveDown(){

	var cx = (__c + mapY)+'px';
	var dx = (__d + mapY)+'px';
	//yAdj == 1080
	if(mapY >= yAdj){
	
		return

	} else {
		
		mapY = mapY + 20;
		$("#map").scrollTop(mapY);
		$("#up").css({'top': mapY-1});
		$("#down").css({'top':dx});
		$("#left").css({'top':cx});
		$("#right").css({'top':cx});
		$("#holder").css({'top': 57 + mapY});
		$("#arrow_cont").css({'top':mapY - 1});

	}
}
function mapMoveRight(){

	var ex = (__e + mapX)+'px';
	//xAdj == 1760
	if(mapX >= xAdj){
	
		return;
		
	} else {
		
		mapX = mapX + 20;
		$("#map").scrollLeft(mapX);
		$("#up").css({'left': ex});
		$("#down").css({'left':ex});
		$("#left").css({'left':mapX});
		$("#right").css({'right':1 - mapX});
		$("#holder").css({'right': 1 - mapX});
		$("#arrow_cont").css({'right':1 - mapX});

	}
}
function mapMoveLeft(){
	var fx = (__f + mapX)+'px'; 
	if(mapX <= 0){
	
		return;
		
	} else {
	
		mapX = mapX - 20;
		$("#map").scrollLeft(mapX);
		$("#up").css({'left': fx});
		$("#down").css({'left': fx});
		$("#left").css({'left':mapX});
		$("#right").css({'right':1 - mapX});
		$("#holder").css({'right':1 - mapX});
		$("#arrow_cont").css({'right':1 - mapX});

	}
}
function statSetup(curId){
	$(".unsel").toggleClass("sel", 500);
	var show = document.createElement("div");
	show.className = 'show';
	show.id = 'share';
	var select = $("#"+curId);
	var h = Math.round(select.height());
	var w = Math.round(select.width());
	var loc = select.offset();
	var lx = loc.left + select.width() - 8;
	var ly = loc.top - 19;
	show.style.left = lx+'px';
	show.style.top = ly+'px';
	show.style.zIndex = "4";
	$('body').append(show);
	var x = 1;
	var name = document.createElement("div");
	name.innerHTML = '<input type="text" id="identifier" value="'+curId+'">';
	var keyword = document.createElement("div");
	keyword.innerHTML = '<p><h2>&nbsp; &nbsp; Keywords</h2></p>';
	var top = document.createElement("div");
	top.setAttribute("id","top");
	var bottom = document.createElement("div");
	bottom.setAttribute("id","bottom");
	var upcK = "<h1> UPC's: </h1><br>";
	var sub = document.createElement("button");
	sub.style.width = '60px';
	sub.style.height = '30px';
	sub.setAttribute("id","submit"); 
	sub.innerHTML = 'Submit';
	var resize = document.createElement("button");
	resize.style.width = '60px';
	resize.style.height = '30px';
	resize.setAttribute("id","resize");
	resize.innerHTML = 'Resize';
	var del = document.createElement("button");
	del.style.width = '60px';
	del.style.height = '30px';
	del.setAttribute("id","delete");
	del.innerHTML = 'Delete';
	var ret = document.createElement("button");
	ret.style.width = '60px';
	ret.style.height = '30px';
	ret.setAttribute("id","return");
	ret.innerHTML = 'Return';
	var keyhold = document. createElement("div");
	keyhold.setAttribute("id","keyhold");
	var key1 = document.createElement("form");
	var key2 = document.createElement("form");
	var key3 = document.createElement("form");
	var keydown = document.createElement("div");
	keydown.setAttribute("id","keydown");
	keydown.innerHTML = '<img src="a_down.png" width="20" height="35">';
	var keyup = document.createElement("div");
	keyup.setAttribute("id","keyup");
	keyup.innerHTML = '<img src="test.png" width="20" height="35">';
	var upc_top = document.createElement("div");
	upc_top.setAttribute("id","upc_top");
	var upc_bot = document.createElement("div");
	upc_bot.setAttribute("id","upc_bot");
	var upc_left = document.createElement("div");
	upc_left.setAttribute("id","upc_left");
	upc_left.innerHTML = '<img src="upc_l.png" width="55" height="126">';
	var upc_right = document.createElement("div");
	upc_right.setAttribute("id","upc_right");
	upc_right.innerHTML = '<img src="upc_r.png" width="55" height="126">';
	var hold1 = document.createElement("div");
	var upc1 = document.createElement("form");
	var upc2 = document.createElement("form");
	var upc3 = document.createElement("form");
	var upc4 = document.createElement("form");
	var hold2 = document.createElement("div");
	var upc5 = document.createElement("form");
	var upc6 = document.createElement("form");
	var upc7 = document.createElement("form");
	var upc8 = document.createElement("form");
	hold1.className = 'hold';
	hold1.className += ' hold_l';
	hold1.setAttribute("id","hold1");
	hold2.className = 'hold';
	hold2.className += ' hold_r';
	hold2.setAttribute("id","hold2");
	key1.innerHTML = '<input type="text" id="key1" class="key">';
	key2.innerHTML = '<input type="text" id="key2" class="key">';
	key3.innerHTML = '<input type="text" id="key3" class="key">';
	upc1.innerHTML = '<input type="text"  id="upc1" class="upc1" onkeydown="return isNumber(event);" width="12" size="30">';
	upc2.innerHTML = '<input type="text"  id="upc2" class="upc2" onkeydown="return isNumber(event);" width="12" size="30">';
	upc3.innerHTML = '<input type="text"  id="upc3" class="upc3" onkeydown="return isNumber(event);" width="12" size="30">';
	upc4.innerHTML = '<input type="text"  id="upc4" class="upc4" onkeydown="return isNumber(event);" width="12" size="30">';
	upc5.innerHTML = '<input type="text"  id="upc5" class="upc5" onkeydown="return isNumber(event);" width="12" size="30">';
	upc6.innerHTML = '<input type="text"  id="upc6" class="upc6" onkeydown="return isNumber(event);" width="12" size="30">';
	upc7.innerHTML = '<input type="text"  id="upc7" class="upc7" onkeydown="return isNumber(event);" width="12" size="30">';
	upc8.innerHTML = '<input type="text"  id="upc8" class="upc8"onkeydown="return isNumber(event);" width="12" size="30">';
	$("#ident").append(top).append(bottom);
	$("#top").append(name).append(keyword);
	$("#bottom").append(keyhold).append(keyup).append(keydown);
	$("#keyhold").append(key1).append(key2).append(key3);
	$("#stat_hold").append(upc_top).append(upc_bot);
	$("#upc_top").append(upcK).append(sub).append(resize).append(del).append(ret);
	$("#upc_bot").append(upc_left).append(hold1).append(hold2).append(upc_right);
	$("#hold1").append(upc1).append(upc2).append(upc3).append(upc4);
	$("#hold2").append(upc5).append(upc6).append(upc7).append(upc8);
	$("#submit").on("click", function(){
		
		
		
		var name = $('#identifier').val();
		var key = new Array();
		var upcs = new Array();
		var tick = 0;
		$("#keyhold").find("input[type=text]").each(function(){
			if($(this).val() !== '') {
				tick++;
			}
		});
		for(i = 0; i <= tick - 1; i++){
			key[i] = $('#key'+(i+1)).val(); 
		}
		upcs[0] = $('.upc1').val();
		upcs[1] = $('.upc2').val();
		upcs[2] = $('.upc3').val();
		upcs[3] = $('.upc4').val();
		upcs[4] = $('.upc5').val();
		upcs[5] = $('.upc6').val();
		upcs[6] = $('.upc7').val();
		upcs[7] = $('.upc8').val();
		var idd = $('.upc1').attr('id');
		var l = idd.length;
		var length = parseInt(idd.slice(3, l));
				
		$.get('submit.php', {file: holder, id: high, nam: name, key: key, upcs: upcs, tick: tick, size: length}, function(data){
			console.log(data);
			}); 
	});
	$("#delete").on("click", function(){
		var id = high;
		var file = holder;
		$.get('deleteEnt.php', {id: id, file: file}, function(data){
			
		});
		$("#"+id).remove();
		high = '';
		returnSetup();
		scroll_hold = 0;
	});
	$("#resize").on("click", function(){
		var id = high;
		if(iden <= 9){
			var len = id.length;
			var str = id.substr(0, len - 1);
		} else if (iden >= 10 && iden <= 99) {
			var len = id.length;
			var str = id.substr(0, len - 2);
		}  else if (iden >= 100 && iden <= 999) {
			var len = id.length;
			var str = id.substr(0, len - 3);
		}
		var w = document.getElementsByName("width")[0].value;
		var h = document.getElementsByName("height")[0].value;
		$("#"+id).html('<img src="'+str+'.png" height="'+h+'" width="'+w+'">');
		$("#"+id).css({"width":w, "height":h});
		var l = $("#"+id).offset();
		var nl = l.left + $("#"+id).width() - 8;
		var nt = l.top - 19;
		$("#share").text(w+" X "+h);
		$("#share").css({"left":nl, "top":nt});
		$.get('resizeXML.php', {getId: id, file: holder, wid:w, hei:h}, function(){
			
		});
		return;
		
	});
	$("#return").on("click",function(){
		var id = high;
		$("#"+id).toggleClass("highlight");
		high = '';
		returnSetup();
	});
	$("#keydown").on("click",function(){
		if($("#key1").val() !== '' && $("#key2").val() !== '' && $("#key3").val() !== ''){
			var count = $("#keyhold").children().length;
			var tick = 0;
			$("#keyhold").find("input[type=text]").each(function(){
				if($(this).val() !== '') {
					tick++;
				}
			});
			var upg = count + 1;
			var ans = count - tick;
			if(ans == 0){
				var tru = 'key'+upg;
				var new_key = document.createElement("form");
				new_key.innerHTML = '<input type="text" id="'+tru+'" class="key">';
				$("#keyhold").append(new_key);
				$.get('addKey.php',{id: high, file:holder, tick:tick}, function(data){
					alert(data);
				});
				var s = $("#ident").scrollTop();
				var t = $("#ident").innerHeight();
				var l = $("#ident")[0].scrollHeight;			
				var grow = s + 20;
				$("#ident").scrollTop(grow);	
				$("#keydown").css({"top": 66 + grow});
				$("#keyup").css({"top": 31 + grow});
				//alert("scroll top: "+ s +" inner height: "+ t +" scroll height: "+ l);
				
			} else if(ans < 0 || ans > 0){

				var s = $("#ident").scrollTop();
				var s = $("#ident").scrollTop();
				var t = $("#ident").innerHeight();
				var l = $("#ident")[0].scrollHeight;
				if(s + t < l){
					$("#ident").scrollTop(s + 10);
					$("#keydown").css({"top": 66 + s + 10});
					$("#keyup").css({"top": 31 + s + 10});
				} else {
					return;
				}
				//alert("scroll top: "+ s +" innerheight: "+ t +" scroll height: "+ l);
			}
		} else {
			return;
		} 
	});
	$("#keyup").on("click",function(){

		var s = $("#ident").scrollTop();
		var t = $("#ident").innerHeight();
		var l = $("#ident")[0].scrollHeight;
		
		if(s > 0){
			$("#ident").scrollTop(s - 15);
			var a = $("#ident").scrollTop();
			if(a <= 0){
				$("#keydown").css({"top": 66});
				$("#keyup").css({"top": 31});
			} else {
				$("#keydown").css({"top": 66 + s - 15});
				$("#keyup").css({"top": 31 + s - 15});
			}
		} else {
			return;
		}
		alert("scroll top: "+ s +" innerheight: "+ t +" scroll height: "+ l);
	});
	
	$("#upc_right").on("click", function(){
		
		var hold = 0;
		var go = false;
		$("#upc_bot").find("div").each(function(){
			if(this){
				hold++;
			}
		});

		hold = hold - 2;
		var tick = 0;
		$("#upc_bot").find("input[type=text]").each(function(){
			if($(this).val() !== '') {
				tick++;
			}
		});
		
		if(tick > 0){
			go = true;
		} else {
			go = false;
		}
		var rem = tick % 8;
		if(rem == 0 && go == true){
			var upg = new Array();
			var old_l = $(".hold_l").attr("id");
			var old_r = $(".hold_r").attr("id");
			var l = old_l.length;
			var r = old_r.length;
			var left = parseInt(old_l.slice(4, l));
			var right = parseInt(old_r.slice(4, r));
			var hold_l = 'hold'+(left + 2);
			var hold_r = 'hold'+(right + 2);
			var reg = right * 4;
			var teg = reg + 16;
			var holda = document.createElement("div");
			holda.className = 'hold';
			holda.className += ' hold_l';
			holda.setAttribute("id",hold_l);
			var holdb = document.createElement("div");
			holdb.className = 'hold';
			holdb.className += ' hold_r';
			holdb.setAttribute("id",hold_r);
			upg[0] = '';
			$("#hold"+left).remove();
			$("#hold"+right).remove();
			$("#upc_bot").append(holda).append(holdb);
			for(i = 1; i <= 8; i++){
				upg[i] = document.createElement("form");
				upg[i].innerHTML = '<input type="text"  id="upc'+(reg+i)+'" class="upc'+i+'" onkeydown="return isNumber(event);" width="12" size="30">';
				if(i <= 4){
					$("#"+hold_l).append(upg[i]);
				} else if (i > 4 && i <= 8){
					$("#"+hold_r).append(upg[i]);
				}
			}
			go = false;
			$.get('addUPC.php', {file: holder, id: high, reg: reg}, function(data){
			if(data == 'true'){
				loadUpc(teg);
			} else {
				return;
			}
			});
		} else {
			return;
		}
		
	});
	
	$("#upc_left").on("click", function(){
		
		var old_l = $(".hold_l").attr("id");
		var old_r = $(".hold_r").attr("id");
		var l = old_l.length;
		var r = old_r.length;
		var left = parseInt(old_l.slice(4, l));
		var right = old_r.slice(4, r);
		var reg = parseInt(right * 4);
		var holdl = 'hold'+(left - 2);
		var holdr = 'hold'+(right - 2);
		if(left >= 3){
			$("#"+old_l).remove();
			$("#"+old_r).remove();
			var upg = new Array();
			upg[0] = '';
			var holda = document.createElement("div");
			holda.className = 'hold';
			holda.className += ' hold_l';
			holda.setAttribute("id",holdl);
			var holdb = document.createElement("div");
			holdb.className = 'hold';		
			holdb.className += ' hold_r';
			holdb.setAttribute("id",holdr);
			$("#upc_bot").append(holda).append(holdb);
			for(i = 1; i <= 8; i++){
				upg[i] = document.createElement("form");
				upg[i].innerHTML = '<input type="text"  id="upc'+(reg - 16 + i)+'" class="upc'+i+'" onkeydown="return isNumber(event);" width="12" size="30">';
				if(i <= 4){
					$("#"+holdl).append(upg[i]);
				} else if (i > 4 && i <= 8){
					$("#"+holdr).append(upg[i]);
				}
			}
			loadUpc(reg);
		} else {
			return;
		}
	});
}
function returnSetup(){
	$(".unsel").toggleClass("sel",250);
	$("#share").remove();
	$("#ident").empty();
	$("#stat_hold").empty();
}
function altReturnSetup(){
	$("#ws").remove();
}
function isNumber(event) {
  if (event) {
    var charCode = (event.which) ? event.which : event.keyCode;
    if (charCode != 190 && charCode > 31 && 
       (charCode < 48 || charCode > 57) && 
       (charCode < 96 || charCode > 105) && 
       (charCode < 37 || charCode > 40) && 
        charCode != 110 && charCode != 8 && charCode != 46 )
       return false;
  }
  return true;
}
function convertHex(hex,opacity){
    hex = hex.replace('#','');
    r = parseInt(hex.substring(0,2), 16);
    g = parseInt(hex.substring(2,4), 16);
    b = parseInt(hex.substring(4,6), 16);
    result = 'rgba('+r+','+g+','+b+','+opacity/100+')';
    return result;
}
function loadSetup(curId){
	
	$.ajax({
		type: 'POST',
		url: 'load.php',
		data: {id: high, file: holder},
		cache: false,
		dataType: 'text',
		success: function(data){
			var set = jQuery.parseJSON(data);
			var x = set[0][0];
			var y = set[1][0];
			var sx = set[2][0];
			var sy = set[3][0];
			var name = set[4][0];
			var key1 = set[5][0];
			var key2 = set[6][0];
			var key3 = set[7][0];
			var upc1 = set[8][0];
			var upc2 = set[9][0];
			var upc3 = set[10][0];
			var upc4 = set[11][0];
			var upc5 = set[12][0];
			var upc6 = set[13][0];
			var upc7 = set[14][0];
			var upc8 = set[15][0];
			var width = set[16][0];
			var height = set[17][0];
			$('#identifier').val(name);
			$("#key1").val(key1);
			$("#key2").val(key2);
			$("#key3").val(key3);	
			$("#upc1").val(upc1);
			$("#upc2").val(upc2);
			$("#upc3").val(upc3);
			$("#upc4").val(upc4);
			$("#upc5").val(upc5);
			$("#upc6").val(upc6);
			$("#upc7").val(upc7);
			$("#upc8").val(upc8);
			$("#share").text(width+" X "+height);
		}
		
	});
}
function draw_init(unique){
	
	var box = document.createElement("div");
	var w = document.getElementsByName("width")[0].value;
	var h = document.getElementsByName("height")[0].value;
	var dw = w;
	var hw = h;
	$("#holder").css({"width":dw,"height":hw,"z-index":"2"});
	box.setAttribute("style","position: absolute");
	box.setAttribute("id",unique + iden);
	box.style.width = w+'px';
	box.style.height = h+'px';
	box.innerHTML = '<img src="'+unique+'.png" height="'+h+'" width="'+w+'">';
	box.style.zindex = 2;
	document.getElementById("holder").appendChild(box);
	var id = unique + iden;
	$.get("appendXML.php", {file: holder, getId: id, ident: iden, wid:w, hei:h}, function(data){
		return;
	});
	$("#"+unique+iden).click(function(){
		var curId = $(this).attr('id');

		if(high == ''){
			$(this).toggleClass("highlight");
			high = curId;
			statSetup(curId);
			loadSetup(curId);
		} else if(high == curId){
			$(this).toggleClass("highlight");
			high = '';
			returnSetup();
		} else if(!high == '' || !high == curId){
			return;
		}
	});

	$("#"+unique+iden).draggable({
		start: function(){ 
			var curId = $(this).attr('id'); 
			if(high ==''){
				$(this).toggleClass("highlight"); 
				high = curId;
				statSetup(curId);
				loadSetup(curId);
			} else if(high == curId){
			
			} else if(!high == '' || !high == curId){
				
			}
		},
		grid: [3, 3], 
		stop: function(){
			var curId = $(this).attr('id');
			var lp = $("#left_pad");
			var lp_w = lp.width();
			var head = $("#banner").height();
			var cre_w = $("#creator").width();
			var st = $("#map").scrollTop();
			var sl = $("#map").scrollLeft();
			var stoppos = $(this).offset();
			var left = $(this).offset().left;
			var top = $(this).offset().top;
			var nw = (left - lp_w - cre_w + sl);
			var nh = (top - head + st);
			var x = left - lp_w - cre_w;
			var x_ = x;
			var y = top - head;
			var y_ = y;
			var sx_ = sl;
			var sy_ = st;
			var flr = getFloor();
			$.ajax({
				
				type: 'POST',
				url: 'setPosition.php',
				data: {id: curId, file: holder, x: x, y: y, sx: sx_, sy: sy_, floor: flr},
				success: function(data){
				}
			});
			if(on[0] == 'true'){
				var ps = adjustZoomLevel(nh, nw, left, top);
				$(this).detach().appendTo("#map1").css({"top":ps.top,"left": ps.left});
			} else if(on[1] == 'true'){
				var ps = adjustZoomLevel(nh, nw, left, top);
				$(this).detach().appendTo("#map2").css({"top":ps.top,"left": ps.left});
			} else if(on[2] == 'true'){
				var ps = adjustZoomLevel(nh, nw, left, top);
				$(this).detach().appendTo("#map3").css({"top":ps.top,"left": ps.left});
			} else if(on[3] == 'true'){
				var ps = adjustZoomLevel(nh, nw, left, top);
				$(this).detach().appendTo("#map4").css({"top":ps.top,"left": ps.left});
			} else if(on[4] == 'true'){
				var ps = adjustZoomLevel(nh, nw, left, top);
				$(this).detach().appendTo("#map5").css({"top":ps.top,"left": ps.left});
			}
			$("#holder").css({"width": 0,"height": 0, "top": 57+mapY, "right":1-mapX});
		}
	});
}
function load(holder){
	$.ajax({
		
		type: 'POST',
		url: 'getXML.php',
		data: {file: holder},
		cache: false,
		dataType: 'JSON',
		success: function(data){
			var length = data[data.length - 1] - 1;
			for(var i = 0; i <= length; i++){
				var name = data[i][0];
				var floor = data[i][1];
				var width = data[i][2];
				var height = data[i][3];
				var locx = data[i][4];
				var locy = data[i][5];
				var scrollx = data[i][6];
				var scrolly = data[i][7];
				var rot = data[i][8];
				loadInit(name, floor, width, height, locx, locy, scrollx, scrolly, rot);
			}
		}	
	});
}
function getFloor(){
	for(i=0; i<=4; i++){
		if(on[i] == 'true'){
			var floor = (i+1);
			return floor;
		}
	}
}
function adjustZoomLevel(nh, nw, left, top){
	
	var ps = new Object;
	if(zoom == 1.2){
		ps.top = parseInt(nh * 0.8);
		ps.left = parseInt(nw * 0.8);
	} else if(zoom == 1.4) {
		ps.top = parseInt(nh * 0.6);
		ps.left = parseInt(nw * 0.6);
	} else if(zoom == 1.6) {
		ps.top = parseInt(nh * 0.4);
		ps.left = parseInt(nw * 0.4);
	} else if(zoom == 0.8) {
		ps.top = nh * 1.2;
		ps.left = nw * 1.2;
	} else if(zoom == 0.6) {
		ps.top = nh * 1.4;
		ps.left = nw * 1.4;
	} else if(zoom == 1.0) {
		ps.top = nh;
		ps.left = nw;
	}
	return ps;
}
function loadUpc(reg){
	
	var grab = new Array();
		$.ajax({
		type: 'POST',
		url: 'loadUpc.php',
		data: {id: high, file: holder, num: reg},
		cache: false,
		dataType: 'text',
		success: function(data){

			var set = jQuery.parseJSON(data);
			grab[0] = set[0][0];
			grab[1] = set[1][0];
			grab[2] = set[2][0];
			grab[3] = set[3][0];
			grab[4] = set[4][0];
			grab[5] = set[5][0];
			grab[6] = set[6][0];
			grab[7] = set[7][0];
			$("#upc"+(reg-15)).val(grab[0]);
			$("#upc"+(reg-14)).val(grab[1]);
			$("#upc"+(reg-13)).val(grab[2]);
			$("#upc"+(reg-12)).val(grab[3]);
			$("#upc"+(reg-11)).val(grab[4]);
			$("#upc"+(reg-10)).val(grab[5]);
			$("#upc"+(reg-9)).val(grab[6]);
			$("#upc"+(reg-8)).val(grab[7]);	
		}
	});

}
function loadInit(name, floor, width, height, locx, locy, scrollx, scrolly, rot){
	
	var unique = getConf(name);
	var box = document.createElement("div");
	var picture = getPicChange(unique);
	box.setAttribute("style","position: absolute");
	box.setAttribute("id",name);
	box.classname = 'clickable';
	box.classname += ' drag';
	box.style.width = width+'px';
	box.style.height = height+'px';
	box.innerHTML = '<img src="'+picture+'.png" height="'+height+'" width="'+width+'">';
	box.style.zindex = 2;
	var y = parseInt(locy);
	var sy = parseInt(scrolly);
	var x = parseInt(locx);
	var sx = parseInt(scrollx);
	var top = Math.floor(y + sy);
	var left = Math.floor(x + sx);
	console.log(top+'  '+left);
	if(floor == '1'){
		document.getElementById("map1").appendChild(box);
		$("#"+name).css({"top":top,"left":left});
	} else if(floor == '2'){
		document.getElementById("map2").appendChild(box);
		$("#"+name).css({"top":top,"left":left});
	} else if(floor == '3'){
		document.getElementById("map3").appendChild(box);
		$("#"+name).css({"top":top,"left":left});
	} else if(floor == '4'){
		document.getElementById("map4").appendChild(box);
		$("#"+name).css({"top":top,"left":left});
	} else if(floor == '5'){
		document.getElementById("map1").appendChild(box);
		$("#"+name).css({"top":top,"left":left});
	}
	$("#"+name).on("click", function(){
		var curId = $(this).attr('id');
		if(high == ''){
			$(this).toggleClass("highlight");
			high = curId;
			statSetup(curId);
			loadSetup(curId);
		} else if(high == curId){
			$(this).toggleClass("highlight");
			high = '';
			returnSetup();
		} else if(!high == '' || !high == curId){
			return;
		}
	});
		$("#"+name).draggable({
		start: function(){ 
			var curId = $(this).attr('id'); 
			if(high ==''){
				$(this).toggleClass("highlight"); 
				high = curId;
				statSetup(curId);
				loadSetup(curId);
			} else if(high == curId){
			
			} else if(!high == '' || !high == curId){
				
			}
		},
		grid: [3, 3], 
		stop: function(){
			var curId = $(this).attr('id');
			var lp = $("#left_pad");
			var lp_w = lp.width();
			var head = $("#banner").height();
			var cre_w = $("#creator").width();
			var st = $("#map").scrollTop();
			var sl = $("#map").scrollLeft();
			var stoppos = $(this).offset();
			var left = $(this).offset().left;
			var top = $(this).offset().top;
			var nw = (left - lp_w - cre_w + sl)-4;
			var nh = (top - head + st)-2;
			var x = left - lp_w - cre_w - 4;
			var x_ = x;
			var y = top - head - 2;
			var y_ = y;
			var sx_ = sl;
			var sy_ = st;
			var flr = getFloor();
			$.ajax({
				
				type: 'POST',
				url: 'setPosition.php',
				data: {id: curId, file: holder, x: x, y: y, sx: sx_, sy: sy_, floor: flr},
				success: function(data){
				}
			});
			if(on[0] == 'true'){
				var ps = adjustZoomLevel(nh, nw, left, top);
				$(this).detach().appendTo("#map1").css({"top":ps.top,"left": ps.left});
			} else if(on[1] == 'true'){
				var ps = adjustZoomLevel(nh, nw, left, top);
				$(this).detach().appendTo("#map2").css({"top":ps.top,"left": ps.left});
			} else if(on[2] == 'true'){
				var ps = adjustZoomLevel(nh, nw, left, top);
				$(this).detach().appendTo("#map3").css({"top":ps.top,"left": ps.left});
			} else if(on[3] == 'true'){
				var ps = adjustZoomLevel(nh, nw, left, top);
				$(this).detach().appendTo("#map4").css({"top":ps.top,"left": ps.left});
			} else if(on[4] == 'true'){
				var ps = adjustZoomLevel(nh, nw, left, top);
				$(this).detach().appendTo("#map5").css({"top":ps.top,"left": ps.left});
			}
			$("#holder").css({"width": 0,"height": 0, "top": 57+mapY, "right":1-mapX});
		}
	});
}
function getConf(name){

	var len = name.length;
	var n = name.slice(0, 4);
	if(n == 'squa'){
		var send = 'square';
	} else if(n == 'l_ba'){
		var send = 'l_bar_cir';
	} else if(n == 'l_br'){
		var send = 'l_br_sq';
	} else if(n == 'cros'){
		var send = 'cross';
	} else if(n == 'circ'){
		var send = 'circle';
	} else if(n == 'thre'){
		var send = 'three_p';
	} else if(n == 't_ba'){
		var send = 't_bar';
	} else if(n == 'wall'){
		var send = 'wall';
	} else if(n == 'shel'){
		var send = 'shelf';
	}
	return send;
}
function drawWall(){
	var box = document.createElement("div");
	var w = document.getElementsByName("width")[0].value;
	var h = document.getElementsByName("height")[0].value;
	$("#holder").css({"width":w,"height":h,"z-index":"2"});
	box.setAttribute("style","position: absolute");
	box.setAttribute("id","wall"+iden);
	box.style.width = w+'px';
	box.style.height = h+'px';
	box.innerHTML = '<img src="wall_post.png" height="'+h+'" width="'+w+'">';
	box.style.zindex = 2;
	document.getElementById("holder").appendChild(box);
	var id = "wall"+iden;
	$.get("wallXML.php", {file: holder, getId: id, ident: iden, wid:w, hei:h}, function(data){
		return;
	});
	$("#wall"+iden).click(function(){
		var curId = $(this).attr('id');

		if(high == ''){
			$(this).toggleClass("highlight");
			high = curId;
			wallSetup(curId);
			//loadSetup(curId);
		} else if(high == curId){
			$(this).toggleClass("highlight");
			high = '';
			altReturnSetup();
		} else if(!high == '' || !high == curId){
			return;
		}
	});
		$("#wall"+iden).draggable({
		start: function(){ 
			var curId = $(this).attr('id'); 
			if(high ==''){
				$(this).toggleClass("highlight"); 
				high = curId;
				//wallSetup(curId);
				//loadSetup(curId);
			} else if(high == curId){
			
			} else if(!high == '' || !high == curId){
				
			}
		},
		grid: [3, 3], 
		stop: function(){
			var curId = $(this).attr('id');
			var lp = $("#left_pad");
			var lp_w = lp.width();
			var head = $("#banner").height();
			var cre_w = $("#creator").width();
			var st = $("#map").scrollTop();
			var sl = $("#map").scrollLeft();
			var stoppos = $(this).offset();
			var left = $(this).offset().left;
			var top = $(this).offset().top;
			var nw = (left - lp_w - cre_w + sl);
			var nh = (top - head + st);
			var x = left - lp_w - cre_w;
			var x_ = x;
			var y = top - head;
			var y_ = y;
			var sx_ = sl;
			var sy_ = st;
			var flr = getFloor();
			$.ajax({
				
				type: 'POST',
				url: 'setPosition.php',
				data: {id: curId, file: holder, x: x, y: y, sx: sx_, sy: sy_, floor: flr},
				success: function(data){
				}
			});
			if(on[0] == 'true'){
				var ps = adjustZoomLevel(nh, nw, left, top);
				$(this).detach().appendTo("#map1").css({"top":ps.top,"left": ps.left});
			} else if(on[1] == 'true'){
				var ps = adjustZoomLevel(nh, nw, left, top);
				$(this).detach().appendTo("#map2").css({"top":ps.top,"left": ps.left});
			} else if(on[2] == 'true'){
				var ps = adjustZoomLevel(nh, nw, left, top);
				$(this).detach().appendTo("#map3").css({"top":ps.top,"left": ps.left});
			} else if(on[3] == 'true'){
				var ps = adjustZoomLevel(nh, nw, left, top);
				$(this).detach().appendTo("#map4").css({"top":ps.top,"left": ps.left});
			} else if(on[4] == 'true'){
				var ps = adjustZoomLevel(nh, nw, left, top);
				$(this).detach().appendTo("#map5").css({"top":ps.top,"left": ps.left});
			}
			$("#holder").css({"width": 0,"height": 0, "top": 57+mapY, "right":1-mapX});
		}
	});
	
}
function wallSetup(curId){
	if($("#map1").has($("#"+curId))||$("#map2").has("#"+curId)||$("#map3").has("#"+curId)||$("#map4").has("#"+curId)||$("#map5").has("#"+curId)){
	
		var loc = $("#"+curId).offset();
		var st = $("#map").scrollTop();
		var sl = $("#map").scrollLeft();
		var origx = loc.left + $("#"+curId).width();
		var origy = loc.top;
		var b = document.createElement("div");
		b.className = 'wallBox';
		if(origx > ($(window).width() - 300)){
			origx = loc.left - 300;
		}
		if(origy + 400 > $(window).height()){
			var dif = (origy + 400) - $(window).height() - 3;
			origy = origy - dif;
		}
		b.setAttribute("id","ws");
		//b.innerHTML = '<input type="file" name="file" id ="get" style="visibility:hidden;"/>';
		document.getElementsByTagName("body")[0].appendChild(b);
		$("#ws").animate({width: '300px'},{duration: 700, queue: false}, {height: '400px'},{duration: 700, queue: false}); 
		$("#ws").css({"width":"300px","height":"400px","top":origy,"left":origx});
		var u = document.createElement("button");
		//u.type = 'submit';
		u.id = 'uploader';
		u.value = 'Upload an image';
		$("#ws").append(u);
		$("#uploader").on("click", function(){
			var fil = $('input[type=file]').val();
			var files = event.target.files;
			var len = fil.length;
			var trim = fil.slice(12, len);
			var uploader = document.getElementById('uploader');
			
			upclick(
				{
					element: uploader,
					action: 'upload_file.php',
					onstart:
						function(trim)
						{
							console.log('Start upload: '+trim);
						},
					oncomplete:
						function(response_data)
						{
							console.log(response_data);
						}
				});

			$.post('uploadPic.php', {file: holder, id: curId, image: trim}, function(data){
				console.log(data);
			});
		});
		/*$("#get").change(function(){
			//document.getElementById('up').submit();
			var fil = $('input[type=file]').val();
			var files = event.target.files;
			var len = fil.length;
			var trim = fil.slice(12, len);
			var uploader = document.getElementById('uploader');
			
			upclick(
				{
					element: uploader,
					action: 'upload_file.php',
					onstart:
						function(trim)
						{
							console.log('Start upload: '+trim);
						},
					oncomplete:
						function(response_data)
						{
							console.log(response_data);
						}
				});

			$.post('uploadPic.php', {file: holder, id: curId, image: trim}, function(data){
				console.log(data);
			});
			
			$('#ws').html('<img src="'+trim+'" width="300px" height="400px">');
		});

	} else {return;} */
}
}
function getPicChange(unique){
	var out = unique;
	if(unique == 'wall'){
		out = 'wall_post';
	} else if(unique == 'shelf'){
		out = 'shelf_post';
	}
	return out;
}