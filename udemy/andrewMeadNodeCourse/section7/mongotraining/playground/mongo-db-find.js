const {MongoClient} = require('mongodb')
const database = 'TodoApp';
const collection = 'Users';

MongoClient.connect(`mongodb://localhost:27017/${database}`, (err, client) => {
    if (err) {
        console.log(`Cannot connet to mongo db`, err)
    }
    else {

        const db = client.db(database);


        db.collection(collection).find(/*{name: 'Bonny'}*/).toArray().then((docs) => {
            console.log(JSON.stringify(docs, undefined, 2));

        }, (err) => {
            console.log('unable to get videos' , err);
        })
    }
})