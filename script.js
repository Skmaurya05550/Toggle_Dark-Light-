var p = true;

function toggle() {
    if (p) {
        document.documentElement.style.cssText = '--s: #ffdd80; --o: 0px; --c: #aacaff; --f: #efefef; --n: 60px; --t: 0px; --d: #2222252a;';
    } else {
        document.documentElement.style.cssText = '--s: #424248; --o: -15px; --c: #222222; --f: #131313; --n: 0px; --t: 10px; --d: #eaeaff2a;';
    }
    p = !p;
}



