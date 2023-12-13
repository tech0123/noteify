const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://username:password@cluster0.d7hlqy6.mongodb.net/notes?retryWrites=true&w=majority";

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected to MongoDB successfully!");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
    }
};

module.exports = connectToMongo;