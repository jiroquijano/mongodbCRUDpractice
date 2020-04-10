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

    const updateResult = db.collection('tasks').updateMany({
        completed: {$exists:true} //queries can have operators too check https://docs.mongodb.com/manual/reference/operator/query/
    },{
        $set : {completed: true}
    });

    updateResult.then((data)=>{
        console.log(data);
    }).catch((error)=>{
        console.log(error);
    });

});