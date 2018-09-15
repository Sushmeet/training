const car = {
    type: 'sedan',
    model: 1987,
    engine: '4 cylinder'
}

let { type } = car;

console.log(type);

// ----------------------

const printCar = ({ type, model, engine}, {owner}) => {
     console.log(`${type} car has ${model} and ${engine} and is owned by ${owner}`);
}

printCar(car, {owner: 'sushi'})

// ------------------------------

const companies = [
    'google',
    'facebook',
    'Uber'
];

[ name , ...rest ] = companies

console.log('name123', ...rest) // this outputs rest as facebook, Uber

// ------------
const places = [
    {name: 'Google', location: 'mountain view'},
    {name: 'Uber', location: 'San Fransico'},
    {name: 'Microsoft', location: 'Seattle'}
];

[ { location } ] = places

console.log(location);

//-------------

const google = {
    location2: ['Mountain View', 'New York', 'Miami']
}

 const { location2: [location2 , ...rest2] } = google

  console.log('location2', rest2)