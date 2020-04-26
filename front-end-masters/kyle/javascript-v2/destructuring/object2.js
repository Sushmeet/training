function sushi() {
    return {
        a: '1',
        b: '2',
        c: '3',
        // d: {
        //     e: '5'
        // }
    }
}


const {
    a,
    b,
    c,
    // d: X,
    m,
    d: {
        e
    } = {}
} = sushi() || {}

console.log(c,m, e)