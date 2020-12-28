var withName = document.getElementById("with_name");
var withPhone = document.getElementById("with_phone");

function showBlock(i) {
    if (i == 1) {
        withName.style.display = "none";
        withPhone.style.display = "block";
    } else if (i == 2) {
        withName.style.display = "block";
        withPhone.style.display = "none";
    }
}
