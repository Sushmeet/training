// let dragon = (name, size, element) => 
//     name + ' is a ' +
//     size + ' dragon that breathes ' +
//     element + '!'

//     console.log(dragon('fluffykins', 'tiny', 'lightening'));


// currying version of the same function 

let dragon = 
    name => 
        size => 
            element => 
                name + ' is a ' +
                size + ' dragon that breathes ' +
                element + '!'


    console.log(dragon('fluffykins')('tiny')('lightening'));