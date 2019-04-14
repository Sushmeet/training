const vowel = {
  x: 3.6,
  y: 7.4,
  z: 6.54
};

// old way of getting object values
// const x = vowel.x; // x = 3.6
// const y = vowel.y; // y = 7.4
// const z = vowel.z; // z = 6.54

// console.log('x:', x);

// us ES 6 destructuring to get the values

const {x: a, y , z: z} = vowel

console.log('a', a);
console.log('y', y);
console.log('z', z);


//----------------------------
const AVG_TEMPERATURES = {
    today: 77.5,
    tommrow: 79,
}

function getTempofTmrw(avgTemperatures) {
    // const {tommrow: tempOfTommrow} = avgTemperatures;
    // return tempOfTommrow
        const { tommrow } = avgTemperatures;
        return tommrow
}

function getTempofTmrw2({ today, tommrow }) {
    return tommrow;
}

console.log('getTempofTmrw func', getTempofTmrw(AVG_TEMPERATURES));
console.log('getTempofTmrw2 func', getTempofTmrw(AVG_TEMPERATURES));