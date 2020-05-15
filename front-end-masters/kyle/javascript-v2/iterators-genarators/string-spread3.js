const str = 'hello'

const result = str.split('')
console.log(result); // [ 'h', 'e', 'l', 'l', 'o' ]

const result2 = [...str]
console.log(result2); // [ 'h', 'e', 'l', 'l', 'o' ]

const result3 = {...str}
console.log(result3); // { '0': 'h', '1': 'e', '2': 'l', '3': 'l', '4': 'o' } quite weird
