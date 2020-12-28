function $(id) {
    return document.getElementById(id);
}
var isWithName = true;
window.onload = function () {
    $("username").value = null;
    $("password").value = null;
    $("phonenumber").value = null;
    $("checkingcode").value = null;
}
function showBlock(i) {
    if (i == 1) {
        isWithName = false;
        var uname = $("username");
        var pass = $("password");
        uname.value = null;
        pass.value = null;
        $("with_name").style.display = "none";
        $("with_phone").style.display = "block";
    } else if (i == 2) {
        isWithName = true;
        var phone = $("phonenumber");
        var check = $("checkingcode");
        phone.value = null;
        check.value = null;
        $("with_name").style.display = "block";
        $("with_phone").style.display = "none";
    }
}

function checkSubmit() {
    if (isWithName) {
        var uname = $("username");
        var pass = $("password");
        if (uname.value.length == 0 || uname.value.length > 30
            || pass.value.length < 6 || pass.value.length > 20) {
            alert("Lenght Wrong");
            return false;
        }
        return true;
    } else {
        var phone = $("phonenumber");
        var check = $("checkingcode");
        if (phone.value.length > 11 || check.value.length > 4) {
            alert("Phone Wrong");
            return false;
        }
        return true;
    }
}
