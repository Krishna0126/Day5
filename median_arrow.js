let x =[1,4,6,8,3,2,35];
let y =[5,9,15,13,12,7,11];

let medain =  (a,b) =>
{
    // let k=a.length;
    // let l=b.length;
    let arr = [...x,...y].sort((c,d)=> c-d);
    if(arr.length %2 ===0)
    {
        console.log((arr[arr.length/2]+arr[(arr.length/2)+1])/2);
    }
    else
    {
        console.log(arr[(arr.length+1)/2]);
    }

    //console.log(arr);
}

medain(x,y);