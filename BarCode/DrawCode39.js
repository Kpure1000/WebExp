var code39 = [
    0x34, 0x121, 0x61, 0x160, 0x31, 0x130, 0x70, 0x25, 0x124, 0x64, // 0-9
    0x109, 0x49, 0x148, 0x19, 0x118, 0x58, 0xd, // a-g
    0x10c, 0x4c, 0x1c, 0x103, 0x43, 0x142, 0x13, // h-n
    0x112, 0x52, 0x7, // o-q
    0x106, 0x46, 0x16, // r-t
    0x181, 0xc1, 0x1c0, // u-w
    0x91, 0x190, 0xd0, // x-z
    0x85, 0x184, 0xc4, 0x94, 0xa8, 0xa2, 0x8a, 0x2a // 
];

class Code39Drawer extends BaseDrawer {
    constructor() {
        super(cvs.width * 0.1, cvs.height * 0.2, 2.0, cvs.height * 0.5);
    }

    draw(inStr) {
        inStr.toUpperCase();
        if (chk.checked == true) {
            let codeTotalNum = 0;
            for (let i = 0, len = inStr.length; i < len; i++) {
                codeTotalNum += this.GetIndex(inStr[i]);
            }
            codeTotalNum %= 44;
            inStr += this.GetChar(codeTotalNum);
        }
        //  starting code
        inStr = '*' + inStr;
        //  ending code
        inStr += '*';
        //  main code
        let orgL = 0;
        let isFill = true;
        let cCode;
        for (let i = 0, len = inStr.length; i < len; i++) {
            orgL = this.GetValue(inStr[i]);
            cCode = 0x100;
            isFill = true;
            for (let j = 0; j < 9; j++) {
                this.Flush((orgL & cCode) >> (8 - j),
                    isFill, false);
                cCode >>= 1;
                isFill = !isFill;
            }
            this.Flush(false, false, false);
        }

        //  draw text
        ctx.font = "22px Times New Roman";
        ctx.fillText(inStr, this.origin_x, 20 + this.pos_y + this.height);
    }

    GetChar(numIn) {
        if (numIn >= 0 && numIn <= 9) {
            return String.fromCharCode('0'.charCodeAt() + numIn);
        } else if (numIn >= 10 && numIn <= 10 + 'Z'.charCodeAt() - 'A'.charCodeAt()) {
            return String.fromCharCode('A'.charCodeAt() + numIn - 10);
        } else {
            switch (numIn) {
                case 36:
                    return '-';
                case 37:
                    return '.';
                case 38:
                    return ' ';
                case 39:
                    return '*';
                case 40:
                    return '$';
                case 41:
                    return '/';
                case 42:
                    return '+';
                case 43:
                    return '%';
                default:
                    return ' ';
            }
        }
    }

    GetIndex(chIn) {
        if (chIn >= '0' && chIn <= '9') {
            return chIn.charCodeAt() - '0'.charCodeAt();
        } else if (chIn >= 'A' && chIn <= 'Z') {
            return chIn.charCodeAt() - 'A'.charCodeAt() + 10;
        } else {
            switch (chIn) {
                case '-':
                    return 36;
                case '.':
                    return 37;
                case ' ':
                    return 38;
                case '*':
                    return 39;
                case '$':
                    return 40;
                case '/':
                    return 41;
                case '+':
                    return 42;
                case '%':
                    return 43;
                default:
                    return 36;
            }
        }
    }

    GetValue(chIn_org) {
        let index = this.GetIndex(chIn_org);
        return code39[index];
    }

    Flush(_fat, _fill, _long) {
        let tmpW = _fat ? this.width * 3.0 : this.width;
        if (_fill) {
            ctx.beginPath();
            ctx.fillStyle = "rgba(0, 0, 0, 1.0)";
            ctx.fillRect(this.pos_x, this.pos_y, tmpW, this.height);
            ctx.closePath();
        }
        this.pos_x += tmpW;
    }
}