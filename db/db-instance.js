import mongoose from "mongoose";

const db= {};
db.mongoose=mongoose;

db.url = "mongodb://127.0.0.1:27017/deb";

db.mongoose.connect(db.url)
.then(() =>{
    console.log("Connected to Database XD");
})
.catch(err =>{
    console.log("Couldn't connect to Database XD");
    process.exit();
})

export default db;