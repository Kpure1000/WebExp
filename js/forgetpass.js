function $(id) {
    return document.getElementById(id);
}

var reg = /^1(3[0-9]|4[5,7]|5[0,1,2,3,5,6,7,8,9]|6[2,5,6,7]|7[0,1,7,8]|8[0-9]|9[1,8,9])\d{8}$/;
var pass_reg = /(?!.*\s)(?!^[\u4e00-\u9fa5]+$)(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{6,20}$/;

var isSendSubmit = true;

$("sendbt").onclick = function() {
    isSendSubmit = true;
}
$("submitbt").onclick = function() {
    isSendSubmit = false;
}

function checkSubmit() {
    var phone = $("phonenumber");
    var check = $("checkingcode");
    var newpass = $('newpassword');
    if (!reg.exec(phone.value)) {
        alert("This is not a phone number!");
        return false;
    }
    if (!pass_reg(newpass.value)) {
        alert("New password is illegal(6~20; at least two kind of letter, number or charactor");
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