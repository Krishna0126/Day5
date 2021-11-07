let arr = ["krisirk","shihs","ramesh","gopal","shruthi","bhavanb","alfiifla"];

let palindromeCheck = function (n) 
{
return n.filter( (x) => 
{
let y =x.split("").reverse().join("");    
   if(y==x)
   {
      return true;
   }
   else return false ;
});
}
console.log(palindromeCheck(arr));




