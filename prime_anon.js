
let arr =[1,2,3,4,5,6,7,8,9,0,13,256];
let P = function (x) {
    return x.filter((n) => {
      for (let i = 2; i < n; i++) 
      {
        if (n % i === 0) return false;
      }
      return n > 1;
    });
  };
  console.log(P(arr));