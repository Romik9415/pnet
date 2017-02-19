var checkFile, nameF,typeOfFile, setname, buttonUpload;
selectedMethod = "get";
setname = function(){
	document.getElementById("label").textContent = nameF;
	buttonUpload = document.getElementById("upload_submit");
	if(nameF==""){
		buttonUpload.style.opacity = '0';
		document.getElementById("label").textContent = "Choose yours the best photo of cabbage...";

	}
	else buttonUpload.style.opacity = '1';
}
checkFile = function(){
	typeOfFile = nameF.substr(nameF.length - 3);
	if(typeOfFile=="png"||typeOfFile=="jpg"){
		alert("Done!");
		window.close();
	}
	else{
		alert("You can upload only PNG or JPG files")
	}
}