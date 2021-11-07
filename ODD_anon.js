let arr = [1,2,3,4,5,6,7,8,9,10];

let Odd = function (x) {
return x.filter( (n) => 
{
    for (let i =0 ;i<n;i++)
    {
        if(n % 2!=0 )
        {
            return true;
        }
        else return false ;
    }
});
}
console.log(Odd(arr));




