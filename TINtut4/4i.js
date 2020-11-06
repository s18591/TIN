function Coins(amount, coins)
{
    if (amount === 0)
    {
        return [];
    }
    else
    {
        if (amount >= coins[0])
        {
            left = (amount - coins[0]);
            return [coins[0]].concat( Coins(left, coins) );
        }
        else
        {
            coins.shift();
            return Coins(amount, coins);
        }
    }
}
console.log(Coins(138, [50,25, 10, 5, 2,1]));