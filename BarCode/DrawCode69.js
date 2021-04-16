//  odd bit
var code13A = ["0001101", "0011001", "0010011", "0111101", "0100011", "0110001", "0101111", "0111011", "0110111", "0001011"];
//  even bit
var code13B = ["0100111", "0110011", "0011011", "0100001", "0011101", "0111001", "0000101", "0010001", "0001001", "0010111"];
//  right bit
var code13C = ["1110010", "1100110", "1101100", "1000010", "1011100", "1001110", "1010000", "1000100", "1001000", "1110100"];

class Code69Drawer extends BaseDrawer {
    constructor() {
        super(cvs.width * 0.1, cvs.height * 0.2, 2.0, cvs.height * 0.5);
        this.height_short = this.height * 0.85;
        this.outCode = [];
    }

    draw(inStr) {
        inStr = "69" + inStr;
        inStr += CalculateCheckCode(inStr);
        //  start: 101
        this.outCode.push("f");
        this.outCode.push("v");
        this.outCode.push("f");

        //  main left code
        this.outCode.push(code13A[inStr[1]]);
        this.outCode.push(code13B[inStr[2]]);
        this.outCode.push(code13B[inStr[3]]);
        this.outCode.push(code13B[inStr[4]]);
        this.outCode.push(code13A[inStr[5]]);
        this.outCode.push(code13A[inStr[6]]);

        //  middle: 01010
        this.outCode.push("v");
        this.outCode.push("f");
        this.outCode.push("v");
        this.outCode.push("f");
        this.outCode.push("v");


        //  main right code
        //  TODO:
        this.outCode.push(code13C[inStr[7]]);
        this.outCode.push(code13C[inStr[8]]);
        this.outCode.push(code13C[inStr[9]]);
        this.outCode.push(code13C[inStr[10]]);
        this.outCode.push(code13C[inStr[11]]);
        this.outCode.push(code13C[inStr[12]]);

        //  end: 101
        this.outCode.push("f");
        this.outCode.push("v");
        this.outCode.push("f");

        //  draw code
        for (let i = 0, len = this.outCode.length; i < len; i++) {
            for (let j = 0, lenStr = this.outCode[i].length; j < lenStr; j++) {
                if (this.outCode[i][j] == '0') // void
                    this.Flush(false, false, false);
                else if (this.outCode[i][j] == '1') // fill
                    this.Flush(false, true, false);
                else if (this.outCode[i][j] == 'v') // void+len
                    this.Flush(false, false, true);
                else if (this.outCode[i][j] == 'f') // fill+len
                    this.Flush(false, true, true);
            }
        }

        //  draw text
        ctx.font = "22px Times New Roman";
        ctx.fillText("6 ", this.origin_x - 22.0, 20 + this.pos_y - this.height * 0.15 + this.height);
        ctx.fillText(inStr.substring(1, 7), this.origin_x + 12.0, 20 + this.pos_y - this.height * 0.15 + this.height);
        ctx.fillText(inStr.substring(7, 13), this.origin_x + 102.0, 20 + this.pos_y - this.height * 0.15 + this.height);

    }

    clear() {
        this.outCode.splice(0, this.outCode.length);
        super.clear();
    }

    Flush(_fat, _fill, _long) {
        let realH = _long ? this.height : this.height_short;
        if (_fill) {
            ctx.beginPath();
            ctx.fillStyle = "rgba(0, 0, 0, 1.0)";
            ctx.fillRect(this.pos_x, this.pos_y, this.width, realH);
            ctx.closePath();
        }
        this.pos_x += this.width;
    }

}