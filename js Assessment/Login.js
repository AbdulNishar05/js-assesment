function Show() {
    var showText = document.getElementById("pwd");
    if (showText.type == "password") {
        showText.type = "text";
    } else {
        showText.type = "password";
    }
}

function validate() {
    var password1 = document.getElementById("password").value;
    var confirmPassword1 = document.getElementById("Confirmpassword").value;
    if (password1.length >= 8) {
        if (password1 == confirmPassword1) {
            window.location.href = "Account.html"
        }
        else
            alert("error");
    }
    else
        alert("error")
}

function signup(event) {
    var data = {
        firstname: document.getElementById("firstname").value,
        lastname: document.getElementById("lastname").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        Confirmpassword: document.getElementById("Confirmpassword").value
    }
    localStorage.setItem("data", JSON.stringify(data))
    event.preventDefault();
}

function dispData() {
    var { firstname, lastname, email, password, Confirmpassword } = JSON.parse(localStorage.getItem("data"));
    var view = document.getElementById("demo")
    view.innerHTML =
        "<table><tbody><tr><td>firstname</td><td> " + firstname +
        " </td></tr><tr><td>lastname</td><td> " + lastname +
        " </td></tr><tr><td>email</td><td> " + email +
        " </td></tr><tr><td>password</td><td>" + password +
        "</td</tr><tr> <td>Confirmpassword</td><td> " + Confirmpassword +
        " </td></tr></tbody></table>"
}

$(document).ready(function () {
    $("#submit").click(function () {

        var enteredName = $("#mail").val();
        var enteredPass = $("#pwd").val();
        if (JSON.parse(localStorage.getItem("data")) != null) {
            var data = { firstname, lastname, email, password, Confirmpassword } = JSON.parse(localStorage.getItem("data"));
            var storedName = data.email;
            var storedPass = data.password;
            if (enteredName == storedName && enteredPass == storedPass) {
                window.location.href = "Account.html"
                alert("Logging in")
            }
            else {
                alert("Username or Password do not match!");
            }
            //regexp validation for email
            if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(form.mail.value)) {
                return (true)
            }
            else {
                alert("error in mail Id!")
            }
        }
        else {
            alert("data does not exist in local storage")
        }

    });

    $("#change").click(function () {
        var oldpassword = document.getElementById("old").value
        var newpassword = document.getElementById("new").value
        var cpassword = document.getElementById("confirm").value
        if (newpassword.length >= 8) {
            if (newpassword == cpassword) {
                var data = { firstname, lastname, email, password, Confirmpassword } = JSON.parse(localStorage.getItem("data"));
                if (oldpassword == data.password) {
                    console.log(data);
                    data.password = newpassword;
                    data.Confirmpassword = newpassword
                    console.log(data)
                }
            }
            else
                alert("error");
        }
        else
            alert("error")

    })
});
