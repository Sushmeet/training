var number = [1, 1, 2, 3, 4, 4];

// give back [1,2,3,4];

function unique(array) {
 return  array.reduce((acc, current) => {
    let value = acc.find(elm => elm === current);
    if (!value) {
        acc.push(current);
    }
    return acc;

  }, []);
}

let blah = unique(number);

console.log(blah);