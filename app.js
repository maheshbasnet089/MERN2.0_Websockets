const express = require("express")
const app = express()
const {Server} = require('socket.io')



const server = app.listen(4000,()=>{
    console.log("Server has started at port 4000")
})


const io = new Server(server)

io.on('connection',(socket)=>{
    // socket.emit("hi",{
    //     greeting : "Hello how are you"
    // })
    // console.log("Someone has connected!!")
    socket.on('sendData',(data)=>{
        if(data){
           io.to(socket.id).emit("response","Thank you your data was received")
            
            // socket.emit("response","Thank you your data was received")
        }
    })

    // socket.on("disconnect",()=>{
    //     console.log("Disconnected a user")
    // })
})