function sushi() {
    return [1, 2, [3, 4], 5];
}


const [
    first,
    second,
    [
        third,
        fourth
    ],
    fifth
] = sushi() || []


console.log(third, fourth)

