var code25 = [
    0x06, 0x11, 0x09, 0x18, 0x05,
    0x14, 0x0c, 0x03, 0x12, 0x0a
];

class ITF14Drawer extends BaseDrawer {
    constructor() {
        super(cvs.width * 0.1, cvs.height * 0.2, 2.0, cvs.height * 0.5);
        this.outCode = [];
    }

    draw(inStr) {
        inStr = "69" + inStr;
        let sum = 0;
        for (let i = 0, len = inStr.length; i < len; i++) {
            if (i % 2 == 0) {
                sum += (inStr[i] - '0') * 3;
            } else {
                sum += (inStr[i] - '0');
            }
        }
        let checkCode = (10 - sum % 10) % 10;
        inStr += checkCode;
        inStr = "0" + inStr;

        //  start code
        this.outCode.push(false);
        this.outCode.push(false);
        this.outCode.push(false);
        this.outCode.push(false);
        //  main code
        for (let i = 0, len = inStr.length; i < len; i += 2) {
            let sym = 0x10,
                j = 5;
            let first = code25[inStr[i]];
            let second = code25[inStr[i + 1]];
            while (sym >= 0x1) {
                this.outCode.push((sym & first) > 0);
                this.outCode.push((sym & second) > 0);
                // console.log("f: " + (sym & first) + ", sec: " + (sym & second));
                sym >>= 1;
            }
        }
        //  end code
        this.outCode.push(true);
        this.outCode.push(false);
        this.outCode.push(false);

        for (let i = 0, len = this.outCode.length; i < len; i++) {
            this.Flush(this.outCode[i], i % 2 == 0, false);
        }

        //  draw text
        ctx.font = "22px Arial";
        ctx.fillText(inStr, this.origin_x, 20 + this.pos_y + this.height);

    }

    clear() {
        this.outCode.splice(0, this.outCode.length);
        super.clear();
    }

    Flush(_fat, _fill, _long) {
        let tmpW = _fat ? this.width * 3.0 : this.width;
        ctx.beginPath();
        ctx.fillStyle = "rgba(0, 0, 0, 1.0)";
        if (_fill) {
            ctx.fillRect(this.pos_x, this.pos_y, tmpW, this.height);
        }
        ctx.closePath();
        this.pos_x += tmpW;
    }
}