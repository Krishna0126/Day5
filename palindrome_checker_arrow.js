let arr = ["krisirk","shihs","ramesh","gopal","shruthi","bhavanb","alfiifla"];

let palindromeCheck = (n) =>
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




