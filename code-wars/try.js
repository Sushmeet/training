function reverse(list) {
//   let swap = 0;
//   for (let i = 0; i < list.length / 2; i++) {
//     swap = list[i];
//     list[i] = list[list.length - 1 - i];
//     list[list.length - 1 - i] = swap;
//   }
//   return list;
}

let result = reverse([3, 2, 1]);
// console.log(result);


// function rev(list) {
//     return list.reduce((a, b) => {
//         console.log('a', a);
//         console.log('b', b);
//         console.log('[b].concat(a)', [b].concat(a))
//         return [b].concat(a)
//     }, [])
// }

// rev=a=>a.reduce((a,b)=>[b].concat(a),[]);

// function rev(list) {
//     let newarr = [];
//     for (let i =0; i < list.length; i++) {
//        newarr =  [list[i]].concat(newarr)
//     }
//     return newarr
// }

// console.log(rev([4,3,2,1]))

function distance(x1, y1, x2, y2){
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)).toFixed(2)
    return Math.hypot()
  }

  console.log(distance(1,1,0,0))