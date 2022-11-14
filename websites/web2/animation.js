
document.getElementById("demo").addEventListener("click", animation);


function animation(){
	

var audio = new Audio('VPT_Intro.mp3');
audio.play();

var paper = new Raphael(document.getElementById("svg"), 800, 600);

var backGround = paper.rect(0,0,800,600);

backGround.attr({ fill: "blue"});

var dunno = paper.rect(0, 100, 200, 500);

dunno.attr({ fill: "red"}); 

var dunno1 = paper.rect(200,100, 100, 800);

dunno1.attr({ fill: "green"});

var dunno2 = paper.rect(300, 100, 200, 500);

dunno2.attr({ fill: "red"}); 

var dunno3 = paper.rect(500,100, 100, 800);

dunno3.attr({ fill: "green"});

var dunno4 = paper.rect(600, 100, 200, 500);

dunno4.attr({ fill: "red"}); 

var dunno5 = paper.rect(800,100, 100, 500);

dunno5.attr({ fill: "green"});

var barrier = paper.rect(420, 400, 380, 100);

barrier.attr({ fill: "green"});

var barrier2 = paper.rect(0, 400, 380, 100);

barrier2.attr({ fill: "green"});

var img1 = paper.image("start1.png", 275, 20, 250, 100);
var img2 = paper.image("light.png", 0, -700, 450, 700);
var img3 = paper.image("light.png", 600, -700, 450, 700);
var s = paper.path("M -200 -300 l 0 300 l 200 0 l 0 -100 l -100 0 l 0 -100 l 100 0 l 0 -100 l -200 0 z");
 s.attr({ fill: "yellow",
		  stroke: "45-yellow-red",
		  'stroke-width': 10})
var s1 = paper.path("M 1000 900 l 0 -300 l -200 0 l 0 100 l 100 0 l 0 100 l -100 0 l 0 100 l 200 0 z");
s1.attr({ fill: "yellow",
		  stroke: "45-yellow-red",
		  'stroke-width': 10})
		  var ball = paper.circle(350,-50,30);
ball.attr({fill: "yellow",
		     stroke: "red",
			 'stroke-width': 15});

			 
function r_offscreen() {
    barrier.animate({x: 800}, 1000, l_offscreen);
}

function l_offscreen() {
	barrier2.animate({x: -500}, 1000, ro_offscreen);
}

function ro_offscreen() {
    barrier.animate({transform:"r090"}, 100,'bounce', ro_offscreen1);
}

function ro_offscreen1() {
    barrier2.animate({transform:"r090"}, 500,'bounce', l_onscreen);
}

function l_onscreen() {
    barrier.animate({x: 800, y: 940}, 1000, r_onscreen);
}

function r_onscreen() {
	barrier2.animate({x: -500, y: -260}, 1000);
}



function down() {
	dunno.animate({x: 0, y:400}, 400, 'bounce', up);
}

function up() {
	
	dunno.animate({x: 0, y: 100}, 2000, 'ease-in', l_offscreen1);
}
 function down1() {
	 dunno1.animate({x:200, y:550}, 2500, 'ease-in', up1);
 }
 function up1() {
	 dunno1.animate({x:200, y:0}, 2500, 'ease-in');
	 
 }	
 
 function down2() {
	dunno2.animate({x: 300, y:400}, 400, 'bounce', up2);
}

function up2() {
	
	dunno2.animate({x: 300, y: 100}, 2000, 'ease-in', d_offscreen1);
}
  function down3() {
	 dunno3.animate({x:500, y:550}, 2500, 'ease-in', up3);
 }
 function up3() {
	 dunno3.animate({x:500, y:0}, 2500, 'ease-in');
 }
  function down4() {
	dunno4.animate({x: 600, y:400}, 400, 'bounce', up4);
}

function up4() {
	
	dunno4.animate({x: 600, y: 100}, 2000, 'ease-in', r_offscreen1);
}
function r_offscreen1() {
    dunno4.animate({x: 800}, 1000);
}

function l_offscreen1() {
	dunno.animate({x: -500}, 1000);
}
function d_offscreen1() {
	dunno2.animate({y: 1000}, 1000);
}
function grow1() {
	barrier.animate({tranform:"2000s"},1000)
}
function fall() {
	img1.animate({x: 275, y:323}, 500, 'ease-in')
}
function ro_img() {
	img1.animate({transform:"r45"},400,'ease-in')
}
function of_img() {
	img1.animate({x:530, y:600},600)
}
function b_off() {
	barrier.animate({x: 1800, y:940}, 500, 'ease-in') 
}
function b_off1() {
	barrier2.animate({x: 1800, y:-260}, 812, 'ease-in') 
}
function bounce() {
	ball.animate({cx:462, cy:50,
	               fill: "red",
		     stroke: "yellow",
			 'stroke-width': 15}, 500, bounce2);
}
function bounce2() {
	ball.animate({cx:337, cy:150,
	              fill: "yellow",
		     stroke: "red",
			 'stroke-width': 15}, 400, bounce3);
}
function bounce3() {
	ball.animate({cx:462, cy:250,
	              fill: "red",
		     stroke: "yellow",
			 'stroke-width': 15}, 400, bounce4);
}
function bounce4() {
	ball.animate({cx:337, cy:350,
	              fill: "yellow",
		     stroke: "red",
			 'stroke-width': 15}, 400, bounce5);
}
function bounce5() {
	ball.animate({cx:462, cy:450,
	              fill: "red",
		     stroke: "yellow",
			 'stroke-width': 15}, 400, bounce6);
}
function bounce6() {
	ball.animate({cx:337, cy:550,
	              fill: "yellow",
		     stroke: "red",
			 'stroke-width': 15}, 400, bounce7);
}
function bounce7() {
	ball.animate({cx:462, cy:650,
	              fill: "red",
		     stroke: "yellow",
			 'stroke-width': 15}, 400, m_off);
}
function boarder() {
	img2.animate({y : 600}, 4000);
}
function boarder1() {
	img3.animate({y : 600}, 4000);
}
function m_off() {
	dunno1.animate({x: -500, y:0}, 500, m_off1); 
}
function m_off1() {
	dunno3.animate({x: 1000, y:0}, 500);
}
function u_on() {
	s.animate({path: "M 200 150 l 0 300 l 200 0 l 0 -100 l -100 0 l 0 -100 l 100 0 l 0 -100 l -200 0 z"}, 3000, changea);
}
function changea() {
	s.animate({path: "M 100 100 l 100 0 l 0 -100 l -200 0 z",
			   fill: "green" }, 200, 'elastic',changeb);
}
function changeb() {
	s.animate({path: "M 0 800  l 400 0 l -400 -400 l 0 400 z",
				fill: "red"}, 300, 'elastic', changec);
}
function changec() {
	s.animate({path: "M 300 300 l -300 300 l 0 -600 l 300 300 z",
	           fill: "red",
			   stroke: "yellow",
			   'stroke-width':20}, 400, "bounce");
}
function u1_on() {
	s1.animate({path:"M 600 450 l 0 -300 l -200 0 l 0 100 l 100 0 l 0 100 l -100 0 l 0 100 l 200 0 z"}, 3000, change1);
}

function change1() {
	s1.animate({path: "M 700 500 l -100 0 l 0 100 l 200 0 z",
	            fill: "green" }, 200, 'elastic', change2);  
  }
function change2() {
	s1.animate({path: "M 800 0 l -400 0 l 400 400 l 0 -400 z",
				fill: "red"}, 300, 'elastic', change3);
}
function change3() {
	s1.animate({path: "M 500 300 l 300 -300 l 0 600 l -300 -300 z",
	           fill: "red",
			   stroke: "yellow",
			   'stroke-width':20}, 400, "bounce");
}
down();
down1();
setTimeout(down2, 500);
down3();
setTimeout(down4, 1000);
setTimeout(r_offscreen, 1500);
setTimeout(fall, 500);
setTimeout(ro_img, 1550);
setTimeout(of_img, 2600);
setTimeout(b_off,6500);
setTimeout(b_off1,6500);
setTimeout(bounce,6800);
setTimeout(boarder,6400);
setTimeout(boarder1,6400);
setTimeout(u_on,10500);
setTimeout(u1_on,10500);

function scrollWin(x, y) {
    window.scrollBy(x, y);
}
scrollWin(0,900);

document.getElementById("demo").removeEventListener('click', animation);


var element = document.getElementById("demo");
element.parentNode.removeChild(element);


/*setTimeout(function() {
    var element = document.getElementById("demo");
    element.parentNode.removeChild(element);
	document.getElementById("demo").addEventListener("click", animation);
}, 12000);*/


}
