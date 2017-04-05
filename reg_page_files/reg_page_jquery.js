$(document).ready(function() {

	var f_name = false;
	var l_name = false;
	var add_P = false;
	var add_C = false;
	var e_mail = false;
	var phone_No = false;
	var pass_word = false;
	var c_pass_word = false;
	$('#fname').on('blur', function() {

		var fname = $('#fname').val();
		var bool1 = fname.search(/^[a-zA-Z]*$/);
		var bool2 = fname.length;
		if (bool1 == -1 || bool2 == 0) {
			alert("First Name should only contain alphabets");
			f_name = false;
		} else {
			f_name = true;
		}
	});

	$('#lname').on('blur', function() {
		var lname = $('#lname').val();
		var bool = lname.search(/^[a-zA-Z]*$/);
		if (bool == -1) {
			alert("Last Name should only contain alphabets");
			l_name = false;
		} else {
			l_name = true;
		}
	});

	$('#addP').on('blur', function() {
		var addP = $('#addP').val();
		var bool = addP.length;
		if (bool == 0) {
			alert("Address cannot be null");
			add_P = false;
		} else {
			add_P = true;
		}
	});

	$('#checkBox').click(function() {
		var addP = $('#addP').val();
		if (addP.length == 0) {
			alert("please Enter Permanent Address");
		}
		$('#addC').val(addP);
		$('#addC').attr('disabled', true);
		add_C = true;
	});

	$('#addC').on('blur', function() {
		var addC = $('#addC').val();
		var bool = addC.length;
		if (bool == 0) {
			alert("Address cannot be null");
			add_C = false;
		} else {
			add_C = true;
		}
	});

	$('#email').on('blur', function() {
		var email = $('#email').val();
		var bool1 = email.search(/[a-z0-9._]+@[a-z]+.[a-z]{2,3}/);
		var bool2 = email.length;
		if (bool1 == -1 || bool2 == 0) {
			alert("Not a valid email");
			e_mail = false;
		} else {
			e_mail = true;
		}
	});

	$('#phoneNo').on('blur', function() {
		var phoneNo = $('#phoneNo').val();
		var bool1 = phoneNo.search(/[0-9]{10}/);
		var bool2 = phoneNo.length;
		if (bool1 == -1 || bool2 == 0) {
			alert("Not a valid phone no");
			phone_No = false;
		} else {
			phone_No = true;
		}
	});

	$('#password').on('blur', function() {
		var password = $('#password').val();
		var bool2 = addC.length;
		var bool1 = password.search(/[a-zA-Z0-9._@^\S]{8,16}/);
		if (bool1 == -1 || bool2 == 0) {
			alert("Not a valid password");
			pass_word = false;
		} else {
			pass_word = true;
		}
	});

	$('#c_password').on('blur', function() {
		var x = $('#password').val();
		var y = $('#c_password').val();
		if (x == y) {
			c_pass_word = true;
			EnableRegister();
		} else {
			alert("Both password should be same and should not be null");
			c_pass_word = false;
		}
	});
	$('#reset').on('click', function() {
		$('#fname').val("");
		$('#lname').val("");
		$('#email').val("");
		$('#addC').val("");
		$('#addP').val("");
		$('#phoneNo').val("");
		$('#password').val("");
		$('#c_password').val("");
		$('#checkBox').prop('checked', false);
	});

	function EnableRegister() {
		if (f_name == true && l_name == true && add_P == true && add_C == true && e_mail == true && phone_No == true && pass_word == true && c_pass_word == true) {

			$('#register').attr({
				'disabled': false
			});
			$('#register').on('click', function() {
				register_form();
			});
		} else {
			$('#register').attr({
				'disabled': true
			});
		}
	}

	function register_form() {
		var firstName = $('#fname').val();
		var lastName = $('#lname').val();
		var email = $('#email').val();

		var ul = $('#dashboard_id');
		//ul.append("type", "button");
		ul.append(firstName + " " + lastName).attr('title', email);
	}
});