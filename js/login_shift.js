function $(id) {
    return document.getElementById(id);
}

var reg = /^1(3[0-9]|4[5,7]|5[0,1,2,3,5,6,7,8,9]|6[2,5,6,7]|7[0,1,7,8]|8[0-9]|9[1,8,9])\d{8}$/;

var isSendSubmit = true;

$("sendbt").onclick = function() {
    isSendSubmit = true;
}
$("submitbt").onclick = function() {
    isSendSubmit = false;
}

function checkSubmit(type) {
    if (type == 0) {
        var uname = $("username");
        var pass = $("password");
        if (uname.value.length == 0 || uname.value.length > 30 ||
            pass.value.length < 6 || pass.value.length > 20) {
            alert("Lenght Wrong");
            return false;
        }
        return true;
    } else if (type == 1) {
        var phone = $("phonenumber");
        var check = $("checkingcode");
        if (!reg.exec(phone.value)) {
            alert("This is not a phone number");
            return false;
        }
        if (isSendSubmit) {
            $("checkingcode").value = '';
        } else if (!isSendSubmit) {
            if (check.value.length != 4) {
                alert("Check code input wrong");
                return false;
            }
        }
        return true;
    }
}