//variablen
var fieldsetStage = document.querySelector("fieldset:nth-last-of-type(1)");
var fieldsetProject = document.querySelector("fieldset:nth-last-of-type(2)");

var menuButton = document.querySelector('nav');
var menuKnop = document.querySelector('.menu-button');

var projecten = document.querySelectorAll('.projecten');
var projectHeader = document.querySelectorAll('.project-knop');

//modernizer variable
var touch = document.querySelector('.touch');


console.log(projecten[0]);
console.log(projectHeader[0]);

var artikelen = document.querySelectorAll('.artikelen2');
var headerParagraaf = document.querySelectorAll('header > p');
var header = document.querySelectorAll('.artikel-knop');

for (var i=0; i < projecten.length; i++){
	projecten[i].classList.remove('fieldsetDisplay');
	projecten[i].classList.add('fieldsetHidden');
};

	for (var i=0; i < headerParagraaf.length; i++){

		headerParagraaf[i].classList.remove('fieldsetDisplay');
		headerParagraaf[i].classList.add('fieldsetHidden');
	
	};

//als je niet op touch zit laat dan mn nav altijd zien
if (touch == null){
	console.log('niet op touch');
	menuButton.classList.remove('fieldsetHidden');
	menuButton.classList.add('fieldsetDisplay');
	menuKnop.classList.add('fieldsetHidden');
	menuKnop.classList.remove('fieldsetDisplay');
}

//als je per ongeluk toch op touch bent laat nav dan enkel zien op klik van menubutton
if (touch != null ){
	console.log(' op touch');
		menuButton.classList.remove('fieldsetDisplay');
		menuButton.classList.add('fieldsetHidden');
		document.querySelector('.menu-button').onclick = function() {
			menuButton.classList.toggle("fieldsetDisplay");
		};
};

//als de fieldsetstage en de menubutton geen null is (op de formulier pagina dus)
if (fieldsetStage && menuButton != null){

	console.log(menuButton);
	console.log(fieldsetStage);
	console.log(headerParagraaf[0]);

	//codeblok om alle projecten en paragraven uit te lezne en te togglemn als je op header gaat klikken
	projectHeader[0].onclick = function (){
		projecten[0].classList.toggle("fieldsetHidden");
		headerParagraaf[0].classList.toggle("fieldsetHidden");
	}

	projectHeader[1].onclick = function (){
		projecten[1].classList.toggle("fieldsetHidden");
		headerParagraaf[1].classList.toggle("fieldsetHidden");	
	}

	projectHeader[2].onclick = function (){
		projecten[2].classList.toggle("fieldsetHidden");
		headerParagraaf[2].classList.toggle("fieldsetHidden");	
	}

	fieldsetStage.classList.add('fieldsetHidden');
	fieldsetProject.classList.add('fieldsetHidden');


	document.querySelector('input[type="radio"]').onclick = function() {
		fieldsetStage.classList.remove("fieldsetDisplay");
		fieldsetProject.classList.add("fieldsetDisplay");
	};

	document.querySelector('input[type="radio"]:last-of-type').onclick = function() {
		fieldsetProject.classList.remove("fieldsetDisplay");
		fieldsetStage.classList.add("fieldsetDisplay");
	};



	
}

//in alle andere gevallen, dus op de artikel pagina
else { 

	for (var i=0; i < artikelen.length; i++){
	
		artikelen[i].classList.remove('fieldsetDisplay');
		artikelen[i].classList.add('fieldsetHidden');
		console.log(artikelen[i]);
	};



	header[0].onclick = function (){
		artikelen[0].classList.toggle("fieldsetHidden");
		for( var i = 0; i < 3; i++){
			headerParagraaf[i].classList.toggle("fieldsetHidden");
			artikelen[0].classList.toggle("transition");
		}
	}

	header[1].onclick = function (){
		artikelen[1].classList.toggle("fieldsetHidden");
		for( var i = 3; i < 7; i++){
			headerParagraaf[i].classList.toggle("fieldsetHidden");
		}
	}

	header[2].onclick = function (){
		artikelen[2].classList.toggle("fieldsetHidden");
		for( var i = 7; i < 10; i++){
			headerParagraaf[i].classList.toggle("fieldsetHidden");
		}
	}

	header[3].onclick = function (){
		artikelen[3].classList.toggle("fieldsetHidden");
		for( var i = 10; i < 13; i++){
			headerParagraaf[i].classList.toggle("fieldsetHidden");
		}
	}

	header[4].onclick = function (){
		for( var i = 13; i < 16; i++){
			headerParagraaf[i].classList.toggle("fieldsetHidden");
		}
		artikelen[4].classList.toggle("fieldsetHidden");
	}

	projectHeader[0].onclick = function (){
		projecten[0].classList.toggle("fieldsetHidden");
		headerParagraaf[16].classList.toggle("fieldsetHidden");
	}

	projectHeader[1].onclick = function (){
		projecten[1].classList.toggle("fieldsetHidden");
		headerParagraaf[17].classList.toggle("fieldsetHidden");	
	}

	projectHeader[2].onclick = function (){
		projecten[2].classList.toggle("fieldsetHidden");
		headerParagraaf[18].classList.toggle("fieldsetHidden");	
	}



};

