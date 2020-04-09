const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const ObjectID = mongodb.ObjectID;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

//connection url, options, callback (error,client)
MongoClient.connect(connectionURL, {useNewUrlParser:true, useUnifiedTopology:true}, (error,client)=>{
    if(error){
        return console.log(`Unable to connect to database!`);
    }
    //fetch db via client
    const db = client.db(databaseName);

    db.collection('users').findOne({
        name: "Bonna"
    },(error,response)=>{
        if(error) return console.log('did not find query');
        console.log(response);
    });

    db.collection('users').findOne({
        _id: new ObjectID("5e8ed4ba0a129043656ac70c")
    },(error,response)=>{
        if (error) return console.log(error);
        console.log(response);
    });
});