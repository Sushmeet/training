const suspectNames = ['Mr Green', 'mrs Peacock', 'Prof Plum'];
const weapons = ['Revolver', 'Knife'];
const rooms = ['Billiard Room', 'Kitchen'];

const createEmptyArray = (length, value) => {
    return Array(length).fill(value);
}


const emptyArray = createEmptyArray(4, 0)

const tracker = {};
const gameData = {
    suspectNames,
    weapons,
    rooms
}


Object.keys(gameData).forEach(section => {
    tracker[section] = {};
    gameData[section].forEach((arrayItem) => {
        tracker[section][arrayItem] = emptyArray
    })

})

console.log('tracker----', tracker)
