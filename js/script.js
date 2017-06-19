var numeroSlide = 1;
var formatearLoop = false;
var cantidadImg = $("#slide ul li").length;

$("#slide ul").css({
	"width":(cantidadImg*100) + "%"
});
$("#slide ul li").css({
	"width":(100/cantidadImg) + "%"
});



/* Indicadores */

$("#indicator li").click(function(){
	var roleSlide = $(this).attr("role-slide");
	console.log("roleSlide",roleSlide);

	$("#slide ul li").css({
		"display": "none"
	});

	$("#slide ul li:nth-child("+roleSlide+")").fadeIn();

	$("#indicator li").css({
		"opacity": ".5"
	});

	$(this).css({
		"opacity": "1" 
	});

	formatearLoop=true;

	numeroSlide=roleSlide;
});

/* Avanzar */
function avanzar(){
	if(numeroSlide >= cantidadImg){
		numeroSlide = 1;
	}else{
		numeroSlide++;
	}
	
	$("#slide ul li").css({
		"display":"none"
	});

	$("#slide ul li:nth-child("+numeroSlide+")").fadeIn();

	$("#indicator li").css({
		"opacity":".5"
	});

	$("#indicator li:nth-child("+numeroSlide+")").css({
		"opacity": "1"
	});
};


/* Flechas */

/* Right */

$("#right").click(function(){
	avanzar();
	formatearLoop=true;
});


/* Left */
$("#left").click(function(){

	if(numeroSlide <= 1){
		numeroSlide = cantidadImg;
	}else{
		numeroSlide--;
	}
	
	$("#slide ul li").css({
		"display":"none"
	});

	$("#slide ul li:nth-child("+numeroSlide+")").fadeIn();

	$("#indicator li").css({
		"opacity":".5"
	});

	$("#indicator li:nth-child("+numeroSlide+")").css({
		"opacity": "1"
	});
	formatearLoop=true;
});



/* Loop */
setInterval(function(){
	if(formatearLoop){
		formatearLoop = false;
	}else{
		avanzar();
	}
}, 3000);