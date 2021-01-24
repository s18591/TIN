import {celsTo, fTo, kTo} from "./temp.js";
import {kmToM, mToKm} from "./dist.js";

function temperature(){
    let temp = document.getElementById('temp').value;
    let option = document.getElementById('Option').value;
    let res = "";
    switch (option){
        case "C" :
           res = celsTo(temp);
            break;
        case "F" :
           res = fTo(temp);
            break;
        case "K" :
           res = kTo(temp);
            break;
    }
    document.getElementById('Res').value = res;
}
function distance(){
    let dist = document.getElementById('dist').value;
    let option = document.getElementById('OptionDist').value;
    let res = "";
    switch (option){
        case "K" :
            res = kmToM(dist);
            break;
        case "M" :
            res = mToKm(dist);
            break;
    }
    document.getElementById('ResDist').value = res;
}
window.distance = distance;
window.temperature = temperature;


