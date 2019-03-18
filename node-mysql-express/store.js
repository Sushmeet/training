const db = require('knex')(require('./knexfile.js'))


const createUser = ({name = 'Sushi', email = 'sushi@gmail.com', password = 'defaul password'}) => {
    return db('user').insert({
        username: name,
        email,
        password
    })
    // return Promise.resolve({
    //     name,
    //     email,
    // })
}


module.exports = {
    createUser,
}