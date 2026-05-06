const mongoose = require("mongoose")

async function connectDB() {
    await mongoose.connect("mongodb+srv://yt:aGNJlIfOKpCNGiHO@yt-complete-backend.fdgaoq7.mongodb.net/")

    console.log("connected to db")
}

module.exports = connectDB