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

    clear() {
        console.log("Clear!");
        //  clear canvas
        ctx.clearRect(0, 0, cvs.width, cvs.height);
        //  back to the origin
        this.pos_x = this.origin_x;
        this.pos_y = this.origin_y;
    }

    draw(org_str) {
        //draw 
    }

    Flush(_fat, _fill, _long) {

    }

}