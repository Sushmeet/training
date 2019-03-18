// rest operatior is ...args
// The rest operator syntax allows us to represent
// an indefinite number of arguments as an array.

const sum = (...args) => {
    // const args = [x, y, z];
    return args.reduce((acc, current) => {
        return acc + current;
    }, 0)
}


console.log(sum(1,2,3,4));