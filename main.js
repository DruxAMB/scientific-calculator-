
var inp = document.getElementById("display");
var sci = document.getElementById("sciItem");


function btnShift(){
    sci.innerHTML = inp.value += " ";
}
function btnAlpha(){
    sci.innerHTML = inp.value += "Alpha";
}
function btnAbs(){
    sci.innerHTML = inp.value += "/";
}
function btnXThree(){
    sci.innerHTML = inp.value = Math.pow(display.value,3);
}
function btnMsetup(){
    sci.innerHTML = inp.value += "MSETUP";
}
function btnOn(){
    sci.innerHTML = inp.value = null;
}
function btnXone(){
    sci.innerHTML = inp.value = Math.pow(display.value,-1);
}
function btnLogSquare(){
    sci.innerHTML = inp.value = Math.log(display.value);
}
function btnADB(){
    sci.innerHTML = inp.value = display.value[0]+'/'+display.value[1];
}
function btnCubeRoot(){
    sci.innerHTML = inp.value = Math.cbrt(display.value);
}
function btnXsquare(){
    sci.innerHTML = inp.value = Math.pow(display.value,2);
}
function btnAsquareB(){
    sci.innerHTML = inp.value = Math.pow(display.value,display.value);
}
function btnLogBase(){
    sci.innerHTML = inp.value = Math.LOG2E;
}
function btnIn(){
    sci.innerHTML = inp.value = "In"+"("+inp.value+")";
}
function btnAA(){
    sci.innerHTML = inp.value = "("+display.value+")";
}
function btnAB(){
    sci.innerHTML = inp.value += "'";
}
function btnAC(){
    sci.innerHTML = inp.value += "hyp";
}
function btnAD(){
    sci.innerHTML = inp.value = Math.sin(display.value);
}
function btnAE(){
    sci.innerHTML = inp.value = Math.cos(display.value);
}
function btnAF(){
    sci.innerHTML = inp.value = Math.tan(display.value);
}
function btnAG(){
    sci.innerHTML = inp.value += "RCL";
}
function btnAH(){
    sci.innerHTML = inp.value += "ENG";
}
function btnAI(){
    sci.innerHTML = inp.value += "(";
}
function btnAJ(){
    sci.innerHTML = inp.value += ")";
}
function btnAK(){
    sci.innerHTML = inp.value = display.value[0]+"/"+display.value[1];
}
function btnAL(){
    sci.innerHTML = inp.value = display.value+display.value;
}



function btnSeven(){
    sci.innerHTML = inp.value += 7;
}
function btnEight(){
    sci.innerHTML = inp.value += 8;
}
function btnNine(){
    sci.innerHTML = inp.value += 9;
}
function btnDel(){
    sci.innerHTML = inp.value = inp.value.slice(0,-1);
}
function btnAc(){
    sci.innerHTML = inp.value = " ";
}
function btnFour(){
    sci.innerHTML = inp.value += 4;
}
function btnFive(){
    sci.innerHTML = inp.value += 5;
}
function btnSix(){
    sci.innerHTML = inp.value += 6;
}
function btnX(){
    sci.innerHTML = inp.value += "*";
}
function btnDivide(){
    sci.innerHTML = inp.value += "/";
}
function btnOne(){
    sci.innerHTML = inp.value += 1;
}
function btnTwo(){
    sci.innerHTML = inp.value += 2;
}
function btnThree(){
    sci.innerHTML = inp.value += 3;
}
function btnPlus(){
    sci.innerHTML = inp.value += "+";
}
function btnSubtract(){
    sci.innerHTML = inp.value += "-";
}
function btnZero(){
    sci.innerHTML = inp.value += 0;
}
function btnDot(){
    sci.innerHTML = inp.value += ".";
}
function btnXten(){
    sci.innerHTML = inp.value += "*10";
}
function btnAns(){
    sci.innerHTML = inp.value = eval(display.value);
}
function btnEqual(){
    sci.innerHTML = inp.value = eval(display.value);
}