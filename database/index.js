const mongoose = require('mongoose')

async function connectToDatabase(){
    await mongoose.connect('mongodb+srv://basnetmanish088:KsFaLxaGVoLDwBn9@cluster0.afae52v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    console.log("Database connected")
}

module.exports = connectToDatabase