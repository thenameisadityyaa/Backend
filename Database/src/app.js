const express  = require('express')
const noteModel = require("./model/note.model")
const app = express()


app.use(express.json());

/*

POST /notes => create a note
GET /notes => Get a note
DELETE /notes/:id=> Delete a note
PATCH /notes/:id => update a note

*/



app.post("/notes", async (req,res)=>{
    const data = req.body

    await noteModel.create({
        title: data.title,
        description : data.description
    })

    res.status(201).json({
        message: "note created successfully"
    })
})

app.get("/notes", async (req,res)=>{
    const notes = await noteModel.find()

    res.status(200).json({
        message:"Notes fetched sucessfully",
        notes: notes
    })
})

app.delete("/notes/:id", async (req,res)=>{
    const id = req.params.id

    await noteModel.findByIdAndDelete({
        _id:id
    })

    res.status(200).json({
        message:"note deleted sucessfully"
    })
})


app.patch("/notes/:id", async (req,res)=>{
    const id = req.params.id
    const description = req.body.description
    await noteModel.findOneAndUpdate(
        {_id:id},
        {description:description}
    )

    res.status(200).json({
        message: "Note Updated Sucessfully"
    })
})





module.exports = app