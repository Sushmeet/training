const definetlyNotAString: any = 'Hello sushi'

const len1 = definetlyNotAString.length;
const len2 = (<string> definetlyNotAString).length;
const len3 = (definetlyNotAString as string).length;

console.log('len', len1);
console.log('len2', len2);
console.log('len3', len3);