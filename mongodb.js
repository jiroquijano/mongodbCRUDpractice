const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

//connection url, options, callback (error,client)
MongoClient.connect(connectionURL, {useNewUrlParser:true, useUnifiedTopology:true}, (error,client)=>{
    if(error){
        return console.log(`Unable to connect to database!`);
    }
    //fetch db via client
    const db = client.db(databaseName);
    // //insert document into 'users' collection
    // db.collection('users').insertOne({
    //     name: 'Jiro',
    //     age: 28
    // }, (error, result)=>{
    //     console.log(result.ops);
    // });

    db.collection('users').insertMany([
        {
            name:'Bonna',
            age: 28
        },{
            name: 'Bok',
            age: 27
        }
    ],(error, result)=>{
        if(error){
            return console.log(`operation failed`);
        }
        console.log(result.ops);
    });

});