window.onload = function() {
	document.getElementById('fname').onchange = function() {
		f_name3 = nameValidate();
	}

	document.getElementById('checkBox').onclick = function() {
		AddCheck();
	}

	document.getElementById('email').onchange = function() {
		e_mail = validateEmail();
	}

	document.getElementById('phoneNo').onchange = function() {

		P_No = validatePhoneNo();
	}
	document.getElementById('password').onchange = function() {
		Pass = validatePassword();
	}

	document.getElementById('c_password').onchange = function() {

		check_pass = CheckPassword();
		EnableRegister();

	}
	document.getElementById('register').onclick = function() {

		register_form();

	}


}
var f_name3 = false;
var e_mail = false;
var P_No = false;
var Pass = false;
var check_pass = false;


function nameValidate() {
	var fname = document.getElementById('fname');
	var bool = /^[a-zA-Z]*$/.test(fname.value);
	//var spacechk = !fname.value.replace(/\s/, '').length;
	if (bool == false) {
		alert("First Name should only contain alphabets");
		return false;
		EnableRegister();
	}
	//EnableRegister();
	return true;

}



function AddCheck() {
	var x = document.getElementById('addP');
	var y = document.getElementById('addC');
	if (document.getElementById('checkBox').checked == true) {
		y.value = x.value;
	}
}

function validateEmail() {
	var email = document.getElementById('email');
	var valid_email = /[a-z0-9._]+@[a-z]+.[a-z]{2,3}/;
	var bool = valid_email.test(email.value);
	if (bool == false) {
		alert("Not a valid email");
		return false;
		EnableRegister();
	}
	//EnableRegister();
	return true;
}



function validatePhoneNo() {
	var phoneNo = document.getElementById('phoneNo');
	var valid_phone_no = /[0-9]{10}/;
	var bool = valid_phone_no.test(phoneNo.value);
	if (bool == false) {
		alert("Not a valid phone no");
		return false;
		EnableRegister();
	}

	return true;
}

function validatePassword() {
	var password = document.getElementById('password');
	var valid_password = /[a-zA-Z0-9._@]{8,16}/;
	var bool = valid_password.test(password.value);
	if (bool == false) {
		alert("Not a valid password");
		return false;
		EnableRegister();
	}

	return true;
}



function CheckPassword() {
	var x = document.getElementById('password').value;
	var y = document.getElementById('c_password').value;
	if (x != y) {
		alert("Both password should be same");
		return false;
		EnableRegister();
	}

	return true;
}

function register_form() {

	var firstName = document.getElementById('fname').value;
	var lastName = document.getElementById('lname').value;
	var email = document.getElementById('email').value;

	var ul = document.getElementById('dashboard_id');

	var input = document.createElement("INPUT");

	input.setAttribute("type", "button");
	input.setAttribute("style", "border: none");
	input.setAttribute("title", email);
	input.setAttribute("value", firstName + " " + lastName);

	ul.appendChild(input);
}


document.getElementById('reset').onclick = function() {
	document.getElementById('fname').value = null;
	document.getElementById('lname').value = null;
	document.getElementById('email').value = null;
	document.getElementById('addC').value = null;
	document.getElementById('addP').value = null;
	document.getElementById('phoneNo').value = null;
	document.getElementById('password').value = null;
	document.getElementById('c_password').value = null;
}

function EnableRegister() {
	if (f_name3 == true && e_mail == true && P_No == true && Pass == true && check_pass == true) {
		document.getElementById('register').disabled = false;

	} else {
		document.getElementById('register').disabled = true;
	}
}
