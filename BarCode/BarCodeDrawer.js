var drawer39 = new Code39Drawer();
var drawer69 = new Code69Drawer();
var drawer14 = new ITF14Drawer();
// current drawer
var curDrawer;
var lengthControl;

onload = function() {
    OnCodeChanged();
}

function limit_ten_numbers() {
    console.log("UpUpUp");
    strIn.value = strIn.value.replace(/\D/g, '');
}

/**
 * For Code-39
 */
function limit_number_letter() {
    strIn.value = strIn.value.replace(/[^\w\.\/\-\ \$\+\%\*]/ig, '');
}

function limit_lenght(inStr) {
    if (inStr.length != 10) {
        alert("输入错误：需输入10个数字");
        return false;
    }
    return true;
}

/**
 * On Code Type Changed, change the current drawer
 */
function OnCodeChanged() {
    console.log("Code Type Changed: " + typeSel.value);
    switch (typeSel.value) {
        case "ct_code_39":
            lengthControl = function() { return true; };
            strIn.onkeyup = limit_number_letter;
            strIn.onafterpaste = limit_number_letter;
            curDrawer = drawer39;
            chk.onclick = function() { return true; };
            break;
        case "ct_ean_13":
            lengthControl = limit_lenght;
            strIn.onkeyup = limit_ten_numbers;
            strIn.onafterpaste = limit_ten_numbers;
            curDrawer = drawer69;
            chk.onclick = function() { return false; };
            break;
        case "ct_itf_14":
            lengthControl = limit_lenght;
            strIn.onkeyup = limit_ten_numbers;
            strIn.onafterpaste = limit_ten_numbers;
            curDrawer = drawer14;
            //  itf 14 dont need check code?
            chk.onclick = function() { return false; };
            break;
        default:
            curDrawer = drawer14;
            break;
    }
}

function DrawBarCode() {
    if (lengthControl(strIn.value)) {
        curDrawer.clear();
        curDrawer.draw(strIn.value);
    }
}