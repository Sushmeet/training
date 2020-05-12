//  Javascript does not have named arguments
// but we can use destructuring to simulate it 


const sushi = ({id , name, age} = {}) => {
    // const x = id;
    console.log(name);
    // console.log('id--', id, 'name--', name, 'age--', age);
}


sushi({
    // id: 1,
    name: 'sushi',
    age: '5'
})

const obj = {
    id: 1,
}



// this could cause a type error since at the call site no input is provided
// To avoid that we can just provide a default object to the actual funtion above., 
sushi();