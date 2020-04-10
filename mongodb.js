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

    //single document delete
    db.collection('users').deleteOne({
        name: "Jiro"
    },(error,response)=>{
        if(error) return console.log(error);
        console.log(response.connection);
    });

    //multiple element delete using operator $in in query
    const promiseTypeResult = db.collection('users').deleteMany({
        name: {$in:["Jiro","Saf"]}
    });

    promiseTypeResult.then((data)=>{
        console.log(`deleted ${data.deletedCount} entries`);
    }).catch((error)=>{
        console.log(error);
    });

});