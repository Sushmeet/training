const {MongoClient} = require('mongodb');

const database = 'TodoApp'
const collection = 'Users'

const url = `mongodb://localhost:27017/${database}`


MongoClient.connect(url, (err, client) => {
    if (err) {
        console.log('Could not connect', err);
    }
    else {
        const db = client.db(database);

        // db.collection(collection).findOneAndDelete({name: 'Bonny'}).then((doc) => {
        //     console.log(doc);
        // }, (err) => {
        //     console.log(err);
        // })

        db.collection(collection).deleteOne({name: 'Lance'}, (err, doc) => {
            console.log('doc',  doc.result);
            console.log('err', err);
        })


    }
})