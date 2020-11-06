function Second_L_G(arr_num)
{
    arr_num.sort(function(x,y)
    {
        return x-y;
    });
    var uniqa = [arr_num[0]];
    var result = [];

    for(var i=1; i < arr_num.length; i++)
    {
        if(arr_num[i-1] !== arr_num[i])
        {
            uniqa.push(arr_num[i]);
        }
    }
    result.push(uniqa[1],uniqa[uniqa.length-2]);
    return result.join(',');
}

console.log(Second_L_G([1,2,3,4,5]));