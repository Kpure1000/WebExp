var drawer39 = new Code39Drawer();
var drawer69 = new Code69Drawer();
var drawer14 = new ITF14Drawer();
var curDrawer;

onload = function() {
    OnCodeChanged();
}

/**
 * On Code Type Changed
 */
function OnCodeChanged() {
    console.log("Code Type Changed: " + typeSel.value);
    switch (typeSel.value) {
        case "ct_code_39":
            curDrawer = drawer39;
            chk.onclick = function() { return true; };
            break;
        case "ct_ean_13":
            curDrawer = drawer69;
            chk.onclick = function() { return false; };
            break;
        case "ct_itf_14":
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
    curDrawer.clear();
    curDrawer.draw(strIn.value);
}