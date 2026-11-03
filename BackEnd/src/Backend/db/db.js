const mongoose = require("mongoose");


async function connectDB() {

    await mongoose.connect("mongodb+srv://1426bhuvanesh_db_user:q9Hkvf8liPFH72Tw@cluster0.vgcr5mv.mongodb.net/Project-1", 
 console.log("MongoDB connected successfully"));

}

module.exports = connectDB;