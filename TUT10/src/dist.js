function kmToM(km){
    var kmTemp = km;
    var mTemp = km/1.609;
    return kmTemp + 'km is ' + mTemp + ' miles';
}
function mToKm(miles){
var mTemp = miles;
var kmTemp = mTemp * 1.609;
return mTemp + 'm is ' + kmTemp + ' km';
}

export {kmToM}
export {mToKm}