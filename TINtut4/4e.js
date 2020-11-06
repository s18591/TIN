//Longest Number
function findLongestWord(str) {
    var strSplit = str.split(' ');
    var longestWord = 0;
    for(var i = 0; i < strSplit.length; i++){
        if(strSplit[i].length > longestWord){
            longestWord = strSplit[i].length;
            word = strSplit[i];
        }
    }
    return word;
}
console.log(findLongestWord("Ad mortem inimicus"));