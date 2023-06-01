console.log("JS maps: increment 7.");
var x0 = 55.790927;
var y0 = 49.114453;

var x1 = 55.797391;
var y1 = 49.105993;

var player1;
ymaps.ready(init);
function init() {
	console.log("init: called.");
	ymaps.panorama.locate([x0,y0]).done(
		function(panoramas) {
			//console.log("panorama.locate: done.")
			console.log("panaramas: " + panoramas);
			console.log("panaramas[0]: " + panoramas[0]);
			var player = new ymaps.panorama.Player(
												"player",
												panoramas[0]
			);
			player1 = player;
		},
		function() {}
	);
}

function onClickNext() {
	console.log("clicked Next");
	player1.moveTo([x1,y1]);
}

function onClickBack() {
	console.log("clicked Back");
}