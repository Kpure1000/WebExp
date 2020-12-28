function $(id) {
    return document.getElementById(id);
}

function checkSubmit() {
    var uname = $("username");
    var pass = $("password");
    var repass = $("repassword");
    if (uname.value.length == 0 || uname.value.length > 30 ||
        pass.value.length < 6 || pass.value.length > 20) {
        alert("User name or password is illegal");
        return false;
    } else if (pass.value != repass.value) {
        alert("The two passwords are inconsistent");
        return false;
    }
    return true;
}