const { mongoose , closeConn} = require('../server/db/mongoose');
const { Todo } = require('../server/models/todo');
const { ObjectId } = require('mongodb');

const id = '5aa0dbcd2341961124384084';


if (!ObjectId.isValid(id)) {
    return console.log('Id not valid');
}

//  Todo.find({}).then((res) => {
//     console.log('find', res);
// })

// Todo.findOne().then((res) => {
//     console.log('findOne', res);
// })


Todo.findById(id)
.then((todo) => {
    if(!todo) {
        return console.log('id not found')
    }
    console.log('id', todo);
    closeConn();
})
.catch((e) => {
    console.log(e);
})
