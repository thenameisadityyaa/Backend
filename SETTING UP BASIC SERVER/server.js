const express = require("express")  // require karta hai express ko npm wali site se

const app = express()   // server creation

app.get("/",(req,res)=>{
    res.send("Welcome to Homepage!");
})

app.get("/about",(req,res)=>{
    res.send("Welcome to About page");
})

app.get("/contact",(req,res)=>{
    res.send("Welcome to contact page");
})

app.get("/login",(req,res)=>{
    res.send("Login page");
})

app.listen(3000,(req,res)=>{
    console.log("Server running at port 3000");
});   //server running at port 3000