
const createUser = ({name = 'Sushi', email = 'sushi@gmail.com'}) => {
    console.log(`Add username ${name} with email ${email}`)
    return Promise.resolve({
        name,
        email,
    })
}


module.exports = {
    createUser,
}