var cvs = document.getElementById("canv");
var chk = document.getElementById("checker");
var strIn = document.getElementById("inputer");
var typeSel = document.getElementById("codeType");

var ctx = cvs.getContext("2d");

class BaseDrawer {
    constructor(orgx, orgy, width, height) {
        this.origin_x = orgx;
        this.origin_y = orgy;
        this.pos_x = this.origin_x;
        this.pos_y = this.origin_y;
        this.width = width;
        this.height = height;
    }

    /**
     * Clear the canvas
     */
    clear() {
        console.log("Clear!");
        //  clear canvas
        ctx.clearRect(0, 0, cvs.width, cvs.height);
        //  back to the origin
        this.pos_x = this.origin_x;
        this.pos_y = this.origin_y;
    }

    /**
     * Draw with the origin str
     * @param {Origin string} org_str 
     */
    draw(org_str) {
        //draw 
    }

    /**
     * Flush the canvas draw
     * @param {Is Fat} _fat 
     * @param {Is Fill} _fill 
     * @param {Is Long} _long 
     */
    Flush(_fat, _fill, _long) {

    }

}

/**
 * This check code is for EAN-13 or ITF-14
 * @param {string input} inStr 
 * @returns check code out
 */
function CalculateCheckCode(inStr) {
    // 698208180301 = 108
    //  9 2 8 8 3 1 -> 31*3=93 (weight of odd is 3)
    // 6 8 0 1 0 0 ? = 15
    // ? = (10 - 108 % 10) % 10 = 2
    let sum = 0;
    for (let i = 0, len = inStr.length; i < len; i++) {
        if (i % 2 == 0) {
            sum += (inStr[i] - '0');
        } else {
            sum += (inStr[i] - '0') * 3;
        }
    }
    let checkCode = (10 - sum % 10) % 10;
    return checkCode;
}