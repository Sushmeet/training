const obj = {
    num: 3
}

const result = obj.num // 3

const isThere = obj.hasOwnProperty('num')

console.log('result---', result)
console.log('isThere---', isThere)

console.log('Object.prototype', Object)