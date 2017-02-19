var checkFile, nameF,typeOfFile, setname , chengeMethod, selectedMethod, doButtom, exetext;
selectedMethod = "get";

//start prompt
// window.onload = function (e) {
// 	var mess = prompt('Hello, how can I call you? ','Cabbage Slave');
// 	alert('Okey,'+ mess );
// 	document.getElementById("user_class").textContent = 'Hello, '+ mess;
// }
// Sent messages
feedback = function() {
	var mess = prompt('Whrite your feedback', ' Slave');
	alert('Your messages: \n '+mess +' \n Sent!' )
	
}
//Uploading images
setname = function(){
	document.getElementById("label").textContent = nameF;
	if(nameF==""){
		document.getElementById("label").textContent = "Choose a image...";
	}
}
checkFile = function(){
	typeOfFile = nameF.substr(nameF.length - 3);
	if(typeOfFile=="png"||typeOfFile=="jpg"){
		alert("Done!");
	}
	else{
		alert("You can upload only PNG or JPG files")
	}
}
chengeMethod = function(){
	document.getElementById("execution").setAttribute('method',selectedMethod);
}
doButtom = function(){
	alert(exetext+" :: "+ selectedMethod)
}

//New POP-Up window
	function popUpWindowOpen (e) {
	var myWindow = window.open("popUpWindow.html", "Upload Photos", "width=600,height=400,resize=no");
}

//Cabbage Gallery
var focusElement, photoNumber=1, selectedElement = document.querySelector('.img_big').src;

function setImage (e) {
	screen  = document.querySelector('.img_big');
	screen.src  = focusElement.src;
	focusElement.classList.add('selected');
}
function remuteSelected(e){
	// console.log(e);
	// if(selectedElement!=focusElement.src){
	// 	focusElement.classList.remove('selected');}
	// screen.src  = selectedElement;
	focusElement.classList.remove('selected');
	screen.src  = selectedElement;
}
function selectImg (e) {
	console.log(e.src);
	screen  = document.querySelector('.img_big');
	selectedElement = e.src;
	screen.src  = e.src;
	console.log(selectedElement);
}

		window.addEventListener('keydown', function (e) {
	const keyN = e.keyCode;
	screen  = document.querySelector('.img_big');
	if(keyN==39){
		if(photoNumber>=4){photoNumber=1}//DOnt forget chenge number if you wanna add new images!!!!
		else photoNumber++;
		screen.src = "images/img"+ photoNumber+".jpg";
	}
	if(keyN==37){
		if(photoNumber<=1){photoNumber=4}
		else photoNumber--;
		screen.src = "images/img"+ photoNumber+".jpg";
	}
});