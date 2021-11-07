 let arr = ["krishna","shiva","ramesh","gopal","shruthi","bhavana","alfiyaz"];


let titlecap = (n) =>
{
    let y= [];
    let cap =  (x) =>
    {
        return x.charAt(0).toUpperCase()+x.slice(1);
    }
   
    for(let i = 0 ; i<n.length;i++)
    {
     
        //g = g+" "+cap(n[i]);
       y[i]= cap(n[i]);
    }
    console.log(y);

}

titlecap(arr);