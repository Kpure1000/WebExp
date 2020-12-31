function $(id) {
    return document.getElementById(id);
}
var pass_reg = /(?!.*\s)(?!^[\u4e00-\u9fa5]+$)(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{6,20}$/;

var phone_reg = /^1(3[0-9]|4[5,7]|5[0,1,2,3,5,6,7,8,9]|6[2,5,6,7]|7[0,1,7,8]|8[0-9]|9[1,8,9])\d{8}$/;

function checkSubmit() {
    var uname = $("username");
    var phone = $("phonenum");
    var pass = $("password");
    var repass = $("repassword");
    if (uname.value.length == 0 || uname.value.length > 30 ||
        pass.value.length < 6 || pass.value.length > 20) {
        alert("User name or password is illegal");
        return false;
    }
    if (!phone_reg.exec(phone.value)) {
        alert("Phone number is illegal");
        return false;
    }
    if (!pass_reg.exec(pass.value)) {
        alert("Password is illegal(6~20; at least two kind of letter, number or charactor");
        return false;
    }
    if (pass.value != repass.value) {
        alert("The two passwords are inconsistent");
        return false;
    }
    return true;
}