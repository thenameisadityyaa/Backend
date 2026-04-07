// server ko create karna

const express = require("express");

const app = express()

app.use(express.json()) //taki json ko easily read kar sake

const notes = []

/* title, description  */

// POST - Sends the data to server


/* POST /notes */
app.post("/notes",(req,res)=>{
    // console.log(req.body);
    notes.push(req.body);
    res.status(201).json({
        message: "note created sucessfully"
    })

})

/* GET /notes */
app.get("/notes",(req,res)=>{

    res.status(200).json({
        message:"note fetch sucessfully",
        notes: notes
    })

})

/*DELETE /notes */
app.delete("/notes/:index",(req,res)=>{
    const index = req.params.index;  //index = 1

    delete notes [index];

    res.status(200).json({
        message:"notes deleted sucessfully"
    })
})

app.patch("/notes/:index",(req,res)=>{
    const index = req.params.index;

    const description = req.body.description
    const title = req.body.title

    notes[index].description = description
    notes[index].title = title

    res.status(200).json({
        message:"notes updated sucessfully"
    })
})



module.exports = app