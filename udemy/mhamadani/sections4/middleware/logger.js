
const logger = (req, res, next) => {
    console.log('logging the logs');
    next()
}

module.exports = logger   // import the function directly

// module.exports = {
//     logger
// } // this exports an object and hence when u deconstruct at the other end u need to extract the object

