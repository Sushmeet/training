const orders = [
    { amount: 100 },
    { amount: 200 },
    { amount: 300 },
    { amount: 400 },
]

const total = orders.reduce((acc, curr) => {
    return acc + curr.amount;
}, 0)

console.log(total);