const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../Models/listing.js");

const MONGO_URL = 'mongodb://127.0.0.1:27017/airbnb';

async function main() {
    try {
        await mongoose.connect(MONGO_URL);
        console.log("connected to db");
        await initDB();
    } catch (err) {
        console.log(err);
    }
}

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data =initData.data.map((obj)=>({ ...obj,owner:"68879a95834435b9e0db3ac4"}));
    await Listing.insertMany(initData.data);
    console.log("data is initialized");
};

main();
