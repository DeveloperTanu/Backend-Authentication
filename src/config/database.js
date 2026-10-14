const mongoose = require("mongoose");
const config = require("../config/config");

async function connectDB() {
    await mongoose.connect(config.MONGO_URI, {
        serverSelectionTimeoutMS: 10000,
    });

    console.log("Connected to DB");
}

module.exports = connectDB;
