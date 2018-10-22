const ladders = [
  {
    id: 1,
    height: 20
  },
  {
    id: 3,
    height: 25
  },
];


function findWhere(array, criteria) {
    const prop = Object.keys(criteria)[0];
    console.log('ladder.prop', array[0][prop]);
    console.log('criteria.prop', criteria[prop]);


   return array.find(ladder => ladder[prop] === criteria[prop]);
}

const result = findWhere(ladders, { height: 25});

console.log('result', result)