const obj = {
    title: '',
    status: '400',
    code: 344,
    stack: 'string',
    source: {
        res: {
            title: 'some'
        }
    }
}


const {stack, source, ...resultObj} = obj

console.log('original obj----', obj);
console.log('result OBJ', resultObj);
