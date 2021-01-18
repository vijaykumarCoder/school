import express from 'express'
import data from './data.js'
var app = express();
var PORT = process.env.PORT || 5001;

app.get("/",(req,res) =>{
    res.send("Server is ready")
})
app.get("/api/students/",(req,res) => {
    res.send(data.allStudents)
})


app.listen(PORT, () => {
    console.log(`Server is running ${PORT}`)
})