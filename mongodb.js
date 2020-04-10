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

    const resultUpdate = db.collection('users').updateOne({
        _id: new ObjectID("5e8f442b3e2acffcfcb82802")
    },{
        //for update operations, an update operator ($set for example) is needed
        $set:{name:"Safiro"}
    });

    resultUpdate.then((data)=>{
        console.log(`data ${data}`);
    }).catch((error)=>{
        console.log(`error`);
    });

});