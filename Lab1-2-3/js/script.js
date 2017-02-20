var login, password, finalText;
finalText = function(){
	if((login=="admin")&&(password=="adm123")||((login=="admin1")&&(password=="adm1234"))){
	alert("You Admin" );
	console.log(document.getElementById("user_class"));
	window.open("upload_page.html");
	document.getElementById("user_class").textContent="Admin";
	}
	else if((login=="roman")&&(password=="roman")||((login=="andriy")&&(password=="123456"))){
	alert("Hello,"+ login);
	document.getElementById("userclass").textContent = "HEllo,User";
	}
	else{
		alert("Incorrect password");
		document.getElementById("userclass").textContent = "Hello, visitor ";
	}
}