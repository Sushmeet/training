const { MongoClient , ObjectId } = require('mongodb');

const database = 'TodoApp';
const collection = 'Users';

const url = `mongodb://localhost:27017/${database}`;

MongoClient.connect(url, (err , client) => {
    const db = client.db(database);

    db.collection(collection).findOneAndUpdate({name: 'Joey'},{ $set :{location: 'China3'}, $inc : {age: 2}}, {returnOriginal: false}, (err, result) => {
        console.log(result);
    })
})