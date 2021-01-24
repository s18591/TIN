function celsTo(cels){
    var cTemp = cels;
    var fTemp = cels * 9/5 + 32;
    var kTemp = cels + 273.15;
    return cTemp + '\xB0C is ' + fTemp + '\xB0F and ' + kTemp + '\xB0K';
}

function fTo(fahr){
    var fTemp = fahr;
    var cTemp = (fahr - 32) * 5/9;
    var kTemp = (fahr - 32) * 5/9 + 273.15;
    return fTemp + '\xB0F is ' + cTemp + '\xB0C and ' + kTemp + '\xB0K';
}

function kTo(kelvin){
    var kTemp = kelvin;
    var cTemp = kelvin - 273.15;
    var fTemp = (kelvin - 273.15) * 9/5 + 32;
    return kTemp + '\xB0K is ' + cTemp + '\xB0C and ' + fTemp + '\xB0F.'
}
export {kTo}
export {fTo}
export {celsTo}
