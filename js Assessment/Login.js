function Show() {
    var showText = document.getElementById("pwd");
    showText.type = (showText.type === 'password') ? 'text' : 'password';
}

function validate() {
    var password1 = document.getElementById("password").value;
    var confirmPassword1 = document.getElementById("Confirmpassword").value;
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(details.email.value)) {
        if (password1.length >= 8 && password1 === confirmPassword1) {
            window.location.href = "Account.html"
        }
        else {
            alert("error in password")
        }
    }
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
        "</td</tr><tr><td>Confirmpassword</td><td> " + Confirmpassword +
        " </td></tr></tbody></table>"
}

function Showpass() {
    var showText = document.getElementById("password");
    showText.type = (showText.type === 'password') ? 'text' : 'password';
}

function Showconfirm() {
    var showText = document.getElementById("Confirmpassword");
    showText.type = (showText.type === 'password') ? 'text' : 'password';
}

function login() {
    window.location.href = "Login.html"
}

$(document).ready(function () {
    $("#form").submit(function (event) {
        event.preventDefault();

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
            var pwd = document.getElementById("pwd").value
            //regexp validation for email
            if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(form.mail.value) && pwd.length >= 8) {
                return (true)
            }
            else {
                alert("error in mail Id or password!")
            }
        }
        else
            alert('invalid account')
    });

    $("#change").click(function () {
        var oldpassword = document.getElementById("old").value
        var newpassword = document.getElementById("new").value
        var cpassword = document.getElementById("confirm").value
        if (newpassword.length >= 8) {
            if (newpassword == cpassword) {
                var data = { firstname, lastname, email, password, Confirmpassword } = JSON.parse(localStorage.getItem("data"));
                if (oldpassword == data.password) {
                    data.password = newpassword;
                    data.Confirmpassword = newpassword;
                    localStorage.setItem("data", JSON.stringify(data))
                    alert('password is updated')
                    login();
                }
            }
            else
                alert("error in password");
        }
        else
            alert("error in password")
    });
});
