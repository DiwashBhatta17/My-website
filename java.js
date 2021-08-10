function validation() {
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var message = document.getElementById("message").value;
	var error_message = document.getElementById("error_message");
	var text;

	error_message.style.padding = "15px";

	if (name.length <5) {
		text= "Please Enter a Valid Name !";
		error_message.innerHTML =text;
		return false;
	}
	if (email.indexOf("@")== -1 || email.length<5) {
		text= "Please Enter a Valid Email !";
		error_message.innerHTML =text;
		return false;
	}
	if (name.message >3) {
		text= "Please Enter a Valid Message !";
		error_message.innerHTML =text;
		return false;
	}
	alert("The Form Submitted Successfully !")
	return true;

	// body...
}